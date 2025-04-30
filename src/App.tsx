import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

function App() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.titleBar}>
        <Text style={styles.text}>Title Bar</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  titleBar: {
    backgroundColor: 'rgba(255, 191, 191, 1)',
    padding: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 191, 191, 1)',
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333',
    backgroundColor: 'rgba(255, 127, 127, 1)',
  },
});

export default App;
