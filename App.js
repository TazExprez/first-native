// Here we are in the networking with React Native section.

import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Box from "./src/components/Box.js";
import Button from "./src/components/Button.js";
import Images from "./src/components/Images.js";
import Icons from "./src/components/Icons.js";
import ItemsList from "./src/components/ItemsList.js";
import Networking from "./src/components/Networking.js";

export default function App() {
  const [state, setState] = useState({
    name: "",
  });

  function handleInputChange(text) {
    setState({
      name: text,
    })
  }

  return (
      <View style={styles.appContainer}>
        {/* <Images></Images> */}
        {/* <Icons /> */}
        {/* <ItemsList /> */}
        <Networking />
      </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: "column",
  },
});