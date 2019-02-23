import React from 'react';
import { StyleSheet, Platform, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = {
  container : {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 24 : 0
  }
}
