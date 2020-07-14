import React, { useRef, useEffect }from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from 'react-native';

const w = Dimensions.get('window').width 

const Article = ({items, title, image, style}) => {
   
    return(
      <View style={styles.container}>
        <Image style={{width:'100%', height: w / 16 * 9}} source={{uri: image}}/>
        <Text style={[styles.title, style]}>{title}</Text>
        
      </View>
    )

}


const Articles = ({items, title}) => {
  return(
    <View style={styles.outerContainer}>
    <Text style={[styles.title, {marginBottom:20}]}>{title}</Text>
    <ScrollView horizontal>
    {items && items.map((item, i) => {
      return(
        <Article key={i} {...item} />
      )
    })}
    </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    width:300,
    flex:1,
    padding:20,
    marginRight:20,
  },
  outerContainer:{
    marginVertical:40,
  },
  title:{
    // letterSpacing:0.67,
    fontSize:20,
    lineHeight:24,
    marginTop:8,
    fontWeight:'bold',
  },
  bodycopy:{
    // letterSpacing:0.67, ?
    fontSize:20,
    lineHeight:24,
    marginVertical:8,
    
  }
 
});


export default Articles;
