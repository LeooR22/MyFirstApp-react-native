import React from 'react';
import {Text, View} from 'react-native';

export const HolaMundoScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: 'grey',
        justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <Text style={{fontSize: 45, textAlign: 'center'}}>Hola Leo</Text>
    </View>
  );
};
