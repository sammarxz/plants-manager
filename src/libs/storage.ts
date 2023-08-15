import { storageKeys } from "@/config/keys";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { format } from "date-fns";

export interface Plant {
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
  hour?: string;
  dateTimeNotification?: Date
}

interface StoragePlantsProps {
  [id: string]: {
    data: Plant
  }
}

export async function savePlant(plant: Plant): Promise<void> {
  try {
    const data = await AsyncStorage.getItem(storageKeys.plants);
    const oldPlants = data ? (JSON.parse(data) as StoragePlantsProps) : {}
    const newPlant = {
      [plant.id]: {
        data: plant
      }
    }
    await AsyncStorage.setItem(storageKeys.plants, JSON.stringify({
      ...newPlant,
      ...oldPlants
    }))
  } catch (_) {
    throw new Error("Error saving plant");
  }
}

export async function loadPlants(): Promise<Plant[]> {
  try {
    const data = await AsyncStorage.getItem(storageKeys.plants);
    const plants = data ? (JSON.parse(data) as StoragePlantsProps) : {}

    const plantsSorted = Object
      .keys(plants)
      .map((plant) => {
          return {
              ...plants[plant].data,
              hour: format(new Date(plants[plant].data.dateTimeNotification!), 'HH:mm')
          }
      })
      .sort((a, b) => 
          Math.floor(
              new Date(a.dateTimeNotification!).getTime() / 1000 -
              Math.floor(new Date(b.dateTimeNotification!).getTime() / 1000)
          )
    );
    return plantsSorted;
  } catch {
    throw new Error("Error getting the plants");
  }
}