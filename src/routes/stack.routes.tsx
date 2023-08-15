import { createStackNavigator } from "@react-navigation/stack";

import {
  PlantSave,
  PlantSelection,
  Confirmation,
  UserIdentification,
  Welcome,
  MyPlants,
} from "@/pages";

import { theme } from "@/styles";

import { RootStackParamList } from "./root.routes";
import AuthRoutes from "./tab.routes";

const Stack = createStackNavigator<RootStackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: theme.colors.white,
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PlantSelection" component={AuthRoutes} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="MyPlants" component={AuthRoutes} />
    </Stack.Navigator>
  );
}
