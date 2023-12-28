//import necessary dependencies needed for the development
import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DestinationCard from './Card';
import HotelData from './HotelData';

//function to handle the destination details with navigations between the page,bookingpage,and back to explore page
const DestinationDetails = ({ route }) => {
  const { destination } = route.params;
  const navigation = useNavigation();

  const handleBookHotel = (hotel) => {
    const bookingAmount = parseFloat(hotel.price.replace('$', ''));

    navigation.navigate('Booking', { destination, bookingAmount });
  };
  
  //storing the HotelData with the destination title in a container, hotels.
  const hotels = HotelData[destination.title] || [];
  // the returning values of the declared function
  return (
    <View style={styles.container}>
      <ScrollView>
        <DestinationCard destination={destination} />
        <Text style={styles.title}>{destination.title}</Text>
        <Text style={styles.description}>{destination.description}</Text>
        <Text style={styles.details}>{destination.details}</Text>

        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <View key={hotel.id} style={styles.hotelContainer}>
              <Image source={hotel.image} style={styles.hotelImage} />
              <Text style={styles.hotelName}>{hotel.name}</Text>
              <Text style={styles.hotelPrice}>{hotel.price}</Text>
              <Text style={styles.hotelDetails}>{hotel.details}</Text>
              <Button title="Make hotel reservation" onPress={() => handleBookHotel(hotel)} />
            </View>
          ))
        ) : (
          <Text>No available hotels for this destination</Text>
        )}
      </ScrollView>
    </View>
  );
};

//creating styles for each prop
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  details: {
    fontSize: 14,
  },
  hotelContainer: {
    marginTop: 20,
  },
  hotelImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  hotelName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hotelPrice: {
    marginBottom: 5,
  },
  hotelDetails: {
    marginBottom: 10,
  },
});

export default DestinationDetails;




