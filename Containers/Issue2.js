import React, {useRef, useEffect, useState} from 'react'
import { Card } from '../Components'
import { StyleSheet, Dimensions, View, Animated, Easing } from 'react-native'

const { width, height } = Dimensions.get('window')

const Article = ({article, position, cardWidth }) => {
	// const widthDiff = width - position.width

	// const [animatedIndex, setAnimatedIndex] = useState(0)
	// const scaleStart = useRef(position.width / width).current
	// const offset = useRef(widthDiff/2).current
	// const scale = useRef(new Animated.Value(scaleStart)).current
 //    const translateX = useRef(new Animated.Value(0)).current
	// const yOffset = (height *  scaleStart)  + position.pageY

	// console.log('offset', offset, 'scaleStart', scaleStart)
	
    
 //    const antiScaleStart = 1-scaleStart
 //    const translateY = useRef(new Animated.Value(position.pageY -offset)).current
    const xPos = useRef(new Animated.Value(position.pageX)).current
    const yPos = useRef(new Animated.Value(position.pageY)).current
    const elemWidth = useRef(new Animated.Value(position.width)).current
    const elemHeight = useRef(new Animated.Value(position.height)).current
    



    useEffect(() => {
      Animated.parallel([
        Animated.timing(xPos, {
          toValue: 0,
          useNativeDriver:false,
          duration:600,
          easing: Easing.bezier(.5,.2,.3,1.21)
        }),
        Animated.timing(yPos, {
          toValue: 0,
          useNativeDriver:false,
          duration:600,
          easing: Easing.bezier(.5,.2,.3,1.21)
        }),
         Animated.timing(elemWidth, {
          toValue: width,
          useNativeDriver:false,
          duration:600,
          easing: Easing.bezier(.5,.2,.3,1.21)
        }),
         Animated.timing(elemHeight, {
          toValue: height,
          useNativeDriver:false,
          duration:600,
          easing: Easing.bezier(.5,.2,.3,1.21)
        })
      ]).start(() => {
        // setTimeout(() => {
          // setAnimatedIndex(0)
        // },50)
        
      })
      return () => {

      }
    },[])

    // const scaleHandler = scale.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0.9, 1]
    // })
    // const translateXHandler = scale.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0.9, 1]
    // })
    // const translateYHandler = scale.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0.9, 1]
    // })
	return(
		<Animated.View style={[styles.container, {top:yPos, left:xPos, width:elemWidth, height:elemHeight}]}>

		<Card {...article} onSelect={() => {return}} containerStyle={{borderRadius:0}}/>
		</Animated.View>
	)
}

const styles = StyleSheet.create({
	container:{
		
		position:'absolute',
		backgroundColor:'#f2f2f2',
		
	}
})


export default Article