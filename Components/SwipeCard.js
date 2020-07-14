import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Text
} from 'react-native';

import globalStyles from '../style'
import {ParallaxImage} from 'react-native-snap-carousel';
import LinearGradient from 'react-native-linear-gradient';
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

const Card = ({item, index, cardWidth, parallaxProps, onSelect}) => {
    return(
      <TouchableWithoutFeedback onPress={() => onSelect(index)}>
      <View style={[styles.item, {width: cardWidth}]}>
        <ParallaxImage
          source={{uri: item.illustration}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.badge}</Text>
        </View>
        <View style={styles.titleContainer}>
        <LinearGradient colors={['#00000000', '#000000ff']} style={styles.titleContainer}>
         <View style={styles.titleInnerContainer}>
           <Text style={styles.title} numberOfLines={2}>
              {item.title}           
            </Text>
            {item.subtitle &&
              <Text style={styles.title} numberOfLines={2}>
                 {item.subtitle}
              </Text>
            }
          </View>
        </LinearGradient>
         
        </View>
      </View>
      </TouchableWithoutFeedback>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:60,

  },
  item: {
    margin:-6,
    height: 600,
    overflow:'hidden'
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
