import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// Now we are also importing the <FlatList /> from React Native.
// import { StyleSheet, Text, View, FlatList } from "react-native";
import { StyleSheet, Text, View, FlatList, SectionList } from "react-native";

// This is an [] of names.
const names = ["Joe", "James", "Billy", "Cindy", "Jen", "Zane", "Ethan", "Elvie", "Ramon", "John", "Zoe", "Drake", "Camron", "Meek Mill", "Jay Z", "Nicki", "Anthony"];

// const names = [{key: "Jay Z"}, {key: "Billy"}];

export default props => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        },
        item: {
            padding: 20,
        },
        listTitle: {
            backgroundColor: "black",
            fontSize: 20,
            color: "white",
        },
    });

    return (
        <View style={styles.container}>
            {/* <Text>Testing</Text> */}
            {/* We are going to be able to use the <FlatList /> to display our list of names.  We are passing in data as a prop.  We are going to pass in the names [] to the data prop.  The next prop we are going to pass in is renderItem.  The renderItem prop is going to get an arrow f() passed in.  To this arrow f() we are going to pass in each item in the names [].  For each item, we are going to be returning a <Text /> with the item inside of it. */}
            {/* We are able to drag down the list of names and scroll it. */}
            {/* <FlatList data={names} renderItem={({item}) => <Text>{item}</Text>} /> */}
            {/* Now we are styling the <Text /> that will be created for each element in the names []. */}
            {/* <FlatList data={names} renderItem={({item}) => <Text style={styles.item}>{item}</Text>} /> */}
            {/* Here we are also using the keyExtractor property.  This will create a React key for each item in the <FlatList />. */}
            {/* <FlatList
                data={names}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            /> */}
            {/* Here we don't need to use the keyExtractor property because we are dealing with an [] of {}s and the {}s have a key property.  React Native will automatically detect that a key property is being used and will use this as the React key. */}
            {/* <FlatList data={names} renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} /> */}
            {/* Here we are creating a <SectionList />.  The sections property will contain an [] with 2 {}s, each representing a section.  The renderSectionHeader property will render the title property of each section {}.  The renderItem property will render each item in the data property [] of each section {}.  The sections and the renderItem properties are required, while the renderSectionHeader one isn't. */}
            {/* <SectionList
                sections={[
                    {title: "E", data: ["Eric", "Elvie"]},
                    {title: "J", data: ["Jay Z", "Jimmy", "Joe"]}
                ]}
                renderSectionHeader={({section}) => <Text>{section.title}</Text>}
                renderItem={({item}) => <Text>{item}</Text>}
            /> */}
            {/* Here we are styling the <SectionList />.  There is a title for every single section.  We also included the keyExtractor property, which we forgot above, to add React keys to the section items. */}
            <SectionList
                sections={[
                    {title: "E", data: ["Eric", "Elvie"]},
                    {title: "J", data: ["Jay Z", "Jimmy", "Joe"]}
                ]}
                renderSectionHeader={({section}) => <Text style={styles.listTitle}>{section.title}</Text>}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                keyExtractor={(item, index) => index.toString()}
            />            
        </View>
    );
};

// The <FlatList /> will only render what is currently inside of the view.  If you had 1,000 names, the only ones that would be rendered are the ones currently inside of the view.  You want to load the names up as you scroll through them and remove them as they leave the view.

// Another type of list that you can use is the <SectionList />.  The <SectionList /> is different from the <FlatList /> because you can have a title for each section.