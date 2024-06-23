import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { List, IconButton, FAB } from 'react-native-paper';
import { deleteTask } from '../redux/taskSlice';

const TasksListScreen = ({ navigation }) => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = id => {
    dispatch(deleteTask({ id }));
  };

  const renderItem = ({ item }) => (
    <List.Item
      title={item.title}
      description={item.description}
      right={() => (
        <IconButton
          icon="delete"
          onPress={() => handleDeleteTask(item.id)}
        />
      )}
      onPress={() => navigation.navigate('EditTask', { taskId: item.id })}
      style={styles.listItem}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('EditTask')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingBottom: 80,
  },
  listItem: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFF0F5',
  },
});

export default TasksListScreen;
