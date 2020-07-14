import React, { useRef, useState} from 'react';
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

import globalStyles from '../style'
import {ParallaxImage} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Card = ({item, index, cardWidth, parallaxProps, containerStyle,onSelect, image, badge, title, subtitle, }) => {
    const scale = useRef(new Animated.Value(1)).current
    
    const [ doNotRender, setDoNotRender ] = useState(false)
    let isResponding = false
    const cardRef = useRef(null)
    const panResponder = React.useRef(
    PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) =>
        true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        true,

      onPanResponderGrant: (evt, gestureState) => {
        onPressDown()
        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        onRelease()
        // The most recent move distance is gestureState.move{X,Y}
        // The accumulated gesture distance since becoming responder is
        // gestureState.d{x,y}
      },
      onPanResponderTerminationRequest: (evt, gestureState) => {
        onRelease()
      },
      onPanResponderRelease: (evt, gestureState) => {
        
        if (isResponding){
          isResponding = false
          onPress()
          
         
          
        }
        // The user has released all touches while this view is the
        // responder. This typically means a gesture has succeeded
      },
      onPanResponderTerminate: (evt, gestureState) => {
        if (isResponding){
          onRelease()
        }
        
       
        // Another component has become the responder, so this gesture
        // should be cancelled
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        // Returns whether this component should block native components from becoming the JS
        // responder. Returns true by default. Is currently only supported on android.
        return true;
      }
    })
  ).current;

    function onReset(){
      scale.setValue(1)
      setDoNotRender(false)
    }

    function onPressDown(){  
        if (!isResponding){
          scale.stopAnimation()
         isResponding = true
          Animated.timing(scale, {
            toValue: 0,
            useNativeDriver:true,
            duration:400,
            easing: Easing.elastic(1)
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
            easing: Easing.elastic(1)
          }).start()
        }
    }


    function onPress(){
      
      // console.log(cardRef.current)
      cardRef.current.measure( (fx, fy, width, height, pageX, pageY) => {
        const position = {
          width, 
          height,
          pageX,
          pageY
        }
        setDoNotRender(true)
         onSelect(index, position)
         setTimeout(() => {
           setDoNotRender(false)
            onReset()

          },700)
       
    })
    }

    const scaleHandler = scale.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0.9, 1]
                                })
    return(



 
      <View style={styles.outerContainer} {...panResponder.panHandlers}>
       {!doNotRender &&
      <Animated.View ref={cardRef}style={[styles.item, containerStyle?containerStyle:{},{transform:[{scale: scaleHandler}]}]}>
        <Image
          source={{uri: image}}
          style={styles.image}
          
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
        <View style={styles.titleContainer}>
        <LinearGradient colors={['#00000000', '#000000ff']} style={styles.titleContainer}>
         <View style={styles.titleInnerContainer}>
           <Text style={styles.title} numberOfLines={2}>
              {title}           
            </Text>
            {subtitle &&
              <Text style={styles.title} numberOfLines={2}>
                 {subtitle}
              </Text>
            }
          </View>
        </LinearGradient>
         
        </View>
      </Animated.View>
      }
      </View>
      
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    


  },
  outerContainer:{
    backgroundColor:'#e7e7e7',
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
    
    overflow:'hidden',
   
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
