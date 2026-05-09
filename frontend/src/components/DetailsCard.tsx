import React from "react";
import {
  View,
  Text,
} from "react-native";

import Feather from "@expo/vector-icons/Feather";

import { styles } from "../screens/Feedback/style";

export default function DetailsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.iconBox,
            { backgroundColor: "#FDECEC" },
          ]}
        >
          <Feather
            name="trending-up"
            size={24}
            color="#C0392B"
          />
        </View>

        <Text style={styles.cardTitle}>
          Pontos a Melhorar
        </Text>
      </View>

      <View style={styles.quoteBox}>
        <View style={styles.quoteBar} />

        <Text style={styles.quoteText}>
          "Melhorar a fluidez entre os parágrafos."
        </Text>
      </View>
    </View>
  );
}