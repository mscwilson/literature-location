/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [reversedLocation, setReversedLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      const coords = { latitude: location.coords.latitude, longitude: location.coords.longitude };
      console.log(location);

      let reversedLocation = await Location.reverseGeocodeAsync(coords);
      setReversedLocation(reversedLocation);
      console.log(reversedLocation);
    })();
  }, []);

  let text = 'Waiting...';
  let city = 'Unknown';
  if (errorMsg) {
    text = errorMsg;
  } else if (location && reversedLocation) {
    text = JSON.stringify(location);
    city = reversedLocation[0].city;
  }

  return (
    <View style={style.container}>
      <View style={{ padding: 50 }}>
        <Text style={{ color: '#FFA62B', fontSize: 30, marginBottom: 40 }}>Welcome to the app</Text>
        <Text>{text}</Text>
        <Text>{city}</Text>
        <Button
          color="#7D82B8"
          title="Go to results"
          onPress={() => navigation.navigate('Results', { city })}>
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
