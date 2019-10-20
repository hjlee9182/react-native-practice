import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';

const ListScreen = () =>{
    const firends = [
        { name : 'Friend #1',age : '1'},
        { name : 'Friend #2',age : '2'},
        { name : 'Friend #3',age : '3'},
        { name : 'Friend #4',age : '4'},
        { name : 'Friend #5',age : '5'},
        { name : 'Friend #6',age : '6'},
        { name : 'Friend #7',age : '7'},
        { name : 'Friend #8',age : '8'},
    ];
    return <FlatList 
    //horizontal = {true}
    showsHorizontalScrollIndicator={true}
    keyExtractor = {(friends =>friends.name)}
    data={firends} 
    renderItem={({item})=>{
        //element === {item : {name : 'Friend #1'}, index:0}
        return <Text style={styles.textStyle}>{item.name}- Age: {item.age}</Text>;
    }}
    />

};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical:50
    }

});

export default ListScreen;