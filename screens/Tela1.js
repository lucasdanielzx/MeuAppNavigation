import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Tela1({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta é a Tela 1</Text>
      <Button title="Ir para Tela 2" onPress={() => navigation.navigate('Tela2')} />
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
