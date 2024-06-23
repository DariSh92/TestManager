import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../images/enot.jpeg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>SAY HI TO YOUR TASK MANAGER!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MyTasks')}
        >
          <Text style={styles.buttonText}>Go to Tasks</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'rgba(211, 211, 211, 0.5)', 
  },
  title: {
    fontSize: 24,
    marginBottom: 100,
    textAlign: 'center',
    color: 'black', 
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFF0F5',
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 30,
    borderWidth: 1,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
