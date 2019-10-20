import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = ()=>{
    const name = 'lee';
    return (
    <View>
        <Text style={styles.textStyle}>This is the componenets screen</Text>
        <Text>My name is {name}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize:30
    },
    subheaderstyle:{
        fontSize:20
    }
});

export default ComponentsScreen;