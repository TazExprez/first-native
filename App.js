// Here we are in the handling touch section.

import React from "react";
// import { StyleSheet, Text, View, ScrollView } from "react-native";
// Here we are importing the default <Button /> from React Native.
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Box from "./src/components/Box.js";
// We removed this in order to use the React Native default <Button />.  The one we import below is our own custom component.
// import Button from "./src/components/Button.js";

export default function App() {
  return (
      <View style={styles.appContainer}>
        <Box>
          {/* Here we are using the default <Button /> that comes with React Native. */}
          {/* Once we press this button, we want to trigger the alert("Pressed Button"). */}
          <Button onPress={() => {alert("Pressed Button")}} title="Submit"></Button>
        </Box>
      </View>
  );
};

// We are moving the <Button />s that were inside of the <Box /> down here.
{/* <Button bgColor="blue" fontColor="white">
  Save
</Button>
<Button bgColor="white" fontColor="blue">
  Submit
</Button>
<Button bgColor="grey" fontColor="black">
  Reset
</Button>
<Button bgColor="red" fontColor="white">
  Danger
</Button> */}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
});

// React Native comes with a <Button /> by default.