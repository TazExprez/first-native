// Here we are in the creating your first component section.

// A component's name should begin with a capital letter to make it easier for you to identify it as such.

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default () => {
    return (
        // We just created our first React Native component, which is just a <View /> with a <Text /> inside of it.
        <View style={styles.buttonContainer}>
            <Text style={styles.title}>Save</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    // We are calling this property buttonContainer because it's always good to call something what it is, in case you decide to put something else in it.
    buttonContainer: {
        // We had to remove the flex:1 property from the parent <View /> because this way the parent <View /> only uses as much space as the child <Text /> with the text Save.  If we left this property there, the <View /> would use the entire vertical height of the viewport, while only using the horizontal width of the child <Text />.
        // flex: 1,
        // backgroundColor: "black",
        backgroundColor: "blue",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // padding: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        borderRadius: 5,
    },
    title: {
        color: "white",
    },
});