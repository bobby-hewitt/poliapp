import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import { SwipeCard } from '../Components'
import { Issue } from '../Containers'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

const ENTRIES1 = [
  {
    title: "Primark opens",
    subtitle: "Schools stay shut",
    illustration: 'https://images.unsplash.com/photo-1511985680987-26112c2711d2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIzNTYyfQ',
    badge: 'Government decision'
  },
  {
    
    title: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    badge: 'Trending'
    
  },
  {
    title: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    badge: 'Top news'
  },
  {
    title: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    badge:'Vote in Pariament'
  },
];
const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const cardWidth = screenWidth - 40
const cardHeight = 600
const MyCarousel = props => {

  return (
    <View style={styles.container}>
   
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
 
});