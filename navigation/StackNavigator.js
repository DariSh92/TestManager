import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import TasksListScreen from '../screens/TaskListScreen';
import EditTaskScreen from '../screens/EditTaskScreen';

const MainStack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='Home'>
        <MainStack.Screen name="Home" component={Home} />
        <MainStack.Screen name="MyTasks" component={TasksListScreen} />
        <MainStack.Screen name="EditTask" component={EditTaskScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
