//import necessary dependencies that will be needed in the development
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';


//Function to control homepage and explore screen navigation
const HomePage = ({ navigation }) => {
  const handleExplore = () => {
    // Navigate to the Explore screen after pressing the explore button
    navigation.navigate('Explore');
  };

  
//the function returning the values
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/Home.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay} />

        <Text style={styles.title}>Are you ready to travel with EarthX?</Text>

        <TouchableOpacity style={styles.button} onPress={handleExplore}>
          <Text style={styles.buttonText}>Explore</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
};

//create styles for each prop
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
    fontStyle:'italic',
  },
  button: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

export default HomePage;
