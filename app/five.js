/*
Author Nate Lapointe
Assingment Mines
Date 02/12/24
*/

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, Alert } from 'react-native';
import { Link } from 'expo-router';
import Styles from '../styles/page-styles';

const Tile = ({ isBomb, revealed, onPress }) => {
  return (
    <TouchableOpacity
      style={[Styles.tile, revealed ? (isBomb ? Styles.bombTile : Styles.revealedTile) : {}]}
      onPress={onPress}
      disabled={revealed}>
      {revealed && (isBomb ? <Text style={Styles.tileText}>500</Text> : <Text style={Styles.tileText}>500</Text>)}
    </TouchableOpacity>
  );
};

export default function five() {
  const gridSize = 5; // this is the gride size
  const totalTiles = gridSize * gridSize;
  const NUM_BOMBS = 5; // this is how many bombs
  const [revealedTiles, showTiles] = useState(Array(totalTiles).fill(false));

  // randomly put the bomb in the grid
  const bombPositions = new Set();
  while (bombPositions.size < NUM_BOMBS) {
    bombPositions.add(Math.floor(Math.random() * totalTiles));
  }

  const tilePress = (index) => {
    if (bombPositions.has(index)) {
      // when clicked on the bomb it shows this alert
      Alert.alert("Game Over", "You clicked on a bomb!", [
        { text: "Restart", onPress: () => showTiles(Array(totalTiles).fill(false)) }
      ]);
      return;
    }
    const updatedTiles = [...revealedTiles];
    updatedTiles[index] = true; // pressed tile
    showTiles(updatedTiles);
  };

  const getScore = () => {
    // 500 points when tile is reveled 
    return revealedTiles.filter((revealed, index) => revealed && !bombPositions.has(index)).length * 500;
  };

  const doneP = () => {
    // shows the users score and resets the game
    Alert.alert("Game Over", `Your score: ${getScore()}`, [
      { text: "OK", onPress: () => showTiles(Array(totalTiles).fill(false)) }
    ]);
  };

  return (
    <View style={Styles.page}>
      <Link href="/" asChild>
        <TouchableOpacity style={Styles.backButton}>
          <Text>←</Text>
        </TouchableOpacity>
      </Link>

      <View style={Styles.container}>
        {Array.from({ length: gridSize }).map((_, rowIndex) => (
          <View key={rowIndex} style={Styles.row}>
            {Array.from({ length: gridSize }).map((_, colIndex) => {
              const index = rowIndex * gridSize + colIndex;
              return (
                <Tile
                  key={index}
                  revealed={revealedTiles[index]}
                  isBomb={bombPositions.has(index)}
                  onPress={() => tilePress(index)}
                />
              );
            })}
          </View>
        ))}
      </View>

      <Button title="Done" onPress={doneP} />
    </View>
  );
}
