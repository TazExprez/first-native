// Here we are in the scroll view section.

// What happens if we have a bunch of elements that do not fit on the screen?  Some will not be visible and will be above the top of the screen or under the bottom of the screen.  You will not be able to scroll to see the missing elements.  In order to be able to scroll, we need to use a <ScrollView />.

import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// Here we are adding the <ScrollView /> that we need in order to be able to scroll when there is too much content on the screen.
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Box from "./src/components/Box.js";
import Button from "./src/components/Button.js";

export default function App() {
  return (
    // When we put the <View /> inside of the <ScrollView /> we can scroll through the entire screen, including the black areas.  Our <ScrollView /> is now outside of the <View /> container for this <App />.
    // <ScrollView>
      <View style={styles.appContainer}>
        {/* <Box>
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
        <Box>
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
        <Box>
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
        <Box>
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
        <Box>
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
        </Box> */}
        {/* When we put the <Box /> inside of the <ScrollView /> we will be able to scroll to see all of the content inside of the <Box />.  The only area inside of the parent <View /> that is scrollable is the <ScrollView />.  You cannot scroll outside of the <ScrollView /> by clicking outside of it in the black areas of the <View />. */}
        <ScrollView>
          <Box>
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
          <Box>
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
          <Box>
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
          <Box>
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
          <Box>
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
        </ScrollView>
      </View>
    // </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
    // We had to remove the alignItems and the justifyContent properties from this <App /> so that the <Box /> would be able to occupy the entire view.
    // alignItems: "center",
    // justifyContent: "center",
  },
});

// The app container itself, the <View />, has a black background, but we're allowing whatever component is inside of it, the <Box />, to be able to go full width and full height, if it wants.  When we are dragging the <Box /> to scroll up and down, we are dragging the actual <Box />, itself, we are scrolling it up and down.