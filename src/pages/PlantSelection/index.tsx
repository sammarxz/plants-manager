import { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Header, EnvironmentButton, Load } from "@/components";

import { PlantCard } from "@/components";

import { data } from "@/services/api";

import { styles } from "./styles";

interface Environment {
  key: string;
  title: string;
}

interface Plant {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelection() {
  const [selectedEnvironment, setSelectedEnvironment] = useState("all");
  const [isLoading, setLoading] = useState(true);
  const [plants, setPlants] = useState<Plant[]>([]);

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

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      const fetchedPlants = data.plants.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPlants((prevPlants) => [...prevPlants, ...fetchedPlants]);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

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
          renderItem={({ item }) => <PlantCard data={item} />}
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
