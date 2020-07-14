import React, { useRef, useEffect }from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
} from 'react-native';



const Button = ({onPress, label}) => {
    

    const onButtonPress = () => {
      console.log('in button')
      onPress()
    }
    return(
      <TouchableWithoutFeedback onPress={() => onButtonPress()}>
        <View style={styles.container}>
        <Text style={styles.text}>{label}</Text>
       </View>
      </TouchableWithoutFeedback>
    )

}

const styles = StyleSheet.create({
    text:{
      fontSize:20,
      fontWeight:'bold',
      color:'#fff',

    },
    container:{
      borderRadius:30,
      marginTop:20,
      backgroundColor:'#17242D',
      width:"100%",
      height:60,
      alignItems:'center',
      justifyContent:'center',
    }
});

export default Button;
