import React, {useRef, useEffect, useState} from 'react'
import { Card, TextInput,LocalContent } from '../Components'
import { StyleSheet, Text, Dimensions, Image, TouchableWithoutFeedback, View, Animated, Easing } from 'react-native'
import globalStyles from '../style'
const { width, height } = Dimensions.get('window')

const Article = ({article, position, close, cardWidth }) => {
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


 const animatedVal = useRef(new Animated.Value(0)).current
    // const xPos = useRef(new Animated.Value(position.pageX)).current
    // const yPos = useRef(new Animated.Value(position.pageY)).current
    // const elemWidth = useRef(new Animated.Value(position.width)).current
    // const elemHeight = useRef(new Animated.Value(position.height)).current
    



    useEffect(() => {
    	Animated.timing(animatedVal, {
          toValue: 1,
          useNativeDriver:false,
          duration:600,
          easing: Easing.bezier(.5,.2,.3,1.21)
        }).start()
      // Animated.parallel([
      //   Animated.timing(xPos, {
      //     toValue: 0,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   }),
      //   Animated.timing(yPos, {
      //     toValue: 0,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   }),
      //    Animated.timing(elemWidth, {
      //     toValue: width,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   }),
      //    Animated.timing(elemHeight, {
      //     toValue: height,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   })
      // ]).start(() => {
      //   // setTimeout(() => {
      //     // setAnimatedIndex(0)
      //   // },50)
        
        
      // })
      return () => {

      }
    },[])

    function onClose(){
    	Animated.timing(animatedVal, {
          toValue: 0,
          useNativeDriver:false,
          duration:300,
          easing: Easing.easeIn
        }).start(() => {
        	close()
        })
      // Animated.parallel([
      //   Animated.timing(xPos, {
      //     toValue: position.pageX,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   }),
      //   Animated.timing(yPos, {
      //     toValue: position.pageY,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   }),
      //    Animated.timing(elemWidth, {
      //     toValue: position.width,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   }),
      //    Animated.timing(elemHeight, {
      //     toValue: position.height,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   })
      //    Animated.timing(elemHeight, {
      //     toValue: position.height,
      //     useNativeDriver:false,
      //     duration:600,
      //     easing: Easing.bezier(.5,.2,.3,1.21)
      //   })
      // ]).start(() => {
      // 	close()
      //   // setTimeout(() => {
      //     // setAnimatedIndex(0)
      //   // },50)
        
      // })
    }

    const xPos = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [position.pageX, 0]
    })
    const yPos = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [position.pageY, 0]
    })
    const elemWidth = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [position.width, width]
    })
    const elemHeight = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [position.height, height]
    })
    const borderRadius = animatedVal.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 0]
    })
    const closeOpacity = animatedVal.interpolate({
        inputRange: [0.5, 1],
        outputRange: [0, 1]
    })
    // const translateXHandler = scale.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0.9, 1]
    // })
    // const translateYHandler = scale.interpolate({
    //     inputRange: [0, 1],
    //     outputRange: [0.9, 1]
    // })
	return(
		<View style={{position:'absolute', top:0, left:0, bottom:0, right:0}}>
		<Animated.ScrollView style={[styles.container, globalStyles.shadow, {top:yPos, left:xPos, width:elemWidth, height:elemHeight}]}>
			
			<Card {...article} shadow={false} isFromModal noHandlers  onSelect={() => {return}} borderRadius={borderRadius} maxTextWidth={position.width -20}animValue={animatedVal}/>
			
	         <View style={{padding:20}}>
	         {article.cardType === 'local' &&
	         <LocalContent />
	     	}
	     	</View>

	        
		</Animated.ScrollView>
		<TouchableWithoutFeedback onPress={() => onClose()}>
				<Animated.View style={[styles.closeContainer, {opacity: closeOpacity}]}>
	            <Image style={styles.closeIcon} source={require('../Assets/Icons/close.png')} />
	            </Animated.View>
	         </TouchableWithoutFeedback>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		
		position:'absolute',
		backgroundColor:'#fff',
		borderRadius:20,
		
	},
	closeContainer:{
		position:'absolute',
		top:50,
		right:0,
		width:44,
		height:44,
	},
	closeIcon:{
		width:24,
		height:24,
	},
})


export default Article