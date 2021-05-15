// Here we are in the using props section.

import React from "react";
import { StyleSheet, Text, View } from "react-native";

// export default () => {
// This is how we pass the title prop from the parent <App /> to the child <Button />.
export default props => {
    // We have to move this in here in order to give it access to the props that are being passed down from the parent <App />.
    const styles = StyleSheet.create({
        buttonContainer: {
            // backgroundColor: "blue",
            // Here we are taking the bgColor property from the props being sent in by the parent <App /> and setting it to the background color of each <Button />.
            backgroundColor: props.bgColor,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 20,
            paddingBottom: 20,
            paddingLeft: 40,
            paddingRight: 40,
            borderRadius: 5,
            marginBottom: 10,
        },
        title: {
            // color: "white",
            color: props.fontColor,
        },
    });

    return (
        <View style={styles.buttonContainer}>
            {/* <Text style={styles.title}>Save</Text> */}
            {/* This is how we get access to the title prop that gets passed down from the parent <App /> to the child <Button />. */}
            {/* <Text style={styles.title}>{props.title}</Text> */}
            {/* This is how we access props passed down in between the opening and the closing tags of a component. */}
            <Text style={styles.title}>{props.children}</Text>
        </View>
    );
};

// const styles = StyleSheet.create({
//     buttonContainer: {
//         backgroundColor: "blue",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         paddingTop: 20,
//         paddingBottom: 20,
//         paddingLeft: 40,
//         paddingRight: 40,
//         borderRadius: 5,
//     },
//     title: {
//         color: "white",
//     },
// });

// You may be wondering why you would use props.children, when you can just use the regular properties.  You do this because you can pass whatever you want to any component, including other components.  This will make your life easier.  Now you will really have reusable components.