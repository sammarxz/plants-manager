import { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Alert } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Button, Header, Load, PlantCardWaterd } from "@/components";
import waterDrop from "@/assets/waterdrop.png";
import { Plant, loadPlants, removePLant } from "@/libs/storage";
import { RootStackParamList } from "@/routes/root.routes";

import { styles } from "./styles";

type MyPlantsnProps = StackNavigationProp<RootStackParamList, "Confirmation">;

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState("");
  const navigator = useNavigation<MyPlantsnProps>();

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

      setMyPlants(plants);
      setIsLoading(false);

      if (plants.length === 0) {
        return;
      }

      setNextWaterd(() => getFormatedNextWatered(plants));
    }

    initialSetup();
  }, []);

  function handleRemovePlant(plant: Plant) {
    Alert.alert("Remover", `Deseja remover a planta ${plant.name}?`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😢",
        onPress: async () => {
          try {
            await removePLant(plant);
            setMyPlants((prevState) =>
              prevState.filter((item) => item.id !== plant.id)
            );
          } catch (err) {
            Alert.alert(err as string);
          }
        },
      },
    ]);
  }

  function renderNoPlants() {
    return (
      <View style={styles.noPlantsContainer}>
        <Text style={styles.noPlantsEmoji}>🥰</Text>
        <Text style={styles.noPlantsText}>
          Que tal começar a cadastrar suas plantinhas?
        </Text>
        <View style={styles.noPlantsFooter}>
          <Button
            title="Cadastrar"
            onPress={() => navigator.navigate("PlantSelection")}
          />
        </View>
      </View>
    );
  }

  if (isLoading) {
    return <Load />;
  }

  return (
    <View style={styles.container}>
      <Header />
      {myPlants.length > 0 ? (
        <>
          <View style={styles.spotlight}>
            <Image source={waterDrop} style={styles.spotlightImage} />
            <Text style={styles.spotlightText}>{nextWaterd}</Text>
          </View>
          <View style={styles.plants}>
            <Text style={styles.plantTitle}>Próximas Regadas</Text>
            <FlatList
              data={myPlants}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <PlantCardWaterd
                  data={item}
                  handleRemove={() => handleRemovePlant(item)}
                />
              )}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <>{renderNoPlants()}</>
      )}
    </View>
  );
}
