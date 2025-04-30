import {View, Text, StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import {useTheme} from './Theme';

function App() {
  const {theme, isDarkMode} = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.statusBarBackground}
        barStyle={theme.statusBarStyle}
      />
      <SafeAreaView
        style={[styles.mainContainer, {backgroundColor: theme.background}]}>
        <View style={[styles.titleBar, {backgroundColor: theme.titleBar}]}>
          <Text style={[styles.text, {color: theme.text}]}>Title Bar</Text>
        </View>
        <View
          style={[
            styles.sectionContainer,
            {backgroundColor: theme.background},
          ]}>
          <Text style={[styles.text, {color: theme.text}]}>Hello World</Text>
          <Text style={[styles.text, {color: theme.text}]}>Hello World</Text>
          <Text style={[styles.text, {color: theme.text}]}>Hello World</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBar: {
    padding: 5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: 'space-evenly',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#333333', // This will be overridden by the theme
  },
});

export default App;
