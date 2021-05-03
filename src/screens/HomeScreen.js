/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <View style={{ padding: 50 }}>
        <Text style={{ color: '#FFA62B', fontSize: 30, marginBottom: 40 }}>Welcome to the app</Text>
        <Button
          color="#7D82B8"
          title="Go to results"
          onPress={() => navigation.navigate('Results')}>
          A button
        </Button>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEFCA',
    alignItems: 'center',
  },
});

export default HomeScreen;
