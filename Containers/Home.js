import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-snap-carousel';
import { SwipeCard } from '../Components'
import { Issue2 } from '../Containers'
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
  const [entries, setEntries] = useState([]);
  const [selected, setSelected]= useState(false)
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const onCardSelect =(index) => {
    console.log('selecting', index)
    setSelected(entries[index])
  } 
  const onCardClose = () => {
    setSelected(false)
  }

  const renderItem = ({item, index}, parallaxProps) => {

    return (
      <SwipeCard key={index}{...{item, index, parallaxProps}} onSelect={onCardSelect}/>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={cardWidth}
        data={entries}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
      </View>
      {selected && 
        <Issue article={selected} cardWidth={cardWidth} close={onCardClose}{...selected} cardHeight={cardHeight} cardWidth={cardWidth} />
      }
    </View>
  );
};

export default MyCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
  },
  carouselContainer:{
    marginTop:60
  },
  item: {
    width: cardWidth,
    height: cardHeight,
  },
  titleContainer:{
    position:'absolute',
    bottom:0,
    left:0,
    height:200,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    backgroundColor: 'white',
    borderRadius: 8,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
  },
});