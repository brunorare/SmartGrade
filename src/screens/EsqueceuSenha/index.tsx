import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style'; // Importa o estilo que você acabou de criar

export default function EsqueceuSenha({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.containerEsqueceu}>
      <Text style={styles.tituloEsqueceu}>Recuperar Senha</Text>
      
      <Text style={styles.textoEsqueceu}>
        Digite seu e-mail abaixo para receber as instruções de recuperação.
      </Text>

      <TextInput
        style={styles.inputEsqueceu}
        placeholder="Seu e-mail cadastrado"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.botaoEsqueceu}>
        <Text style={styles.textoBotaoEsqueceu}>Enviar Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.voltarEsqueceu}>Voltar para o Login</Text>
      </TouchableOpacity>
    </View>
  );
}