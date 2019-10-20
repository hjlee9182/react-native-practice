import React from 'react';
import { Text, StyleSheet ,View,Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = (props) => {

  return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
    onPress={()=> props.navigation.navigate('Components')}
    title="Move to Componenets"
    />

    <Button 
    onPress={()=> props.navigation.navigate('List')}
    title="Move to List"
    />

    <Button
    onPress = {()=> props.navigation.navigate('Image')}
    title="Move to Image"
    />

<Button
    onPress = {()=> props.navigation.navigate('CounterScreen')}
    title="Move to CounterScreen"
    />

<Button
    onPress = {()=> props.navigation.navigate('ColorScreen')}
    title="Move to ColorScreen"
    />
   <Button
    onPress = {()=> props.navigation.navigate('SquareScreen')}
    title="Move to Square"
    />

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
