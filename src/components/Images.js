import React from "react";
// import { StyleSheet, Text, View } from "react-native";
// Here we are importing the <Image /> which will allow us to work with images in React Native.
// import { StyleSheet, Text, View, Image } from "react-native";
// Here we are importing the <ImageBackground /> which will allow us to set an image as a background to our view in React Native.
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

export default props => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 20,
        },
        // Here we are resizing the image.
        goku: {
            width: 300,
            // height: 600,
            // If we set the height to 300, the image will still be displayed, and it will be centered, but the top and bottom will be missing.  To fix this, we will have to pass in a prop to the <Image />, such as resizeMode="contain", like we did below.
            height: 300,
        },
    });

    return (
        // Now we are returning an <ImageBackground />, instead of a <View />.  The main container, the <View />, was taking the full screen, so now when we use the <ImageBackground />, it's taking the whole screen to show the image of Goku.  We can use this <ImageBackground /> sort of like a <div>, the same way that we use the <View />, as a divider.  We can use the <ImageBackground /> like we use the <View /> to set up our layout.  If we need an image as the background, we just use the <ImageBackground />, instead of using the <View />.
        <ImageBackground style={styles.container} source={{
            uri: "http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220"
        }}
        resizeMode="cover">
            {/* <View style={styles.container}> */}
            {/* This is how we display local images in React Native.  We need to use a URI for an image located on an external server online. */}
            {/* The first .. takes us from the components folder to the src folder.  The next .. takes us from the src folder to the root directory.  After this, we go from the root directory to the assets folder.  Next we go from the assets folder to the images folder.  Then from the images folder we go to the image name, which is goku.png.  Now we have our local image of Goku on the screen. */}
            {/* <Image source={require("../../assets/images/goku.png")}></Image> */}
            {/* Here we added a style property to resize the image. */}
            {/* <Image style={styles.goku} source={require("../../assets/images/goku.png")}></Image> */}
            {/* Here we are using a URI because this image is coming from a server online. */}
            {/* <Image style={styles.goku} source={{
                uri: "http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220"
            }}>  */}
            {/* Here we added the resizeMode property and set it to the "contain".  This will resize the image so that the entire image can be contained with a height of 300 pixels. */}
            {/* <Image style={styles.goku} source={{
                uri: "http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220"
            }}
            resizeMode="contain">  */}
            {/* Here we set the resizeMode property to the "stretch".  This will make the image not only occupy the height of 300 pixels, but it will also stretch it to occupy a width of 300 pixels. */}
            {/* <Image style={styles.goku} source={{
                uri: "http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220"
            }}
            resizeMode="stretch"> */}
            {/* Here we set the resizeMode property to the "center".  This is the default setting and we don't have to set it.  The image will be centered and fit the view, if it is larger than the view.  In our case, we are not getting the top and bottom parts of the image because we set the height too low. */}
            {/* <Image style={styles.goku} source={{
                uri: "http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220"
            }}
            resizeMode="center"> */}
            {/* Here we set the resizeMode property to the "cover".  This is supposed to make the image occupy the entire view, minus the padding.  Both the width and the height of the image will be at least equal to the width and the height of the view.  This property does not seem to be working as expected in our case. */}
            <Image style={styles.goku} source={{
                uri: "http://vignette.wikie.nocookie.net/vsbattles/images/5/56/Goku_%28Base%29.png/revision/latest?cb=20160315175220"
            }}
            resizeMode="cover">
            </Image>    
        {/* </View> */}
        </ImageBackground>
    );
};