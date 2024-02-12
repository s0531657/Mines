/*
Author Nate Lapointe
Assingment Mines
Date 02/12/24
*/

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { Link } from 'expo-router'; 
import Styles from '../styles/page-styles'; 

const HomeScreen = () => {
  return (
    // link to the 1 mine, 5 mines, 10 mines and 24 mine page
    <View style={Styles.page}>
      <Text>Select the number of mines:</Text>
      <Link
        style={Styles.button}
        href={{
          pathname: "/page2",
        }} asChild
      >
        <Pressable style={Styles.button}>
          <Text>1 mine</Text>
        </Pressable>
      </Link>
      <Link
        style={Styles.button}
        href={{
          pathname: "/five",
        }} asChild
      >
        <Pressable style={Styles.button}>
          <Text>5 Mines</Text>
        </Pressable>
      </Link>
      <Link
        style={Styles.button}
        href={{
          pathname: "/ten",
        }} asChild
      >
        <Pressable style={Styles.button}>
          <Text>10 Mines</Text>
        </Pressable>
      </Link>
      <Link
        style={Styles.button}
        href={{
          pathname: "/impossible",
        }} asChild
      >
        <Pressable style={Styles.button}>
          <Text>24 Mines</Text>
        </Pressable>
      </Link>


    </View>
  );
};

export default HomeScreen;