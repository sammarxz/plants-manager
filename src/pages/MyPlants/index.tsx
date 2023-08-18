import { useState, useEffect } from "react";
import { View, Text, Image, FlatList, Alert } from "react-native";
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

import { Button, Header, Load, PlantCardWaterd } from "@/components";
import waterDrop from "@/assets/waterdrop.png";
import { RootStackParamList } from "@/routes/root.routes";

import { styles } from "./styles";
import { usePlants } from "@/hooks";

type MyPlantsnProps = StackNavigationProp<RootStackParamList, "Confirmation">;

export function MyPlants() {
  const { myPlants, isLoading, nextWatered, plantRemove } = usePlants();
  const navigator = useNavigation<MyPlantsnProps>();

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
            <Text style={styles.spotlightText}>{nextWatered}</Text>
          </View>
          <View style={styles.plants}>
            <Text style={styles.plantTitle}>Próximas Regadas</Text>
            <FlatList
              data={myPlants}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <PlantCardWaterd
                  data={item}
                  handleRemove={() => plantRemove(item)}
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
