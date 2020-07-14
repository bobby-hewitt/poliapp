import React, { useRef, useEffect, useState }from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  
  Image,
  Text,
  Dimensions,
  Animated,
  Easing,
  ScrollView,
  TouchableWithoutFeedback
} from 'react-native';
import { Fade, Quote, TextBlock, Confetti, LinkItem, Reactions, Article, Button } from '../Components'
import LinearGradient from 'react-native-linear-gradient';
const reactionTypes = [
  { key: '4', type: 'Unhappy' },
  { key: '5', type: 'Laugh' },
];


const items = [
{
  type: 'text',
  items: [
    'As lockdown eases the Government need to make decisions about the best route back to normailty.',
    'Non essential shops are due to reopen but the decision has been made to stop the majority of children returning to school.',
    "Here's the thoughts of some of the key players:"
    ]
},
{
  type: 'quote',
  name:'Boris Johnson',
  position: 'Prime Minister',
  profileImage: 'https://pbs.twimg.com/profile_images/1200430685560983553/xRebdCDg_400x400.jpg',
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
}, 
{
  type: 'quote',
  name:'Keir Starmer',
  position: 'Leader of the opposition',
  profileImage: 'https://pbs.twimg.com/profile_images/1224662626245976069/omoS526K_400x400.jpg',
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
}, 
{
  type: 'quote',
  name:'Chris Witty',
  position: 'Chief Medical Officer',
  profileImage: 'https://pbs.twimg.com/profile_images/1178622778003656704/WTbrf7hc_400x400.jpg',
  quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
}, 
// {
//   type: 'articles',
//   title: 'Looking for more info? \n Here are some good articles:',
//   items:[
//     {
//       title: 'Coronavirus: All primary pupils no longer going back to school',
//       link: 'https://www.bbc.co.uk/news/education-52982352',
//       image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/0A65/production/_112816620_2.53958663.jpg'
//     },
//     {
//       title: 'Coronavirus: All primary pupils no longer going back to school',
//       link: 'https://www.bbc.co.uk/news/education-52982352',
//       image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/0A65/production/_112816620_2.53958663.jpg'
//     },
//     {
//       title: 'Coronavirus: All primary pupils no longer going back to school',
//       link: 'https://www.bbc.co.uk/news/education-52982352',
//       image: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/0A65/production/_112816620_2.53958663.jpg'
//     },
//   ]
  
// },

{
  type: 'text',
  buttonHidden: true,
  style:{fontWeight:'900', textAlign:'center'},
  items:[
    "Should non-essential businesses open while schools remain closed?"
  ]
},
{
  type:'voteInput'
}
]

const Issue = ({illustration, close, cardHeight, cardWidth, title, subtitle}) => {
    const [ animatedIndex, setAnimatedIndex ] = useState(-1)
    const [ reaction, setReaction ] = useState(false)
    const width = useRef(new Animated.Value(cardWidth)).current
    const height = useRef(new Animated.Value(cardHeight)).current
    const top = useRef(new Animated.Value(60)).current
    const backgroundOpacity = useRef(new Animated.Value(1)).current
    const [ visibleIndex, setVisibleIndex] = useState(0)
    const scrollView = useRef();
    const onComplete = () => {
      
      setAnimatedIndex( animatedIndex +1)

    }

    // useEffect(() => {
      
    //   Animated.parallel([
    //     Animated.timing(width, {
    //       toValue: Dimensions.get('window').width,
    //       useNativeDriver:false,
    //       duration:400,
    //       easing: Easing.elastic(1)
    //     }),
    //     Animated.timing(height, {
    //       toValue: 400,
    //       useNativeDriver:false,
    //       duration:400,
    //       easing: Easing.elastic(1)
    //     }),
    //      Animated.timing(top, {
    //       toValue: 0,
    //       useNativeDriver:false,
    //       duration:400,
    //       easing: Easing.elastic(1)
    //     }),
    //   ]).start(() => {
    //     // setTimeout(() => {
    //       setAnimatedIndex(0)
    //     // },50)
        
    //   })
    //   return () => {

    //   }
    // },[])


    // function onClose(){
    //   setAnimatedIndex(-1)
    //   Animated.parallel([
    //     Animated.timing(width, {
    //       toValue: cardWidth,
    //       useNativeDriver:false,
    //       duration:200,
    //       easing: Easing.easeIn
    //     }),
    //     Animated.timing(height, {
    //       toValue: cardHeight,
    //       useNativeDriver:false,
    //       duration:200,
    //       easing: Easing.easeIn
    //     }),
    //      Animated.timing(top, {
    //       toValue: 60,
    //       useNativeDriver:false,
    //       duration:200,
    //       easing: Easing.easeIn
    //     }),
    //   ]).start(() => {
    //     // Animated.timing(backgroundOpacity, {
    //     //   toValue: 0,
    //     //   useNativeDriver:true,
    //     //   duration:250,
    //     //   easing: Easing.easeIn
    //     // }).start(() => {
    //       close()
    //     // })

    //   })
    // }


    // function onRespond(delay){
    //   console.log('RESPONDING')
    //   setVisibleIndex(visibleIndex+1)
    //   setTimeout(() => {
    //     scrollView.current.scrollToEnd({animated: true})
    //   }, delay ? delay + 500 : 100)
      
    // }
    return(
      <Animated.View style={[styles.container, {opacity:backgroundOpacity}]}>
        <ScrollView style={{paddingBottom:100}}showsVerticalScrollIndicator={false} ref={scrollView}>
        <Animated.View style={styles.imageContainer} style={{width:width, height:height, transform:[{translateY: top}]}}>
          <Image source={{uri:illustration}} style={styles.image}/>
          <LinearGradient colors={['#00000000', '#000000ff']} style={styles.titleContainer}>
         <View style={styles.titleInnerContainer}>
           <Text style={styles.title} numberOfLines={2}>
              {title}           
            </Text>
            {subtitle && 
              <Text style={styles.title} numberOfLines={2}>
                 {subtitle}
              </Text>
            }
          </View>
        </LinearGradient>
        </Animated.View>
        <View style={styles.contentContainer}>
        <Fade isVisible={ animatedIndex >=0 } duration={200} onComplete={onComplete}>
        



        {animatedIndex >= 0 && items && items.map((item, i) => {
          if (visibleIndex< i){
            return <View key={i} />
          }
          switch(item.type){
            case 'quote':
              return(
                <Fade isVisible onComplete={onComplete}>
                 <Quote isPassed={i < visibleIndex } onRespond={onRespond}key={i} style={styles.row} {...item}/>
                </Fade>
                )
            case 'text':
              return (
                <Fade isVisible onComplete={onComplete}>
                 <TextBlock isPassed={i < visibleIndex } onRespond={onRespond} key={i}{...item} />
                </Fade>
              )
             case 'link':
              
              return (
                <Fade isVisible onComplete={onComplete}>
                  <LinkItem isPassed={i < visibleIndex } onRespond={onRespond} key={i}{...item} />
                </Fade>
              )
            case 'articles':
              
              return (
                <Fade isVisible onComplete={onComplete}>
                  <Article isPassed={i < visibleIndex } onRespond={onRespond} key={i}{...item} />
                </Fade>
              )
            default: 
              return <View/>
          }
         
        })}
        {visibleIndex >= items.length -2 && animatedIndex > -1 &&
          <Fade isVisible onComplete={onComplete}>
          <Reactions final onSelect={(index) => {
            setReaction(index)
            onRespond()
          }} selectedIndex={reaction} types={reactionTypes}/>
          </Fade>
        }
        {visibleIndex === items.length -1 &&
          
          <Confetti/>
          
        }
        {visibleIndex === items.length -1 &&
          <Fade isVisible delay={1000}>
          <Button label="Find out what others think" onPress={() => {return}}/>
          </Fade>
        }

        </Fade>
        </View>
        <View style={{height:100}} />
        </ScrollView>
        {animatedIndex >= 0 &&
          <TouchableWithoutFeedback onPress={() => onClose()}>
            <Image style={styles.close} source={require('../Assets/Icons/close.png')} />
          </TouchableWithoutFeedback>
        }
      </Animated.View>
    )

}


const styles = StyleSheet.create({
  container: {

    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems:'center',
    backgroundColor:'#f2f2f2',
    // justifyContent:'center'
  },
  contentContainer:{
    padding:20,
  },
  close:{
    position:'absolute',
    top:40,
    right:20,
    
    width:20,
    height:20,
  },
  titleContainer:{
    position:'absolute',
    bottom:0,
    left:0,
    height:200,
    width:'100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  row:{
    marginBottom:20,
    // height:100,
    flex:1,
  },
  title:{
    width:Dimensions.get('window').width - 80,
    color:'white',
    fontWeight:'bold',
    fontSize:32,
   
  },
  imageContainer: {
    marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
    overflow:'hidden',
    position:'relative',
    backgroundColor:'blue',
  },
  titleInnerContainer:{
    padding:20,
    position:'absolute',
    bottom:0,
    left:0,
    justifyContent:'flex-end'
  },
  bodycopy:{
    fontSize:20,
    lineHeight:24,
    marginVertical:24,
  },

  image: {
    
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',

  },
 
});
export default Issue;
