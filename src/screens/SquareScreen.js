import React,{useReducer} from 'react';
import {View,Text,StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const reducer = (state,action) =>{

    switch (action.colorToChange){
        case 'red':   
            return {...state, red:state.red+action.amount}
        case 'green':
            return {...state, green:state.green+action.amount}
        case 'blue':
            return {...state, blue:state.blue+action.amount}
        default : 
            return state
    }
}
 
const SquareScreen = () =>{
    

    const [state,dispatch ] = useReducer(reducer,{red:0 , green:0, blue:0});
    const {red,green,blue} = state;

    return <View>
        <ColorCounter 
        onIncrease={()=> dispatch({colorToChange:'red',amount:15})}
        onDecrease={()=> dispatch({colorToChange:'red',amount: -15})}
        color = "red" />
        <ColorCounter 
         color = "blue" 
         onIncrease={()=> dispatch({colorToChange:'blue',amount:15})}
         onDecrease={()=> dispatch({colorToChange:'blue',amount:-15})}/>
        <ColorCounter 
         color = "green" 
        onIncrease={()=> dispatch({colorToChange:'green',amount:15})}
        onDecrease={()=> dispatch({colorToChange:'green',amount:-15})}
        />
        <View style = {{height : 150, width:150, backgroundColor:`rgb(${state.red},${state.green},${state.blue})`}}  />
    </View>
}

const setColor = (color,change) =>{
    
   switch(color){
       case 'red':
           red +change >255 || red +change<0 ? null : setRed(red+change)
           return ;
       case 'green':
            green +change >255 || green +change<0 ? null : setGreen(green+change)
           return ; 
       case 'blue':
            blue +change >255 || blue +change<0 ? null : setBlue(blue+change)
           return ; 
       default :
           return ;
       
   }
}


const styles = StyleSheet.create({


})

export default SquareScreen