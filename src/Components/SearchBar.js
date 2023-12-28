//import the necessary dependencies
import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
// function for the search bar component
const SearchBar = ({ placeholder, onChangeText }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChangeText}
      caretHiddenComponent={
        <View style={styles.cursor}></View>
      }
      selectionColor="black" // the color of the cursor
    />
  );
};

//styling for the props
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor:'white'
  },
  cursor: {
    width: 1, 
    backgroundColor: 'black',
  },
});
//export to the explore screen
export default SearchBar;
