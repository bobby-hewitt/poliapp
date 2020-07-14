import React, { useRef, useEffect }from 'react';
import {
  View,
  Animated,
  Easing,
} from 'react-native';



const Issue = ({isVisible, children, delay, duration, onComplete}) => {
    const opacity = useRef(new Animated.Value(0)).current
    const top = useRef(new Animated.Value(30)).current
    

    useEffect(() => {
      if (isVisible){
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 1,
            useNativeDriver:true,
            duration:duration || 500,
            delay:delay || 500,
            easing: Easing.easeOut
          }),
          Animated.timing(top, {
            toValue: 0,
            useNativeDriver:true,
            duration:duration || 500,
            delay:delay || 500,
            easing: Easing.easeOut
          })
        ]).start(() => {
          if (onComplete){
            onComplete()
          }
        })
        return () => {

        }
      }
    },[isVisible])
    return(
      <Animated.View style={{flex:1, opacity, transform:[{translateY: top}]}}>
        {children}
      </Animated.View>
    )

}

export default Issue;
