// Here we are in the handling touch section.

import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
// Here we are importing the default <Button /> from React Native.
// import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import Box from "./src/components/Box.js";
// We removed this in order to use the React Native default <Button />.  The one we import below is our own custom component.
// Now we added this again to be able to use our custom <Button />s again.
import Button from "./src/components/Button.js";

export default function App() {
  return (
      <View style={styles.appContainer}>
        <Box>
          {/* Here we are using the default <Button /> that comes with React Native. */}
          {/* Once we press this button, we want to trigger the alert("Pressed Button"). */}
          {/* The default <Button /> may look different on iOS and Android.  It did for me.  The reason for this is that these are default buttons that come with the operating system.  If we want the <Button /> to look the same on iOS and Android, then we have to create our own <Button /> custom component, like we did before. */}
          {/* The alert that was triggered by the onPress handler also looked different on iOS and Android. */}
          {/* Joe will mostly focus on using an iPhone emulator, but everything that he is working on here will work on an Android device.  The app might look a little bit different from the iOS one. */}
          {/* Now we will stop using the default <Button /> from React Native. */}
          {/* <Button onPress={() => {alert("Pressed Button")}} title="Submit"></Button> */}
          {/* Now we moved our custom <Button />s back up inside of the <Box />. */}
          <Button bgColor="blue" fontColor="white">
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
          </Button>
        </Box>
      </View>
  );
};

// We moved our custom <Button />s that were inside of the <Box /> down here.
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