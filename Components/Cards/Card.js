import React, { useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Animated,
  Easing,
  NativeMethodsMixin,
  PanResponder
} from 'react-native';
import globalStyles from '../../style'
import Complete from '../Complete'

import LinearGradient from 'react-native-linear-gradient';
import OverlayDark from './OverlayDark'
import OverlayLight from './OverlayLight'
import TitleSectionTop from './TitleSectionTop'
import Local from './Local'
import TitleSectionBottom from './TitleSectionBottom'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');




const Card = ({item, complete, onResetComplete, modal, index, noHandlers, shadow, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}) => {
    const scale = useRef(new Animated.Value(1)).current
    const [ doNotRender, setDoNotRender ] = useState(false)
    let isResponding = false
    const cardRef = useRef(null)
    const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        if (!noHandlers) return true 
        else return false
      },
      onStartShouldSetPanResponderCapture: (evt, gestureState) => {
        if (!noHandlers) return true 
        else return false
      },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        if (!noHandlers) return true 
        else return false
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        if (!noHandlers) return true 
        else return false
      },
      onPanResponderGrant: (evt, gestureState) => {
        onPressDown()
      },
      onPanResponderMove: (evt, gestureState) => {
        onRelease()
      },
      onPanResponderTerminationRequest: (evt, gestureState) => {
        onRelease()
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (isResponding){
          isResponding = false
          onPress() 
        }
      },
      onPanResponderTerminate: (evt, gestureState) => {
        if (isResponding) onRelease()
      },
      onShouldBlockNativeResponder: (evt, gestureState) => true
    })
  ).current;

  function onReset(){
    // scale.setValue(1)
    
  }

  useEffect(() => {
    if (doNotRender && modal === false){
      setDoNotRender(false)
       Animated.timing(scale, {
          toValue: 1,
          useNativeDriver:true,
          duration:400,
          easing: Easing.easeOut
        }).start(() => {
          if (onResetComplete){
            onResetComplete(index)
          }
        })
    }
  }, [modal])

  function onPressDown(){  
      if (!isResponding){
        scale.stopAnimation()
        isResponding = true
        Animated.timing(scale, {
          toValue: 0,
          useNativeDriver:true,
          duration:400,
          easing: Easing.easeOut
        }).start()
      }  
  }

  function onRelease(){
     if (isResponding){

        scale.stopAnimation()
        isResponding = false
        Animated.timing(scale, {
          toValue: 1,
          useNativeDriver:true,
          duration:400,
          easing: Easing.easeOut
        }).start()
      }
  }


  function onPress(){
    scale.stopAnimation()
    cardRef.current.measure( (fx, fy, width, height, pageX, pageY) => {
      const position = {
        width, 
        height,
        pageX,
        pageY
      }
      setDoNotRender(true)
       onSelect(index, position)
       
    })
  }

  const scaleHandler = scale.interpolate({
      inputRange: [0, 1],
      outputRange: [0.9, 1]
  })
  return(




    <View style={styles.outerContainer} {...panResponder.panHandlers}>
     
       <View style={[shadow ? globalStyles.shadow : {}, styles.item]}>
      <Animated.View ref={cardRef}style={[{position:'relative',overflow: 'hidden', width:'100%', height:'100%',borderRadius: borderRadius || 20, transform:[{scale: scaleHandler}]}]}>
       
        {(!cardType || cardType === 'overlayDark') && 
          <OverlayDark {...{item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}}/>
        }
        {(cardType === 'overlayLight') && 
          <OverlayLight {...{item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}}/>
        }
        {(cardType === 'titleSectionTop') && 
          <TitleSectionTop {...{item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}}/>
        }
        {(cardType === 'titleSectionBottom') && 
          <TitleSectionBottom {...{item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}}/>
        }
        {(cardType === 'local') && 
          <Local {...{item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}}/>
        }

        {complete && 
         <Complete noAnimation={noHandlers}/>
        }
        
      </Animated.View>
      </View>
      
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  outerContainer:{
    
    position:'relative',
    width:'100%',
    paddingTop:'100%',
  },
  item: {
    position:'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
    
    
   
  },

  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    overflow:'hidden',
    position:'relative'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
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
  title:{
    
    color:'white',
    fontWeight:'bold',
    fontSize:32,
  
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
export default Card;
