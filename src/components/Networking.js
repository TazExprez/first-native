// import React from "react";
// We are now also importing the useState React Hook.
import React, { useState } from "react";
// import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
// import { StyleSheet, Text, View } from "react-native";
// We are now also importing the <TouchableHighlight /> from React Native so that we can include at least one button in this application.
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default props => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#f2f2f2",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        },
        button: {
            backgroundColor: "red",
            // This does not do anything to a <TouchableHighlight />.  It works on a <Text />, though.
            // fontSize: 30,
            borderRadius: 5,
        },
    });

    // const [state, setState] = useState({});

    const [state, setState] = useState({
        character: "",
    });

    // We are using the Star Wars API in this section.

    // Here we are going to use an async f() with the Star Wars API.
    // async function
    // We can also put the async f() inside of a variable, like down here.  We are passing in a name as the argument in order to make this async f() dynamic.
    const getData = async name => {
        // We are putting this inside of a try...catch statement.  We are going to try to get the data from the Star Wars API.  If there is an error, we are going to catch it with the catch statement and see the error in the console, in our case.
        try {
            // Here we are going to get the data from the Star Wars API.  We are going to pass the URL to the fetch() inside of a template literal.  We are also using the ${name} in order to make the getData() dynamic.  We will also make sure to put the await keyword in front of the fetch().
            let data = await fetch(`https://swapi.dev/api/people/?search=${name}&format=json`);
            // Joe was getting an error because he forgot to put an await below.
            data = await data.json();
            // Now we have to see how the data is set up, before deciding what to assign to the data variable.
            // We looked at the Star Wars API page and noticed that we are going to be getting back an {}.  Inside of this {}, we will get back a property called results, which is an [].  Inside of the results [], we notice that the first index is where all of the data is located.  All of this data is inside of an {}.
            data = data.results[0].name;

            // Now we are setting the state to whatever the data variable is.
            setState({
                character: data,
            });

            // Here we will console.log() the name of the Star Wars character that we are searching for.
            console.log(data);
        }
        catch (error) {
            // If we get an error, we will see it in the console.
            console.error(error);
        }
    };

    // Here we are triggering the getData() with the name "luke" as the argument.
    // getData("luke");

    return (
        <View style={styles.container}>
            {/* <Text>Networking</Text> */}
            {/* <Text>{state.character}</Text> */}
            {/* <TouchableHighlight style={styles.button}> */}
            {/* <TouchableHighlight style={styles.button} onPress={() => getData("luke")}> */}
            <TouchableHighlight style={styles.button} onPress={() => getData("anakin")}>
                <Text>Search</Text>
            </TouchableHighlight>
            <Text>{state.character}</Text>
        </View>
    );
};

// This is pretty much how you do an HTTP request.  You can do a GET request or a POST request like this.