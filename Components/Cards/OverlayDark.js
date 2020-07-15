import React  from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Easing,
  Dimensions,
} from 'react-native';
import globalStyles from '../../style'
import LinearGradient from 'react-native-linear-gradient';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const Card = ({item, index, noHandlers, cardWidth, maxTextWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}) => {
  
  return(
      <React.Fragment>
        <Image
          source={{uri: image}}
          style={styles.image} 
        />
        
        <View style={styles.titleContainer}>
          <LinearGradient colors={['#00000000', '#000000ff']} style={styles.titleContainer}>
           <View style={styles.titleInnerContainer}>
             <Text style={[globalStyles.title, styles.text, {maxWidth: maxTextWidth}]} numberOfLines={2}>
                {title}           
              </Text>
              {subtitle &&
                <Text style={[globalStyles.subtitle, styles.text, {maxWidth: maxTextWidth}]} numberOfLines={2}>
                   {subtitle}
                </Text>
              }
            </View>
          </LinearGradient>
        </View>
      </React.Fragment>
  )
}


const styles = StyleSheet.create({
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
export default Card;
