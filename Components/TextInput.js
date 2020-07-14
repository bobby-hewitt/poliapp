import React, { useRef, useEffect }from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';



const TextInputComp = ({items, isPassed, onSubmit, placeholder, buttonHidden,onRespond, style}) => {
     

    function onSubmitInternal(e){
      if (onSubmit){
        onSubmit(e.nativeEvent.text)
      }
    }
    return(
      <View style={styles.container}>
       <TextInput 
         returnKeyType="go"
         textContentType="postalCode"
         autoCapitalize="characters"
         autoCompleteType='postal-code'
         onSubmitEditing={onSubmitInternal}
         placeholder={placeholder}
         style={[styles.input, style ? style : {}]}/>
      </View>
    )

}


const styles = StyleSheet.create({
  container:{
    marginBottom:12,
    
  },
  input:{
    fontSize:16,
    height:56,
    borderBottomWidth:1,
    
    borderBottomColor:'#676767'
  },
  bodycopy:{
    
    fontSize:20,
    lineHeight:24,
    marginVertical:8,
    
  }
 
});


export default TextInputComp;
