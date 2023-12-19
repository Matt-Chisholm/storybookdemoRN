import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, toggleTaskCompletion }) => {
  return (
    <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)}>
      <Text style={{ ...styles.task, textDecorationLine: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  task: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default TaskItem;
