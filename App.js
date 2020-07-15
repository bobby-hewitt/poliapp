


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
import globalStyles from './style'
import { localCard } from './Helpers/data'

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

  const onCardSelect =(index, position,cardType, halfHeight) => {

    
    let newEntry = Object.assign({},entries[index])
    newEntry.cardType = cardType ? cardType : newEntry.cardType 
    newEntry.halfHeight = halfHeight

    setModal({
      article: index,
      position
    })
  } 
  const onCardClose = () => {
    setModal(false)
  }

  const onResetComplete = (index) => {
    const newEntries = Object.assign([], entries)
    newEntries[index].complete = true
    setEntries(newEntries)
  }

  if (error ) {
    
    return <View><Text>Error</Text></View>

  } else if (loading){
      return <View><Text>Loading</Text></View>    
  }

  
  

  return (
    <React.Fragment>
      <ScrollView style={styles.container}>
        
        <View style={styles.thinItemContainer}>
          <Card {...localCard}  shadow modal={modal} halfHeight onResetComplete={onResetComplete} index={0} onSelect={onCardSelect}cardWidth={cardWidth} cardSize="small" />
         </View>
         <Text style={[globalStyles.title, styles.sectionTitle]}>Today</Text>
        {entries && entries.map((item, i) => {
          return(
            <View key={i}  style={styles.itemContainer}>
              <Card shadow modal={modal}{...item} onResetComplete={onResetComplete} index={i} onSelect={onCardSelect}cardWidth={cardWidth}/>
            </View>
          )
        })}
        <View style={{height:200}} />
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
    
    paddingTop:80,
    paddingBottom:180,
    backgroundColor:'#f2f2f2',
 },
 horizontalContainer: {
  paddingHorizontal:20,
  paddingVertical:20,
  flex: 1,


  backgroundColor:'#f2f2f2',
 },
 sectionTitle:{
   marginTop:60,
   marginBottom:20,
   paddingHorizontal:20,
   fontWeight:'bold',
 },
 itemContainer:{
   paddingHorizontal:20,
   borderRadius:20,
   width:'100%',
   marginBottom:20,
 },
 thinItemContainer:{
   marginHorizontal:20,
   // paddingVertical:40,
   position:'relative',
   borderRadius:20,
   width: (screenWidth-40),
   // height:300,
   marginRight:20,
 },
  item: {
    width: cardWidth,
    height: cardHeight,
  },
});



// <ScrollView 
//   horizontal={true} 
//   showsHorizontalScrollIndicator={false} 
//   snapToInterval={((screenWidth-60) /1.5) + 20}

//   style={styles.horizontalContainer}>
// {entries && entries.map((item, i) => {
//   return(
//     <View key={i}  style={styles.thinItemContainer}>
//       <Card shadow modal={modal}{...item} onResetComplete={onResetComplete} index={i} onSelect={onCardSelect}cardWidth={cardWidth} cardSize="small"/>
//     </View>
//   )
// })}

// </ScrollView>