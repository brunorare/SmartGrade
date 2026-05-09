import React from "react";
import {
  View,
  Text,
  Image,
} from "react-native";

import { styles } from "../screens/Home/stylesComponents";

export default function UploadCard() {
  return (
    <View style={styles.imageCard}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
        }}
        style={styles.image}
      />

      <View style={styles.overlay}>
        <Text style={styles.overlayText}>
          Visualizando seu progresso.
        </Text>
      </View>
    </View>
  );
}