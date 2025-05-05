import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from '../Theme';
import PropTypes from 'prop-types';

function RandomNumberCard({
  randomNumber,
  isSelected,
  onPress,
}: {
  randomNumber: number;
  isSelected: boolean;
  onPress: () => void;
}) {
  const {theme, isDarkMode} = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.numberListItem,
        isSelected ? styles.numberListItemSelected : null,
      ]}
      onPress={() => {
        console.log(randomNumber + ' pressed');
        onPress();
      }}>
      <Text style={[styles.numberListText, {color: theme.text}]}>
        {randomNumber}
      </Text>
    </TouchableOpacity>
  );
}

function GameScreen({randomNumberCount}: {randomNumberCount: number}) {
  const {theme, isDarkMode} = useTheme();

  const [randomNumbers] = useState(() =>
    Array.from(
      {length: randomNumberCount},
      () => Math.floor(Math.random() * 19) + 1,
    ),
  );

  const [targetNumber] = useState(() =>
    randomNumbers
      .slice(0, randomNumberCount - 2)
      .reduce((acc, curr) => acc + curr, 0),
  );

  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const isNumberSelected = (index: number) => {
    return selectedNumbers.includes(index);
  };

  const selectNumber = (index: number) => {
    if (!isNumberSelected(index)) {
      setSelectedNumbers([...selectedNumbers, index]);
    }
  };

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

        <View style={[styles.numberListContainer]}>
          {randomNumbers.map((number, index) => (
            <RandomNumberCard
              key={index}
              randomNumber={number}
              isSelected={isNumberSelected(index)}
              onPress={() => selectNumber(index)}
            />
          ))}
        </View>
      </SafeAreaView>
    </>
  );
}

GameScreen.propTypes = {
  randomNumberCount: PropTypes.number.isRequired,
};

RandomNumberCard.propTypes = {
  randomNumber: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

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
    marginVertical: 40,
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

  numberListItem: {
    backgroundColor: 'rgba(255, 127, 127, 1)',
    width: '40%',
    marginVertical: 15,
    padding: 20,
    alignItems: 'center',
    borderRadius: 10,
  },
  numberListContainer: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  numberListText: {
    fontSize: 25,
  },

  numberListItemSelected: {
    opacity: 0.5,
  },
});
