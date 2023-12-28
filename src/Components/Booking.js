//import necessary dependencies for the development
import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

//on object which will allow booking with a function for handling the booking process
const Booking = ({ route }) => {
  const { destination, bookingAmount } = route.params;

  const handleBooking = () => {
    // Implement the booking logic here
    // I can make API calls or perform any other necessary operations

    // Example: Simulating a booking request and showing a confirmation alert on the screen
    //calling a method to allow booking request
    const bookingSuccessful = simulateBookingRequest();
    if (bookingSuccessful) {
      Alert.alert('Booking Successful', `Booking confirmed for ${destination.title}! Amount: ${bookingAmount}`);
    } else {
      Alert.alert('Booking Failed', 'Sorry, there was an error during the booking process. Please try again later.');
    }
  };

  // Simulate a booking request (I will Replace valid  booking logic later)
  const simulateBookingRequest = () => {
    // Simulate a successful booking
    return true;
    // Simulate a failed booking
    // return false;
  };
//the returning value for all object and functions
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hotel Booking</Text>
      <Text style={styles.destination}>{destination.title}</Text>
      <Text style={styles.amount}>Amount: {bookingAmount}</Text>
      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
};

//creating styles for the booking event props
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  destination: {
    fontSize: 18,
    marginBottom: 8,
  },
  amount: {
    fontSize: 16,
    marginBottom: 24,
  },
});

export default Booking;
