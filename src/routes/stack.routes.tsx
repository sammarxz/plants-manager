import { createStackNavigator } from "@react-navigation/stack";

import {
  PlantSave,
  PlantSelection,
  UserConfirmation,
  UserIdentification,
  Welcome,
} from "@/pages";

import { theme } from "@/styles";

import { RootStackParamList } from "./root.routes";

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
      <Stack.Screen name="UserConfirmation" component={UserConfirmation} />
      <Stack.Screen name="PlantSelection" component={PlantSelection} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
    </Stack.Navigator>
  );
}
