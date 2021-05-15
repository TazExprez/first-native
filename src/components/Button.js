// Here we are in the handling touch section.

import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// Here we are also importing the <TouchableHighlight /> from React Native.
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
// Here we are also importing the <TouchableNativeFeedback /> from React Native.  The <TouchableNativeFeedback /> will only work on Android.
// import { StyleSheet, Text, View, TouchableHighlight, TouchableNativeFeedback } from "react-native";

export default props => {
    const styles = StyleSheet.create({
        buttonContainer: {
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
            color: props.fontColor,
        },
    });

    return (
        // When we are using our own custom <Button>s, we have to use the <TouchableHighlight /> so that we can actually keep track of when something is being touched by our fingers.
        // We use the <TouchableHightlight /> to handle touch events.
        // We have a basic button that comes with every operating system, but if we want to do something cool, we need to actually create our own custom <Button />, and then use the <TouchableHighlight /> to keep track of whenever we touch our custom <Button />.
        <TouchableHighlight onPress={() => alert(`You Pressed a Button`)}>
        {/* We can also use the <TouchableNativeFeedback />, but this only works on Android.  If we try to use it on iOS, we'll get an error.  The <TouchableNativeFeedback /> gives a native experience when we touch the screen on Android devices.  With the <TouchableHighlight /> we get a shadow when we click on the screen on Android devices, but with the <TouchableNativeFeedback /> we don't.  If we are focused on Android devices, we can use the <TouchableNativeFeedback />.  If we want to use something more universal that will work on iOS and Android, then we should use the <TouchableHighlight />.  The <TouchableHighlight /> will work on both iOS and Android. */}
        {/* <TouchableNativeFeedback onPress={() => alert(`You Pressed a Button`)}> */}
            <View style={styles.buttonContainer}>
                <Text style={styles.title}>{props.children}</Text>
            </View>
        </TouchableHighlight>
        // </TouchableNativeFeedback>
    );
};