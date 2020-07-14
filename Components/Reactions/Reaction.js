import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import LottieView from 'lottie-react-native/src/js';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Reaction extends Component {
    constructor(props) {
        super(props);

        this.animatedValue = new Animated.Value(1);
        this.animatedWidth = new Animated.Value(60);
    }

    componentDidMount() {
        this.animation.play();
    }

    getReactionJson = type => {
        switch (type) {
        case 'Love':
            return require('../../Assets/Animations/love.json');
        case 'Angry':
            return require('../../Assets/Animations/angry.json');
        case 'Cynical':
            return require('../../Assets/Animations/cynical.json');
        case 'Unhappy':
            return require('../../Assets/Animations/unhappy.json');
        case 'Laugh':
            return require('../../Assets/Animations/laugh.json');
        }
    };

    componentWillReceiveProps(np){
        if (np.isSelected){
            Animated.spring(this.animatedValue, {
                toValue: 1.5,
                durtion:150,
                useNativeDriver:true,
            }).start();

        
            } else {
                 Animated.spring(this.animatedValue, {
                toValue: 1,
                useNativeDriver:true,
            }).start();
        }
    }

    

    onSelect =() => {

    }

    render() {
        const { type } = this.props;
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }],
            
        };
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    if(!this.props.isSelected){
                        this.props.onSelect(this.props.index)
                    }
                }}>
                <Animated.View style={[this.props.final ? styles.finalReactView : styles.reactView, animatedStyle, {opacity: this.props.isNotSelected ? 0 : 1, width: this.props.isNotSelected ? 0 : 60}]}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        style={this.props.final ? styles.finalReaction : styles.reaction}
                        source={this.getReactionJson(type)}
                    />
                </Animated.View>
            </TouchableWithoutFeedback>
        );
    }
}


// export default Reaction

// import React, { Component, useRef, useEffect } from 'react';
// import { Animated, TouchableWithoutFeedback } from 'react-native';

// import LottieView from 'lottie-react-native/src/js';
// import PropTypes from 'prop-types';
// import styles from './styles';

// const Reaction = ({type, index, isSelected, onSelect}) => {
//     const animatedValue = useRef(new Animated.Value(1)).current

//     getReactionJson = type => {
//         switch (type) {
//         case 'Love':
//             return require('../../Assets/Animations/love.json');
//         case 'Angry':
//             return require('../../Assets/Animations/angry.json');
//         case 'Cynical':
//             return require('../../Assets/Animations/cynical.json');
//         case 'Unhappy':
//             return require('../../Assets/Animations/unhappy.json');
//         case 'Laugh':
//             return require('../../Assets/Animations/laugh.json');
//         }
//     };

//     useEffect(() => {
//         if (isSelected){
//              Animated.spring(animatedValue, {
//                 toValue: 1.5,
//                 durtion:150,
//                 useNativeDriver:true,
//             }).start();
//         } else{

//         }
//         return() => {
//              Animated.spring(animatedValue, {
//                 toValue: 1,
//                 useNativeDriver:true,
//             }).start();
//         }

//     },[isSelected])

//     onPressIn = () => {
//         Animated.spring(animatedValue, {
//             toValue: 1.5,
//             durtion:150,
//             useNativeDriver:true,
//         }).start();

//     };

//     onPressOut = () => {
//         Animated.spring(animatedValue, {
//             toValue: 1,
//             useNativeDriver:true,
//         }).start();
      
//     };

//     onSelect =() => {

//     }

    
        
//         const animatedStyle = {
//             transform: [{ scale: animatedValue }],
            
//         };
//         return (
//             <TouchableWithoutFeedback
//                 onPress={() => onSelect(index)}
                
//             >
//                 <Animated.View style={[styles.reactView, animatedStyle]}>
//                     <LottieView
//                         ref={animation => {
//                             animation = animation;
//                         }}
//                         style={styles.reaction}
//                         source={getReactionJson(type)}
//                     />
//                 </Animated.View>
//             </TouchableWithoutFeedback>
//         );
    
// }

// export default Reaction

// Reaction.propTypes = {
//     type: PropTypes.string,
//     index: PropTypes.number
// };