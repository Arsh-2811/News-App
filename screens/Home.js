import React, {useEffect, useState} from "react";
import {StyleSheet, SafeAreaView, FlatList, Animated} from "react-native";
import Article from "../compenents/Article";
import axios from "axios";

const HomeScreen = () => {
    const [articles, setArticles] = useState([]);
    const scrollY = new Animated.Value(0);

    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=c1ef3317ba2e48c8aeab23ad33adb6e9', {
            params: {
                category: "sports",
            }
        })
            .then((response) => {
                // handle success
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={articles}
                renderItem={({item, index}) =>
                    <Article
                        urlToImage={item.urlToImage}
                        title={item.title}
                        description={item.description}
                        author={item.author}
                        publishedAt={item.publishedAt}
                        sourceName={item.source.name}
                        url={item.url}
                        index={index}
                        scrollY={scrollY}
                    />}
                keyExtractor={(item) => item.title}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true}
                )}
            />
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})
