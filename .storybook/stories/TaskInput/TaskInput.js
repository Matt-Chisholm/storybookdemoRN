import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TaskInput = ({ value, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Add a new task"
      value={value}
      onChangeText={onChangeText}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default TaskInput;
