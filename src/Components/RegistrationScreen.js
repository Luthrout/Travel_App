import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, ImageBackground, ActivityIndicator, Text, Alert } from 'react-native';

import { auth } from './firebase';

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignUP = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setIsLoading(false);

        // Show a success alert to the user
        Alert.alert('Registration Successful', 'You have successfully created an account');
      })
      .catch(error => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  return (
    <ImageBackground source={require('../../assets/Password.jpg')} style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleSignUP} />

      {isLoading && <ActivityIndicator />}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    backgroundColor: '#fff',
    opacity: 0.7,
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default RegistrationScreen;
