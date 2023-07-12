import React from 'react'
import {StyleSheet, Image} from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({ navigation }) => {
    return (
        <Onboarding 
        onSkip = {() => navigation.replace("Login")}
        onDone = {() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Connect to the world',
                    subtitle: 'A new way to connect with the world',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Share your favourites',
                    subtitle: 'Share your thoghts with similar kind of people',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assets/onboarding-img3.png')} />,
                    title: 'Become the star',
                    subtitle: 'Let the spot light capture you',
                },
            ]}
        />
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});