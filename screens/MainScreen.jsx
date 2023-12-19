import React, { useState } from 'react';
import { View, Button, FlatList, StyleSheet } from 'react-native';
import TaskInput from '../components/TaskInput';
import TaskItem from '../components/TaskItem';

const MainScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim().length === 0) return;
    setTasks([...tasks, { id: Date.now().toString(), title: task, completed: false }]);
    setTask('');
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <View style={styles.container}>
      <TaskInput value={task} onChangeText={setTask} />
      <Button title="Add Task" onPress={handleAddTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem task={item} toggleTaskCompletion={toggleTaskCompletion} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default MainScreen;
