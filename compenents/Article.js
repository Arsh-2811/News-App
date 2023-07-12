import React, { useRef } from "react";
import { View, StyleSheet, Text, Pressable, Image, TouchableOpacity, Animated } from "react-native";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';

const Article = (props) => {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const goToSource = () => {
        WebBrowser.openBrowserAsync(props.url);
    }

    const handlePressIn = () => {
        Animated.timing(scaleAnim, {
            toValue: 0.9,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    const handlePressOut = () => {
        Animated.timing(scaleAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    const animatedStyle = {
        transform: [{ scale: scaleAnim }]
    }

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={goToSource}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
        >
            <Animated.Image
                source={{
                    uri: props.urlToImage
                }}
                style={[styles.image, animatedStyle]}
            />
            <View style={{ padding: 20 }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.description} numberOfLines={3}>{props.description}</Text>
                <View style={styles.data}>
                    <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
                    <Text style={styles.date}>{moment(props.publishedAt).format("MMM Do YY")}</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text>source : <Text style={styles.source}>{props.sourceName}</Text></Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Article;

const styles = StyleSheet.create({
    container: {
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 20
    },
    image: {
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading: {

    },
    author: {
        fontWeight: "bold",
        fontSize: 15
    },
    date: {
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source: {
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    }
})
