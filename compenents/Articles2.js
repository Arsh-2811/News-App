import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import moment from "moment";
import * as WebBrowser from "expo-web-browser";

const Article = ({ urlToImage, title, description, author, publishedAt, sourceName, url, scrollY }) => {
  const goToSource = () => {
    WebBrowser.openBrowserAsync(url);
  };

  const inputRange = [ -1, 0, 100, 101 ];
  const opacityRange = [ 1, 1, 0, 0 ];
  const scaleRange = [ 1, 1, 0.8, 0.8 ];
  
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: opacityRange
  })

  const scale = scrollY.interpolate({
    inputRange,
    outputRange: scaleRange
  })

  return (
    <TouchableOpacity
      style={[styles.container, { opacity, transform: [{ scale }] }]}
      onPress={goToSource}
    >
      <Animated.Image
        source={{
          uri: urlToImage,
        }}
        style={styles.image}
      />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {description}
        </Text>
        <View style={styles.data}>
          <Text style={styles.heading}>
            by: <Text style={styles.author}>{author}</Text>
          </Text>
          <Text style={styles.date}>
            {moment(publishedAt).format("MMM Do YY")}
          </Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>
            source :{" "}
            <Text style={styles.source}>{sourceName}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
      width: 5,
    },
    backgroundColor: "#fff",
    marginTop: 20,
  },
  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 15,
  },
  date: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 15,
  },
  source: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 18,
  },
});
