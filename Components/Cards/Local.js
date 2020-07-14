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
import LinearGradient from 'react-native-linear-gradient';
import MapView, { AnimatedRegion, Animated } from 'react-native-maps';
const Local = ({item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}) => {
  const state = useContext(Context)
  const initialRegion = state.constituency ? state.constituency.coords : {latitude: 53.21874358264794, longitude: -1.494020970399732, latitudeDelta: 10, longitudeDelta: 10 } 
  
  const map = useRef(null)
  useEffect(() => {
    if (state.constituency){
      // region.setValue(state.constituency.coords)
      map.current.animateToRegion({
        latitude:  state.constituency.coords.latitude,
        longitude: state.constituency.coords.longitude,
        latitudeDelta:0.01,
        longitudeDelta:0.01,
      }, 400)
    }
  }, [state.constituency])
  return(
      <React.Fragment>
       <MapView
         ref={map}
         zoom={10}
         style={styles.image}
        initialRegion={initialRegion}  
      >
      {state.constituency && state.constituency.coords &&
        <MapView.Marker  
          coordinate={state.constituency.coords}
        />
      }
      </MapView>
         <View style={styles.titleContainer}>
          <LinearGradient colors={['#00000000', '#000000ff']} style={styles.titleContainer}>
           <View style={styles.titleInnerContainer}>
             <Text style={[globalStyles.title, styles.text]} numberOfLines={2}>
                {state.constituency ? state.constituency.name : title}           
              </Text>
              
            </View>
          </LinearGradient>
        </View>
        
      </React.Fragment>
  )
}


const styles = StyleSheet.create({
  image: {
    ...StyleSheet.absoluteFillObject,
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
    height:200,
    width:'100%',
  },
  text:{
    color:'white',
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
