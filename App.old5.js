// Here we are in the using props section.

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Box from "./src/components/Box.js";
import Button from "./src/components/Button.js";

// Whatever you pass between the opening and the closing <h1> tags are going to be considered the children.  In this case, the children are sfwer.
{/* <h1>sfwer</h1> */}
// In this case the children are the <div>.
{/* <h1>
  <div>text</div>
</h1>  */}

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* Whatever we pass between the opening and the closing tags of a component gets used in that component as props.children. */}
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
      {/* To make the <Button /> really reusable, we can use props.  Here we are passing props to each instance of the <Button />.  We can make a bunch of different <Button />s out of this same <Button /> because we are passing down all of the properties through the props. */}
      {/* <Button title="Save"></Button> */}
      {/* <Button title="Save" bgColor="blue" fontColor="white"></Button> */}
      {/* <Button bgColor="blue" fontColor="white"> */}
        {/* We are passing props through here now.  These can be accessed in the <Button /> by using props.children. */}
        {/* Save
      </Button> */}
      {/* <Button title="Submit"></Button> */}
      {/* <Button title="Submit" bgColor="white" fontColor="blue"></Button> */}
      {/* <Button bgColor="white" fontColor="blue">
        Submit
      </Button> */}
      {/* <Button title="Reset"></Button> */}
      {/* <Button title="Reset" bgColor="grey" fontColor="black"></Button> */}
      {/* <Button bgColor="grey" fontColor="black">
        Reset
      </Button> */}
      {/* <Button title="Danger" bgColor="red" fontColor="white"></Button> */}
      {/* <Button bgColor="red" fontColor="white">
        Danger
      </Button> */}
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