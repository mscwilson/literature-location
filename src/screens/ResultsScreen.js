import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsScreen = () => {
  return (
    <View style={style.container}>
      <Text>Results screen</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#DFEFCA',
    alignItems: 'center',
  },
});

export default ResultsScreen;
