import { NavigationContainer } from "@react-navigation/native";

import { Plant } from "@/libs/storage";
import { ConfirmationParams } from "@/pages/Confirmation";

import { StackRoutes } from "./stack.routes";

export type RootStackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  Confirmation: ConfirmationParams;
  PlantSelection: undefined;
  PlantSave: {
    plant: Plant;
  };
  MyPlants: undefined;
};

export const RootRoutes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
