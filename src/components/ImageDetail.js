import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const ImageDetail = ({imageSource,title,information})=>{
    
    return <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>{information}</Text>
    </View>
};

const styles = StyleSheet.create({

});

export default ImageDetail;