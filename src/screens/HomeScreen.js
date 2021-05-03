/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting...';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={style.container}>
      <View style={{ padding: 50 }}>
        <Text style={{ color: '#FFA62B', fontSize: 30, marginBottom: 40 }}>Welcome to the app</Text>
        <Text>{text}</Text>
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
