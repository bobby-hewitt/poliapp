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
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const TitleSectionBottom = ({item, index, noHandlers, cardWidth, parallaxProps, borderRadius, containerStyle,onSelect, image, badge, title, subtitle, cardType}) => {
  
  return(
      <React.Fragment>
        <Image
          source={{uri: image}}
          style={styles.image} 
        />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge}</Text>
        </View>
        <View style={styles.titleContainer}>
           <View style={styles.titleInnerContainer}>
             <Text style={[globalStyles.title, styles.text]} numberOfLines={2}>
                {title}           
              </Text>
              {subtitle &&
                <Text style={[globalStyles.subtitle, styles.text]} numberOfLines={2}>
                   {subtitle}
                </Text>
              }
            </View>
        </View>
        
      </React.Fragment>
  )
}


const styles = StyleSheet.create({
  image: {
    flex:1,
    resizeMode: 'cover',
  },
  titleInnerContainer:{
    padding:20,
   
    backgroundColor:'#fff',
    width:'100%',
    justifyContent:'flex-end'
  },
  titleContainer:{ 
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
export default TitleSectionBottom;
