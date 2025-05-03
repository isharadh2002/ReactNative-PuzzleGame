import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../Theme';

function GameScreen() {
  const {theme, isDarkMode} = useTheme();
  const targetNumber = 10 + Math.floor(Math.random() * 40);
  return (
    <>
      <StatusBar
        backgroundColor={theme.statusBarBackground}
        barStyle={theme.statusBarStyle}
      />

      <SafeAreaView
        style={[styles.mainContainer, {backgroundColor: theme.background}]}>
        <View style={[styles.titleBar, {backgroundColor: theme.titleBar}]}>
          <Text style={[styles.titleText, {color: theme.text}]}>
            Number Game
          </Text>
        </View>
        <View style={[styles.targetNumberContainer]}>
          <Text style={[styles.targetNumber, {color: theme.text}]}>
            {targetNumber}
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  targetNumber: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  targetNumberContainer: {
    marginVertical: 20,
    paddingVertical: 8,
    paddingHorizontal: 8,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '70%',
    backgroundColor: 'rgba(255, 127, 127, 1)',
    borderRadius: 10,
  },

  titleBar: {
    padding: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
