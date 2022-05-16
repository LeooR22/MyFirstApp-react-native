import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const Counter = () => {
  const [counter, setCounter] = useState(10);

  // const onChangeCounter = value: number => {
  //   setCounter(prev => prev + value);
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>

      <Fab
        title="+1"
        onPress={() => setCounter(prev => prev + 1)}
        position="BR"
      />

      <Fab
        title="-1"
        onPress={() => setCounter(prev => prev - 1)}
        position="BL"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    textAlign: 'center',
    top: -5,
  },
});
