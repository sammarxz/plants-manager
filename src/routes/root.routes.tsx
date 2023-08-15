import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { Plant } from "@/pages/PlantSelection";

export type RootStackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  UserConfirmation: undefined;
  PlantSelection: undefined;
  PlantSave: {
    plant: Plant;
  };
};

export const RootRoutes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
