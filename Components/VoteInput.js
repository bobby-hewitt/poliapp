import React, { useRef, useEffect }from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';



const TextBlock = ({items, style}) => {
   
    return(
      <View style={styles.container}>
        {items &&items.map((item, i) => {
          return <Text style={[styles.bodycopy, style]}>{item}</Text>
        })}
      </View>
    )

}


const styles = StyleSheet.create({
  container:{
    marginTop:24,
    marginBottom:44,

  },
  bodycopy:{
    letterSpacing:0.67,
    fontSize:20,
    lineHeight:24,
    marginVertical:8,
    
  }
 
});


export default TextBlock;
