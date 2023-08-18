import { useState, useEffect } from "react";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { Alert } from "react-native";

import { Plant, loadPlants, removePlant, savePlant } from "@/libs/storage";

export function usePlants() {
  const [myPlants, setMyPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState("");

  useEffect(() => {
    async function initialSetup() {
      const plants = await loadStorageData();

      setMyPlants(plants);
      setIsLoading(false);

      if (plants.length === 0) {
        return;
      }

      setNextWatered(() => getFormatedNextWatered(plants));
    }

    initialSetup();
  }, []);

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

  function plantRemove(plant: Plant) {
    Alert.alert("Remover", `Deseja remover a planta ${plant.name}?`, [
      {
        text: "Não 🙏",
        style: "cancel",
      },
      {
        text: "Sim 😢",
        onPress: async () => {
          try {
            await removePlant(String(plant.id));
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

  async function plantSave(plant: Plant, selectedDateTime: Date, callback: () => void) {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      callback()
    } catch (err) {
      Alert.alert(err as string);
    }
  }

  return {
    myPlants,
    isLoading,
    nextWatered,
    plantRemove,
    plantSave
  };
}
