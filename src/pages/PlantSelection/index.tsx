import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Header, EnvironmentButton, Load } from "@/components";

import { PlantCard } from "@/components";
import { data } from "@/services/api";
import { RootStackParamList } from "@/routes/root.routes";
import { Plant } from "@/libs/storage";

import { styles } from "./styles";

type PlantSelectionProps = StackNavigationProp<
  RootStackParamList,
  "PlantSelection"
>;

interface Environment {
  key: string;
  title: string;
}

export function PlantSelection() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("all");
  const [isLoading, setLoading] = useState(true);
  const [plants, setPlants] = useState<Plant[]>([]);
  const navigation = useNavigation<PlantSelectionProps>();

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(async () => {
      const fetchedPlants = await data.plants.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPlants((prevPlants) => [...prevPlants, ...fetchedPlants]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const sortedEnvironments = data.plants_environments.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const allEnvironment: Environment = { key: "all", title: "Todos" };
  const environments: Environment[] = [allEnvironment, ...sortedEnvironments];

  const filteredPlants =
    selectedEnvironment === "all"
      ? plants
      : plants.filter((plant) =>
          plant.environments.includes(selectedEnvironment)
        );

  function handlePlantSelect(plant: Plant) {
    navigation.navigate("PlantSave", { plant });
  }

  if (isLoading) {
    return <Load />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.question}>
        <Text style={styles.questionTitle}>Em qual ambiente</Text>
        <Text style={styles.questionSubtitle}>
          você quer colocar sua planta?
        </Text>
      </View>
      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === selectedEnvironment}
              onPress={() => setSelectedEnvironment(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.options}
        />
      </View>
      <View style={styles.plantsWrapper}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => (
            <PlantCard data={item} onPress={() => handlePlantSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={2}
          contentContainerStyle={styles.plants}
          keyExtractor={(item) => String(item.id)}
        />
      </View>
    </View>
  );
}
