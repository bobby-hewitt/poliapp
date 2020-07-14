import React, { useRef, useEffect }from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Button from './Button'


const TextBlock = ({items, isPassed, buttonHidden,onRespond, style}) => {
    
    return(
      <View style={styles.container}>
        {items &&items.map((item, i) => {
          return <Text style={[styles.bodycopy, style]}>{item}</Text>
        })}
        {!isPassed && !buttonHidden &&
          <Button onPress={onRespond} label="Tell me more"/>
        }
      </View>
    )

}


const styles = StyleSheet.create({
  container:{
    marginTop:24,
    marginBottom:44,

  },
  bodycopy:{
    
    fontSize:20,
    lineHeight:24,
    marginVertical:8,
    
  }
 
});


export default TextBlock;
