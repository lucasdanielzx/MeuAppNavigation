import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tela2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a Tela 2</Text>
      <Button title="Voltar para Tela 1" onPress={() => navigation.navigate('Tela1')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
  },
  text: {
    fontSize: 20, marginBottom: 20,
  },
});
