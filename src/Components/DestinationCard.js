//import necessary destinations needed for the development
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//function to allow navigation between the destination page(explore screen) to the destination details screen 
const DestinationCard = ({ destination }) => {
  const navigation = useNavigation();

  const handleDestinationPress = () => {
    navigation.navigate('DestinationDetails', { destination });
  };
//the function returning values
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handleDestinationPress}>
      <View style={styles.container}>
        <Image source={destination.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{destination.title}</Text>
          <Text style={styles.description}>{destination.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

//creating styles for each prop
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4,
  },
  container: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
});

export default DestinationCard;
