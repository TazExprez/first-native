import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // The <View /> with the styles.appContainer property is taking the whole space of the view.  Everything is covered by the black background, which tells us that this is the whole app container.  
    <View style={styles.appContainer}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

{/* <Text style={styles.title}>Hello Students!</Text> */}

const styles = StyleSheet.create({
  appContainer: {
    // This makes the <View /> with the styles.appContainer property to take up the entire space of the whole screen.  If we remove the flex:1 property, then this <View /> will only take up enough space for the three boxes to be in it.  Underneath it, there is going to be a lot of whitespace.
    flex: 1,
    backgroundColor: "black",
    // This will make all of the boxes be right next to each other in a row.
    // When the flexDirection property is set to the "row", the alignItems property will move the items vertically, and the justifyContent property will move the items horizontally.
    flexDirection: "row",
    // This will make all of the boxes be right next to each other in a column.  This is the default setting.
    // When the flexDirection property is set to the "column", the alignItems property will move the items horizontally, and the justifyContent property will move the items vertically.
    // flexDirection: "column",
    // This will align the items to the center of the screen.
    // alignItems: "center",
    // This will align the items to the left of the screen.
    // alignItems: "flex-start",
    // This will align the items to the right of the screen.
    // alignItems: "flex-end",
    // alignItems: "stretch",
    // When you are not sure what you can use with a property, like the alignItems property, just assign it an empty "" and the error message will let you know what values you can use with the property.
    // alignItems: "",
    // You cannot set the alignItems property to the "space-between", but you can set the justifyContent property to this.
    // alignItems: "space-between",
    // This will justify the content to the center of the screen.
    // justifyContent: "center",
    // This will justify the content to the top of the screen.
    // justifyContent: "flex-start",
    // This will justify the content to the bottom of the screen.
    // justifyContent: "flex-end",
    // justifyContent: "space-between",
    // With the alignItems, the justifyContent, and the flexDirection properties, we are controlling how the content inside of the main parent <View /> is arranged.
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  // We can also put this flex:1 property inside any of the parent <View />'s children.  If we do this, we have to remove the alignItems and the justifyContent properties from the parent <View />, or we'll only see the black background from this parent <View />.  We also have to remove the height and the width properties from the child components, or their height or width will be affected by the height or the width properties, depending on the flexDirection of the parent <View />.
  // When we put the flex:1 property inside all of the parent <View />'s children, they will split the space they have evenly amoung themselves, both horizontally and vertically.  Since the parent <View /> has a flexDirection property set to the "column", the children will be stacked on top of each other.  If the parent <View /> has a flexDirection property set to the "row", the children would be placed side by side, horizontally.
  // Since each child is using flex:1, each is going to take as much space as possible both horizontally and vertically.  Since these children are all using flex:1, the space will be evenly divided among them.
  // If every child uses flex:3, the space will be evenly divided among them.
  // You can kind of think of the flex property along the lines of Bootstrap and how it works with column layouts.  You can have 2 children using flex:3, while another uses flex:6.  This would be similar to a 12 column layout in Bootstrap.  You can start splitting this thing up in a way that is useful for setting up your layout.
  box1: {
    // flex: 1,
    flex: 3,
    backgroundColor: "red",
    // height: 40,
    // width: 40,
  },
  box2: {
    // flex: 1,
    // When we set this child to flex:2, it is going to take two times as much space as a child set to flex:1.  The two children using flex:1 will use the same amount of space evenly.  This will happen whether the flexDirection property in the parent <View /> is set to the "column" or the string "row".
    // flex: 2,
    flex: 3,
    backgroundColor: "yellow",
    // height: 40,
    // width: 40,
  },
  box3: {
    // flex: 1,
    // If this child uses flex:4, while one uses flex:1 and the other uses flex:2, it will be much larger than the others.
    // flex: 4,
    // flex: 3,
    flex: 6,
    backgroundColor: "purple",
    // height: 40,
    // width: 40,
  },
});