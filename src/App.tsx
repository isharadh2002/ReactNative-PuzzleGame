import BasicScreen from './screens/BasicScreen';
import React from 'react';
import GameScreen from './screens/GameScreen';

function App() {
  return (
    <>
      <GameScreen randomNumberCount={6}/>
    </>
  );
}

export default App;
