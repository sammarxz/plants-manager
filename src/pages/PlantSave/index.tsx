import { useState } from "react";
import { View, Text, Image, Platform, Alert } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { useRoute } from "@react-navigation/native";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { addMinutes, format, isBefore } from "date-fns";

import { Button } from "@/components";
import waterDrop from "@/assets/waterdrop.png";

import { Plant } from "../PlantSelection";

import { styles } from "./styles";

interface Params {
  plant: Plant;
}

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios");

  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(
    _event: DateTimePickerEvent,
    dateTime: Date | undefined
  ) {
    if (Platform.OS === "android") {
      setShowDatePicker((prevState) => !prevState);
    }

    if (dateTime && isBefore(addMinutes(dateTime, 1), new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert("Escolha uma hora no futuro! 🕓");
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((prevState) => !prevState);
  }

  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <Text style={styles.plantName}>{plant.name}</Text>
        <Text style={styles.plantAbout}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image source={waterDrop} style={styles.tipImage} />
          <Text style={styles.tipText}>{plant.water_tips}</Text>
        </View>
        <View style={styles.dateTimePicker}>
          <Text style={styles.alertLabel}>
            Ecolha o melhor horário para ser lembrado:
          </Text>
          {showDatePicker ? (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
              minimumDate={new Date()}
            />
          ) : null}

          {Platform.OS === "android" ? (
            <Button
              onPress={handleOpenDateTimePickerForAndroid}
              title={`Horário: ${format(selectedDateTime, "HH:mm")}`}
              variant="secondary"
            />
          ) : null}
        </View>
        <Button title="Cadastrar planta" onPress={() => {}} />
      </View>
    </View>
  );
}
