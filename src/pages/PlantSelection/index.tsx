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
import { usePlantSelection } from "@/hooks";
import { PlantFetchAPIResultType } from "@/hooks/usePlantSelection";

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
  const navigation = useNavigation<PlantSelectionProps>();
  const { isLoading, filteredPlants } = usePlantSelection({
    selectedEnvironment,
  });

  const sortedEnvironments = data.plants_environments.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  const allEnvironment: Environment = { key: "all", title: "Todos" };
  const environments: Environment[] = [allEnvironment, ...sortedEnvironments];

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
            <PlantCard
              data={item}
              onPress={() => handlePlantSelect(item as Plant)}
            />
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
