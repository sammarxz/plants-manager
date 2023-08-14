import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";

export type RootStackParamList = {
  Welcome: undefined;
  UserIdentification: undefined;
  UserConfirmation: undefined;
  PlantSelection: undefined;
};

export const RootRoutes = () => (
  <NavigationContainer>
    <StackRoutes />
  </NavigationContainer>
);
