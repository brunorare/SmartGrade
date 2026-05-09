import React from "react";
import {
  View,
  Text,
} from "react-native";

import { styles } from "../screens/Feedback/style";

export default function ProgressCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.statsTitle}>
        ESTATÍSTICAS RÁPIDAS
      </Text>

      <View style={styles.statRow}>
        <Text style={styles.statLabel}>
          Média da Turma
        </Text>

        <Text style={styles.statValue}>7.2</Text>
      </View>

      <View style={styles.progressBar}>
        <View
          style={[
            styles.progressFill,
            { width: "72%" },
          ]}
        />
      </View>
    </View>
  );
}