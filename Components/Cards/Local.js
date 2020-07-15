import React, { useEffect, useRef, useState, useContext }  from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Easing,
  Dimensions,
} from 'react-native';
import globalStyles from '../../style'
import Context from '../../context'
import LottieAnimation from '../LottieAnimation'
import LinearGradient from 'react-native-linear-gradient';
const Local = ({item, index, noHandlers, cardWidth, maxTextWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}) => {
  const state = useContext(Context)
 
  
 
 
  return(
      <React.Fragment>
        <View style={styles.card}>
       
         <LinearGradient colors={['#ffffff', '#ddddddff']} style={styles.titleContainer}>
          
            <LottieAnimation  
             loop={true}
             style={{height:80, marginTop:-5}}
             animation={require('../../Assets/Animations/local.json')}/>
          
            <View style={styles.titleContainer}>
             <View style={styles.titleInnerContainer}>
                
                                
          
                <Text style={[globalStyles.subtitle, styles.text, {maxWidth: maxTextWidth, fontWeight: 'bold'}]} numberOfLines={1}>
                  {state.constituency ? state.constituency.name : "Discover your area"}           
                </Text>
                
              </View>
          </View>
        </LinearGradient>
        </View>
      </React.Fragment>
  )
}


const styles = StyleSheet.create({
  card:{
    position:'relative',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  image: {
    backgroundColor:'#f2f2f2',
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
  title:{
    position:'absolute',
    top:20,
    left:20,
  }, 
  titleInnerContainer:{
    padding:20,
    position:'absolute',
    bottom:0,
    left:0,
    justifyContent:'flex-end'
  },
  titleContainer:{ 

    position:'absolute',
    bottom:0,
    left:0,
    top:0,
    right:0,

    alignItems:'center',
    justifyContent:'center',
    width:'100%',
  },
  text:{

    
    color:'black',
  },
  badgeText:{
    fontWeight:'bold',
  },
  badge:{
    shadowOffset:{  width: 0,  height: 0,  },
    shadowColor: '#000000',
    shadowOpacity: 0.3,
    shadowRadius:55,
    padding:4, 
    borderRadius:4,
    position:'absolute',
    top:20,
    right:20,
    backgroundColor:'#fff'
  }
});
export default Local;
