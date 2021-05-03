import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ResultsScreen = () => {
  return (
    <View style={style.container}>
      <View style={{ padding: 50 }}>
        <Text style={{ color: '#AFC2D5', fontSize: 30 }}>This is the results screen</Text>
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

export default ResultsScreen;
