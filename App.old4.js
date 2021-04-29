// Here we are in the creating your first component section.

import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Here we are importing the <Button /> to use it in this file.  First we put this location, ., because the App.js file is in the root directory.  Then after the first /, we put src, so go to the src folder.  After the second /, go to the components folder.  Then after the third /, import that Button.js file.  You don't really need the .js extension after Button, but Joe included it anyway.
import Button from "./src/components/Button.js";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* The good thing about components is that they are reusable.  As we can see below, we have seven instances of the <Button />. */}
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});