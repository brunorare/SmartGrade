import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import { styles } from "../screens/Feedback/style";

export default function TipsCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View
          style={[
            styles.iconBox,
            { backgroundColor: "#F8EBFF" },
          ]}
        >
          <MaterialCommunityIcons
            name="lightbulb-outline"
            size={26}
            color="#9C27B0"
          />
        </View>

        <Text style={styles.cardTitle}>Sugestões</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <LinearGradient
          colors={["#2F5BB7", "#9C27B0"]}
          style={styles.button}
        >
          <Text style={styles.buttonText}>
            Gerar Exemplos
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}