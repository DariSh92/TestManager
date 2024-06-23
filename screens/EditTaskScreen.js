import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask } from '../redux/taskSlice';

const EditTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params || {};
  const dispatch = useDispatch();
  const task = useSelector(state => state.tasks.tasks.find(task => task.id === taskId));

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    if (taskId) {
      dispatch(updateTask({ id: taskId, updatedTask: { title, description } }));
    } else {
      dispatch(addTask({ id: new Date().getTime(), title, description }));
    }
    navigation.goBack();
  };

  return ( 
    <ImageBackground
    source={require('../images/enot.jpeg')}
    style={styles.background}
  >
    <View style={styles.container}>
      {/* <Text style={styles.title}>Edit Task</Text> */}
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Task Title"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Task Description"
        style={styles.input}
      />
    <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
 </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    backgroundColor: 'rgba(211, 211, 211, 0.5)', 
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 60,
    borderColor: 'gray',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    marginBottom: 10,
    padding: 8,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#FFF0F5',
    paddingVertical: 8,
    paddingHorizontal: 26,
    borderRadius: 30,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditTaskScreen;
