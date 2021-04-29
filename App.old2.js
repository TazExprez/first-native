import React from "react";
// Here we are importing core components that come with React Native.
import { StyleSheet, Text, View } from "react-native";

// Now we are using functional components, instead of class components.
export default function App() {
  // Here we are returning our view, our component, or whatever we are returning from our application.
  return (
    // This <View /> is a core component from React Native.  We can think of the <View /> as a <div> in HTML.  The <View /> is like a divider, it's like a way to organize your sections in the application.
    // <View>
    <View style={styles.appContainer}>
      <View>
        {/* We are using the <Text /> here because with React Native you have to use the <Text /> in order to display text. */}
        {/* <Text>Hello Students!</Text> */}
        {/* You have to add a style property to the <Text /> in order to change the color of the text inside.  You can't do this in the main parent <View />'s style property. */}
        <Text style={styles.title}>Hello Students!</Text>
      </View>
      {/* <View>
        <Text>Hello Students!</Text>
      </View>
      <View>
        <Text>Hello Students!</Text>
      </View>
      <View>
        <Text>Hello Students!</Text>
      </View> */}
    </View>
  );
};

// How do we style the <App /> above?

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    // This does not work in here.  You have to add this to the style property of the <Text />.
    // color: "white",
  },
  title: {
    color: "white",
    // You can't do this to change the font-size and will get an error.  This takes in a regular number and you don't have to put in pixels.  React Native automatically knows what this number is supposed to be.
    // fontSize: "24px",
    fontSize: 24,
  },
});