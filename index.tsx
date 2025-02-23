import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  
  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    'C', '0', '=', '+'
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{input}</Text>
      <View style={styles.buttonsContainer}>
        {buttons.map((btn) => (
          <TouchableOpacity key={btn} style={styles.button} onPress={() => handlePress(btn)}>
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  display: {
    fontSize: 32,
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 10,
    width: '90%',
    textAlign: 'right',
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '90%',
    justifyContent: 'center',
  },
  button: {
    width: '22%',
    margin: '1%',
    backgroundColor: 'black',
    padding: 20,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
  },
});