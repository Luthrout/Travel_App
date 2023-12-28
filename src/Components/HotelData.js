//dummy data I created for the destinations I have in my Explore screen
//this HotelData will be needed in the destination details screen and so will be imported there
const HotelData = {
    Paris: [
      {
        id: '1',
        name: 'Hotel Le Meurice',
        price: '$300',
        image: require('../../assets/ParisHotel1.jpg'),
        details: 'Hotel Le Meurice is a luxurious hotel located in the heart of Paris. It offers elegant rooms, Michelin-starred dining, and a central location near popular attractions.',
      },
      {
        id: '2',
        name: 'The Ritz Paris',
        price: '$400',
        image: require('../../assets/HotelParis.jpg'),
        details: 'The Ritz Paris is an iconic hotel known for its timeless elegance. It features opulent accommodations, gourmet dining options, and a legendary reputation.',
      },
      // will add more for paris
    ],
    Tokyo: [
      {
        id: '1',
        name: 'Park Hyatt Tokyo',
        price: '$350',
        image: require('../../assets/HotelTokyo.jpg'),
        details: 'Park Hyatt Tokyo is a luxurious hotel located in the bustling Shinjuku district. It offers spacious rooms, panoramic city views, and world-class dining experiences.',
      },
      {
        id: '2',
        name: 'Aman Tokyo',
        price: '$500',
        image: require('../../assets/HotelTokyo2.jpg'),
        details: 'Aman Tokyo is a tranquil sanctuary in the heart of Tokyo. It combines minimalist design, impeccable service, and a peaceful atmosphere for a truly relaxing stay.',
      },
       // will add more for Tokyo if needed
    ],
    LasVegas: [
      {
        id: '1',
        name: 'Luxor Hotel and Casino',
        price: '$150',
        image: require('../../assets/Las.jpg'),
        details: 'Luxor Hotel and Casino is a themed hotel with a distinctive pyramid-shaped structure. It offers spacious rooms, a variety of dining options, and a vibrant casino floor.',
      },
      {
        id: '2',
        name: 'Bellagio Hotel and Casino',
        price: '$250',
        image: require('../../assets/Richard.jpg'),
        details: 'Bellagio Hotel and Casino is a luxury hotel known for its iconic fountains, elegant accommodations, and world-class entertainment options.',
      },
       // will add more for Las Vegas if needed
    ],
    Dubai: [
      {
        id: '1',
        name: 'Burj Al Arab Jumeirah',
        price: '$500',
        image: require('../../assets/Richard.jpg'),
        details: 'Burj Al Arab Jumeirah is a luxurious hotel known for its iconic sail-shaped structure. It offers lavish accommodations, fine dining experiences, and stunning views of the Dubai skyline.',
      },
      {
        id: '2',
        name: 'Atlantis The Palm',
        price: '$400',
        image: require('../../assets/Richard.jpg'),
        details: 'Atlantis The Palm is a resort hotel located on the Palm Jumeirah island. It features an underwater aquarium, water park, private beach, and a variety of restaurants and bars.',
      },
       // will add more for Dubai if needed
    ],
    Singapore: [
      {
        id: '1',
        name: 'Marina Bay Sands',
        price: '$300',
        image: require('../../assets/Richard.jpg'),
        details: 'Marina Bay Sands is an iconic hotel with a stunning rooftop infinity pool. It offers luxurious accommodations, a wide range of dining options, and a world-class casino.',
      },
      {
        id: '2',
        name: 'Raffles Hotel Singapore',
        price: '$400',
        image: require('../../assets/Richard.jpg'),
        details: 'Raffles Hotel Singapore is a historic luxury hotel known for its colonial architecture and legendary hospitality. It offers elegant suites, a spa, and a range of dining experiences.',
      },
       // will add more for Singapore if needed
    ],
    NewYorkCity: [
      {
        id: '1',
        name: 'The Plaza',
        price: '$400',
        image: require('../../assets/Richard.jpg'),
        details: 'The Plaza is a legendary hotel located in the heart of Manhattan. It offers luxurious rooms, world-class dining options, and a timeless elegance that has attracted discerning travelers for over a century.',
      },
      {
        id: '2',
        name: 'The Standard High Line',
        price: '$250',
        image: require('../../assets/Richard.jpg'),
        details: 'The Standard High Line is a stylish hotel with a rooftop bar and breathtaking views of the city. It combines modern design with a vibrant atmosphere in the trendy Meatpacking District.',
      },
      // will add more for New York City if needed
    ],
    Rome: [
      {
        id: '1',
        name: 'Hotel Hassler Roma',
        price: '$350',
        image: require('../../assets/Richard.jpg'),
        details: 'Hotel Hassler Roma is a luxurious hotel located at the top of the Spanish Steps. It offers elegant accommodations, panoramic views of Rome, and a Michelin-starred restaurant.',
      },
      {
        id: '2',
        name: 'Rome Cavalieri, A Waldorf Astoria Hotel',
        price: '$400',
        image: require('../../assets/Richard.jpg'),
        details: 'Rome Cavalieri is a lavish hotel set in a lush park overlooking the city. It features spacious rooms, a grand spa, and an art collection that includes masterpieces by renowned artists.',
      },
      // will add more for Rome 
    ],
    Sydney: [
      {
        id: '1',
        name: 'Sydney Harbour Marriott Hotel at Circular Quay',
        price: '$300',
        image: require('../../assets/Richard.jpg'),
        details: 'Sydney Harbour Marriott Hotel at Circular Quay is a waterfront hotel with stunning views of the Sydney Opera House and Harbour Bridge. It offers comfortable rooms, a rooftop pool, and easy access to major attractions.',
      },
      {
        id: '2',
        name: 'Four Seasons Hotel Sydney',
        price: '$400',
        image: require('../../assets/Richard.jpg'),
        details: 'Four Seasons Hotel Sydney is a luxury hotel located in the vibrant Circular Quay district. It boasts stylish accommodations, a rooftop pool, a spa, and panoramic views of the Sydney skyline.',
      },
      // Will Add more hotels for Sydney if needed
    ],
  };
  
  export default HotelData;