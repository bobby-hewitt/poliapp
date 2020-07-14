import Swiper from 'react-native-deck-swiper'
import React, { useState, useRef} from 'react'
import {
  Button, 
  View, 
  Text,
  Image,
  Animated,
  Easing,
  StyleSheet
} from 'react-native'
import Reactions from './Reactions/index'

const reactionTypes = [
  { key: '1', type: 'Love' },
  { key: '2', type: 'Angry' },
  { key: '3', type: 'Cynical' },
  { key: '4', type: 'Unhappy' },
  { key: '5', type: 'Laugh' },
];



const Swipable = ({style, name, onRespond, quote, position, profileImage})=> {
  const coverOpacity = useRef(new Animated.Value(1)).current
  const [ reaction, setReaction] = useState(false)
  
  const onReactionSelect = (index) => {
    
    
    if (reaction === false){
      onRespond(150)
      setReaction(index)

     Animated.timing(coverOpacity, {
        toValue: 0,
        useNativeDriver:true,
        duration:150,
        easing: Easing.easeOut
      }).start(() => {
        
      })
   }
  }
  return(


    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.profileImageContainer} >
          <Image source={{uri: profileImage}} style={styles.profileImageContainer}/>
          <Animated.View style={[styles.overlay, {opacity:coverOpacity}]} />
        </View>
        <View style={styles.profileMeta} >
        <View style={[styles.profileTextPlaceholder, {height:24, width:200, marginBottom:4}]} >
          <Text style={styles.name}>{name}</Text>
          <Animated.View style={[styles.overlay, {opacity:coverOpacity}]} >
          <Text style={[styles.subtext,{opacity:0.25}]}>React to reveal who said this</Text>
          </Animated.View>
        </View>
        <View style={[styles.profileTextPlaceholder, {height:16, width:180, marginBottom:4}]} >
          <Text style={styles.position}>{position}</Text>
          <Animated.View style={[styles.overlay, {opacity:coverOpacity}]} />
        </View>
        
      </View>
      </View>
      <Text style={[styles.quote]}><Text style={styles.quotemarks}>"</Text>{quote}<Text style={styles.quotemarks}>"</Text></Text>
      
      <Reactions onSelect={onReactionSelect} selectedIndex={reaction} types={reactionTypes}/>
      
    </View>

)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#fff',
    shadowOffset:{  width: 0,  height: 0,  },
shadowColor: '#000000',
shadowOpacity: 0.1,
shadowRadius:15,
maxWidth:'100%',
paddingVertical:20,
paddingHorizontal:20,

marginBottom:20,

  },
  subtext:{
    
    fontSize:12,
    paddingLeft:12,
  },
  quote:{
    fontSize:20,
    lineHeight:28,
    fontStyle:'italic',
    marginBottom:24,
  },
  quotemarks:{
    fontSize:20,
    fontWeight:'bold'
    
  },
  profileContainer:{
    // alignItems:'center',
    marginBottom:4,
    flexDirection:'row'
  },
  profileMeta:{
    marginLeft:12,
    marginBottom:4,
    flexDirection:'column'
  },
  profileTextPlaceholder:{
    position:'relative', 
    borderRadius:4,
  },
  profileImageContainer:{
    height:44,
    width:44,
    borderRadius:4,
    backgroundColor:'#f2f2f2',
  },
  overlay:{
    justifyContent:'center', 
    backgroundColor:'#f2f2f2',
    position:'absolute',
    top:0, 
    borderRadius:4,
    left:0,
    right:0,
    bottom:0,
  },
  position:{
    opacity:0.5
  },
  name: {
    fontSize:24,
    fontWeight:'bold',
  },
  card: {
   
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
});
export default Swipable