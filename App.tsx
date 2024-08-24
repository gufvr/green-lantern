import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import symbolOn from './assets/pics/symbol-on.png';
import symbolOff from './assets/pics/symbol-off.png';
import React, { useState } from 'react';

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleSymbol() {
    setIsActive((isActive) => {
      return !isActive;
    });
  }

  return (
    <View style={isActive ? styles.containerOn : styles.containerOff}>
      <TouchableOpacity onPress={handleSymbol}>
        <Image source={isActive ? symbolOn : symbolOff} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerOn: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOff: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
