import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default props => {
    const styles = StyleSheet.create({
        boxContainer: {
            // We added flex:1 so that this <Box /> takes as much space as possible.
            flex: 1,
            backgroundColor: "#f2f2f2",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        },
    });

    return <View style={styles.boxContainer}>{props.children}</View>;
};