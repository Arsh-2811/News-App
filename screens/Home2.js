import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList, Animated, View, Text } from "react-native";
import Article from "../compenents/Articles2";
import axios from "axios";

const HomeScreen = () => {
//   const [articles, setArticles] = useState([]);
//   const scrollY = React.useRef(new Animated.Value(0)).current;

//   const getNews = () => {
//     axios
//       .get(
//         "https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9",
//         {
//           params: {
//             category: "sports",
//           },
//         }
//       )
//       .then((response) => {
//         // handle success
//         setArticles(response.data.articles);
//       })
//       .catch(function (error) {
//         // handle error
//         console.log(error);
//       })
//       .then(function () {
//         // always executed
//       });
//   };

//   useEffect(() => {
//     getNews();
//   }, []);

  return (
    <View>
        <Text>lol</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
