import { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";

import { Header, Load, PlantCardWaterd } from "@/components";
import waterDrop from "@/assets/waterdrop.png";
import { Plant, loadPlants } from "@/libs/storage";

import { styles } from "./styles";

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");

  async function loadStorageData() {
    const plantsStorage = await loadPlants();
    return plantsStorage;
  }

  function getFormatedNextWatered(plants: Plant[]): string {
    const nexTime = formatDistance(
      new Date(plants[0].dateTimeNotification!).getTime(),
      new Date().getTime(),
      { locale: pt }
    );

    return `Não esqueça de regar a ${plants[0].name} à ${nexTime}`;
  }

  useEffect(() => {
    async function initialSetup() {
      const plants = await loadStorageData();

      setNextWaterd(() => getFormatedNextWatered(plants));
      setMyPlants(plants);
      setIsLoading(false);
    }

    initialSetup();
  }, []);

  if (isLoading) {
    return <Load />;
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image source={waterDrop} style={styles.spotlightImage} />
        <Text style={styles.spotlightText}>{nextWaterd}</Text>
      </View>
      <View style={styles.plants}>
        <Text style={styles.plantTitle}>Próximas Regadas</Text>
        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PlantCardWaterd data={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
