import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = ()=>{
    return <View>
    <ImageDetail title="Forest" imageSource = {require('../../assets/forest.jpg')} information="this is forest"/>
    <ImageDetail title="Beach"imageSource = {require('../../assets/beach.jpg')} information="this is beach"/>
    <ImageDetail title="Mountain"imageSource = {require('../../assets/mountain.jpg')} information="this is mountain"/>
    
        </View>
};

const styles = StyleSheet.create({

});

export default ImageScreen;