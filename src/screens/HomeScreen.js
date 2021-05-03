/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the app</Text>
      <Button title="go to results" onPress={() => navigation.navigate('Results')}>
        A button
      </Button>
    </View>
  );
};

export default HomeScreen;
