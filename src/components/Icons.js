import React from "react";
import { StyleSheet, Text, View } from "react-native";
// Here we are importing the <Ionicons /> from the expo package.  This contains popular icon sets that are installed by default on the Expo template project.
import { Ionicons } from "@expo/vector-icons";
// Here we are importing the <MaterialIcons /> from the expo package.
import { MaterialIcons } from "@expo/vector-icons";

export default props => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        },
    }); 
    
    return (
        <View style={styles.container}>
            {/* Here we are displaying an icon.  This icon is a green circle with a white checkmark inside of it. */}
            {/* <Ionicons name="md-checkmark-circle" size={32} color="green" /> */}
            {/* This icon is a red iOS play button. */}
            {/* <Ionicons name="ios-play" size={32} color="red" /> */}
            {/* This icon is a MaterialIcons red play arrow.  Joe's was not displayed properly, at first, because he had the properties on different lines.  This did not give me a problem. */}
            <MaterialIcons name="play-arrow" size={32} color="red" />
        </View>
    );
};