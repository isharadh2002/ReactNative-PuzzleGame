import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import React from 'react';

let isDarkMode = false;

const lightTheme = {
  background: 'rgba(255, 223, 223, 1)',
  text: '#333333',
  titleBar: 'rgba(255, 191, 191, 1)', // Light Red
  buttonBackground: 'rgba(255, 127, 127, 1)',
  statusBarBackground: 'rgba(255, 191, 191, 1)',
  statusBarStyle: 'dark-content',
};

const darkTheme = {
  background: 'rgba(127, 0, 0, 1)',
  text: '#FFFFFF',
  titleBar: 'rgba(255, 31, 31, 1)', // Dark Red
  buttonBackground: 'rgba(255, 31, 31, 1)',
  statusBarBackground: 'rgba(255, 31, 31, 1)',
  statusBarStyle: 'light-content',
};

function App() {
  const colorScheme = useColorScheme(); // 'light' or 'dark'

  isDarkMode = colorScheme === 'dark';

  const statusBarStyle = isDarkMode ? 'light-content' : 'dark-content';

  const currentTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <>
      <StatusBar
        backgroundColor={currentTheme.statusBarBackground}
        barStyle={statusBarStyle}
      />
      <SafeAreaView
        style={[
          styles.mainContainer,
          {backgroundColor: currentTheme.background},
        ]}>
        <View
          style={[styles.titleBar, {backgroundColor: currentTheme.titleBar}]}>
          <Text style={[styles.text, {color: currentTheme.text}]}>
            Title Bar
          </Text>
        </View>
        <View
          style={[
            styles.sectionContainer,
            {backgroundColor: currentTheme.background},
          ]}>
          <Text style={[styles.text, {color: currentTheme.text}]}>
            Hello World
          </Text>
          <Text style={[styles.text, {color: currentTheme.text}]}>
            Hello World
          </Text>
          <Text style={[styles.text, {color: currentTheme.text}]}>
            Hello World
          </Text>
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
    color: '#333333',
  },
});

export default App;
