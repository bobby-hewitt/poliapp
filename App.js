// import React, {useRef, useState, useEffect} from 'react';
// import Carousel from 'react-native-snap-carousel';
// import { SwipeCard } from './Components'
// import { Issue } from './Containers'
// import {
//   View,
//   Text,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Platform,
//   ScrollView,
//   TabBarIOS
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Home, Gov } from './Containers'

// const Tab = createBottomTabNavigator();


// const MyCarousel = props => {
  
//   return(
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Settings" component={Gov} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// };

// export default MyCarousel;

// const styles = StyleSheet.create({
  
// });


import React, {useRef, useState, useEffect} from 'react';

import Carousel from 'react-native-snap-carousel';
import { Card } from './Components'
import { Issue2 } from './Containers'
import { useQuery } from '@apollo/react-hooks'
import { GET_ARTICLES } from './Helpers/queries'
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const cardWidth = screenWidth - 40
const cardHeight = 600



const App = props => {
  const { loading, error, data, refetch } = useQuery(GET_ARTICLES)
  const [entries, setEntries] = useState([]);
  const [modal, setModal]= useState(false)
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    if (data){
    setEntries(data.Article);
    }
  }, [data]);

  const onCardSelect =(index, position) => {
    
    setModal({
      article: entries[index],
      position
    })
  } 
  const onCardClose = () => {
    setModal(false)
  }

  if (error || loading ) {
    console.log('error', error, loading)
    return <View />
  }
  console.log(data.Article)

  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        {entries && entries.map((item, i) => {
          return(
            <View key={i}  style={styles.itemContainer}>
            <Card {...item} index={i} onSelect={onCardSelect}cardWidth={cardWidth}/>
            </View>
          )
        })}
      </ScrollView>
      
      {modal && 
        <Issue2 close={onCardClose}{...modal} cardWidth={cardWidth} />
      }
    
    </React.Fragment>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    
    backgroundColor:'#f2f2f2',
 },
 itemContainer:{
   borderRadius:20,
   overflow:'hidden',
   width:'100%',
   marginBottom:20,
 },
  item: {
    width: cardWidth,
    height: cardHeight,
  },
});