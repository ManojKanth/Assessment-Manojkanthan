import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../config/Colors';

interface CustomButtonProps {
  title: string;
  onButtonPress: () => void;
}
const CustomButton = ({title, onButtonPress}: CustomButtonProps) => {
  return (
    <TouchableOpacity onPress={onButtonPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    borderRadius: 5,
    paddingLeft: 10,
  },
  text: {
    color: Colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default CustomButton;
