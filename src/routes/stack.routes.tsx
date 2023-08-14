import { createStackNavigator } from "@react-navigation/stack";

import { UserConfirmation, UserIdentification, Welcome } from "@/pages";

import { theme } from "@/styles";

const Stack = createStackNavigator();

type RootStackParamList = {
  Welcome: undefined;
  Details: undefined;
};

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
      <Stack.Screen name="UserCnfirmation" component={UserConfirmation} />
    </Stack.Navigator>
  );
}
