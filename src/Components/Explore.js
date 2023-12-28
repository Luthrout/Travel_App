

import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DestinationCard from './DestinationCard';
import SearchBar from './SearchBar';

const Explore = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState('');
  const [filteredDestinations, setFilteredDestinations] = useState([]);

  // Dummy data for destinations
  const destinations = [
    {
      id: '1',
      title: 'Paris',
      description: 'The city of love and lights',
      image: require('../../assets/Paris.jpg'),
      details: 'Paris is the capital city of France and is known for its romantic ambiance, iconic landmarks, and rich history. It is home to famous attractions such as the Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, and Champs-Élysées. Visitors can indulge in delicious French cuisine, explore charming neighborhoods like Montmartre, and experience the vibrant cultural scene. Paris is a must-visit destination for art, fashion, and romance enthusiasts.',
    },

    {
      id: '2',
      title: 'Tokyo',
      description: 'Discover the bustling city of Tokyo',
      image: require('../../assets/Tokio.jpg'),
      details: 'Tokyo is the capital city of Japan and is known for its futuristic technology, vibrant street fashion, and rich cultural heritage. It offers a unique blend of tradition and modernity, with attractions such as the Tokyo Skytree, Shibuya Crossing, Meiji Shrine, and Akihabara district. Visitors can indulge in delicious Japanese cuisine, explore traditional gardens and temples, and experience the vibrant nightlife. Tokyo is a vibrant city that never sleeps and provides endless opportunities for exploration and adventure.',
    },

    {     
     id: '3',
     title: 'Las Vegas',
     description: 'Experience the dazzling city of Las Vegas',
     image: require('../../assets/LasVegas.jpg'),
     details: 'Las Vegas is a world-renowned entertainment destination known for its vibrant nightlife, luxurious resorts, and thrilling casinos. The city offers a wide range of entertainment options, including live shows, concerts, magic performances, and extravagant stage productions. Visitors can explore iconic landmarks like the Las Vegas Strip, visit famous casinos like the Bellagio and Caesars Palace, and enjoy fine dining experiences by renowned chefs. Las Vegas is also surrounded by natural wonders, with nearby attractions like the Grand Canyon and Red Rock Canyon offering breathtaking views and outdoor activities. It is a city that never sleeps and promises excitement and entertainment for every visitor.',
    },

    {
      id: '4',
      title: 'Dubai',
      description: 'Discover the luxurious city of Dubai',
      image: require('../../assets/Dubai.jpg'),
      details: 'Dubai is a cosmopolitan city known for its iconic skyscrapers, luxurious hotels, and extravagant shopping malls. It is a city of contrasts, where traditional Arabian culture meets modern innovation. Visitors can marvel at the worlds tallest building, the Burj Khalifa, and explore the artificial islands of Palm Jumeirah. Dubai offers a range of experiences, from thrilling desert safaris to luxurious beach resorts. The city is also home to world-class dining, vibrant nightlife, and cultural attractions such as the Dubai Museum and the historic Al Fahidi neighborhood. With its futuristic architecture and opulent lifestyle, Dubai is a destination that promises an unforgettable experience.',
      },

      {
      id: '5',
      title: 'Singapore',
      description: 'Explore the vibrant city-state of Singapore',
      image: require('../../assets/Singapore.jpg'),
      details: 'Singapore is a modern and vibrant city-state in Southeast Asia. Known for its cleanliness, efficiency, and cultural diversity, Singapore offers a unique blend of experiences for visitors. From iconic landmarks like the Marina Bay Sands and Gardens by the Bay to vibrant neighborhoods like Chinatown and Little India, there is always something to discover in Singapore. Explore the bustling street markets, indulge in delicious street food, or relax in the lush greenery of the Botanic Gardens. Don\'t miss the opportunity to visit Sentosa Island, home to various attractions including Universal Studios Singapore. With its rich history, stunning architecture, and vibrant street life, Singapore is a destination that captivates travelers from around the world.',
      },
      
      {
        id: '6',
        title: 'New York City',
        description: 'Experience the vibrant energy of the Big Apple',
        image: require('../../assets/NewYork.jpg'),
        details: 'New York City, often referred to as the "Big Apple," is a city that never sleeps. From the iconic landmarks like the Statue of Liberty and Times Square to world-class museums like the Metropolitan Museum of Art and Broadway shows, there is always something happening in New York. Explore the diverse neighborhoods of Manhattan, stroll through Central Park, and enjoy the bustling streets filled with shops, restaurants, and entertainment. With its stunning skyline, vibrant culture, and endless opportunities, New York City is a must-visit destination for travelers.',
      },
      
      {
        id: '7',
        title: 'Rome',
        description: 'Discover the ancient history and architectural wonders',
        image: require('../../assets/Rome.jpg'),
        details: 'Rome, the capital city of Italy, is a treasure trove of ancient history and architectural wonders. From the iconic Colosseum and Roman Forum to the magnificent Vatican City with St. Peter\'s Basilica and the Sistine Chapel, Rome is a city that takes you back in time. Explore the charming streets of Trastevere, indulge in authentic Italian cuisine, and throw a coin in the Trevi Fountain for good luck. With its rich history, world-renowned art, and delicious food, Rome offers a unique and captivating experience for travelers.',
      },
    
      {
        id: '8',
        title: 'Sydney',
        description: 'Experience the beauty of Australia\'s harbor city',
        image: require('../../assets/Sydney.jpg'),
        details: 'Sydney, located in Australia, is renowned for its stunning harbor, iconic landmarks, and vibrant culture. Enjoy the breathtaking views of the Sydney Opera House and Sydney Harbour Bridge, relax on the beautiful beaches like Bondi and Manly, and explore the historic Rocks district. Immerse yourself in the city\'s diverse culinary scene, visit the world-class museums and galleries, and take a scenic ferry ride to explore the nearby coastal areas. With its laid-back atmosphere and natural beauty, Sydney is a city that offers a perfect blend of urban and outdoor experiences.',
     },
      

     {
      id: '9',
      title: 'Bali, Indonesia',
      description: 'Experience paradise on the Island of the Gods',
      image: require('../../assets/indonesia.jpg'),
      details: 'Bali is a tropical paradise known for its beautiful beaches, lush rice terraces, and vibrant culture. Explore ancient temples, such as Uluwatu and Tanah Lot, or indulge in world-class surfing in Kuta or Uluwatu. Visit the artistic town of Ubud, surrounded by rainforests and terraced rice paddies. Bali offers a perfect blend of relaxation and adventure, making it a popular destination for honeymooners and travelers seeking natural beauty and spiritual experiences.',
     },

     {
      id: '10',
      title: 'Iceland',
      description: 'Discover a land of fire and ice',
      image: require('../../assets/Iceland.jpg'),
      details: 'Iceland is a Nordic island country known for its dramatic landscapes, including volcanoes, geysers, hot springs, and glaciers. Experience the otherworldly beauty of the Blue Lagoon, go hiking in the stunning Thorsmork Nature Reserve, and chase the Northern Lights in winter. Iceland unique geography and geology make it a paradise for outdoor enthusiasts and photographers.',
     },
  
  
        
        
       

      
    
  ];

  // Function to filter destinations based on search text
  const filterDestinations = (searchText) => {
    const filteredDestinations = destinations.filter((destination) =>
      destination.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredDestinations(filteredDestinations);
  };

  // Update filtered destinations whenever search text changes
  useEffect(() => {
    filterDestinations(searchText);
  }, [searchText]);

  const handleDestinationPress = (destination) => {
    navigation.navigate('DestinationDetails', { destination });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search destinations"
        onChangeText={setSearchText}
      />
      <ScrollView>
        {searchText !== '' && filteredDestinations.length === 0 ? (
          <Text style={styles.noResultsText}>No results found</Text>
        ) : (
          filteredDestinations.map((destination) => (
            <TouchableOpacity
              key={destination.id}
             onPress={() => handleDestinationPress(destination)}
            >
            <DestinationCard destination={destination} onPress={handleDestinationPress} />
           </TouchableOpacity>

          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 30,
  },
  noResultsText: {
    alignSelf: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: 'gray',
  },
});


export default Explore;