// Here we are in the handling text input and managing state with React Hooks section.

// import React from "react";
// Now we are also importing the useState() from React.  This will let us use the useState() React Hook.  The useState() will allow us to add React state to functional components.
import React, { useState } from "react";
// import { StyleSheet, Text, View, ScrollView } from "react-native";
// Now we are also importing the <TextInput /> from React Native.
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import Box from "./src/components/Box.js";
import Button from "./src/components/Button.js";

export default function App() {
  // Here we are setting the default state to an empty "".
  // Here we are creating two variables.  One is going to be the name, the current state.  The other is the setName(), which is going to change the name, the state.  We are going to use the useState() and we are passing in the original state to it, which in this case is just an empty "".  So name will be just an empty "", at first.
  // const [name, setName] = useState("");
  // We refactored some of the code to make what we are doing clearer by using state and setState, instead of name and setName.
  // state is basically like this.state in class components.  setState is basically like this.setState in class components.  The original state is set to an empty "".
  // const [state, setState] = useState("");
  // Now we are refactoring this by setting the state to an {}, like we did for class components.
  const [state, setState] = useState({
    name: "",
  });

  // Here we will change the name to whatever the text argument is by using the setName().
  // Whenever we do a change in the <TextInput /> below, if we type something inside of it, it will trigger this handleInputChange().  We are passing in whatever text we are putting in the <TextInput /> to the handleInputChange().  Then we are using the setName() to actually set the name const, the state, to whatever we are typing, to the text.
  function handleInputChange(text) {
    // setName(text);
    // setState(text);
    setState({
      name: text,
    })
  }

  return (
      <View style={styles.appContainer}>
        <Box>
          {/* Here we are creating a label for a <TextInput />. */}
          <Text style={styles.label}>First Name</Text>
          {/* Here we are creating an input field by using the <TextInput />. */}
          {/* <TextInput style={styles.textInput}></TextInput> */}
          {/* Here we added the onChangeText handler for the <TextInput />.  As the input changes, the handleInputChange() will get executed.  The argument for the handleInputChange() will be whatever is inside of the value property, which in this case is the name const, the state basically. */}
          {/* <TextInput style={styles.textInput} onChangeText={handleInputChange} value={name}></TextInput> */}
          {/* <TextInput style={styles.textInput} onChangeText={handleInputChange} value={state}></TextInput> */}
          {/* <TextInput style={styles.textInput} onChangeText={handleInputChange} value={state.name}></TextInput> */}
          {/* Here we are adding the placeholder property. */}
          <TextInput style={styles.textInput} placeholder="Enter Your Name" onChangeText={handleInputChange} value={state.name}></TextInput>
          {/* This <Text /> will display the text that we are typing inside of the <TextInput />.  This is just to make sure that everything is connected properly. */}
          {/* <Text style={styles.h1}>{name}</Text> */}
          {/* <Text style={styles.h1}>{state}</Text> */}
          <Text style={styles.h1}>{state.name}</Text>
        </Box>
      </View>
  );
};

// Now we are going to handle the input field created by the <TextInput /> and we will start saving the data or displaying something.  We are going to handle this by using React Hooks.  We are going to do this with React Hooks because our <App /> is a functional component, instead of a class component.

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  label: {
    color: "black",
    fontSize: 12,
    fontWeight: "700",
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "white",
    padding: 10,
    width: 200,
    fontSize: 18,
  },
  h1: {
    fontSize: 40,
  },
});