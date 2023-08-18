import { useEffect, useState } from 'react';

import { Plant } from '@/libs/storage';
import { data } from '@/services/api';

interface PlantSelectionProps {
  selectedEnvironment: string;
}

export type PlantFetchAPIResultType = Omit<Plant, "hour" | "dateTimeNotification">

export function usePlantSelection({ selectedEnvironment }: PlantSelectionProps) {
  const [isLoading, setLoading] = useState(true);
  const [plants, setPlants] = useState< PlantFetchAPIResultType[]>([]);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const fetchedPlants: PlantFetchAPIResultType[] = await data.plants.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setPlants((prevPlants) => [...prevPlants, ...fetchedPlants]);
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredPlants =
    selectedEnvironment === 'all'
      ? plants
      : plants.filter((plant) =>
          plant.environments.includes(selectedEnvironment)
        );

  return {
    isLoading,
    filteredPlants,
  };
}