import React, { Component } from 'react';
import { Animated, Dimensions, View } from 'react-native';

import LottieView from 'lottie-react-native/src/js';


const width = Dimensions.get('window').width
export default class Confetti extends Component {
    

    componentDidMount() {
        this.animation.play();
    }

    getReactionJson = type => {
        return require('../Assets/Animations/confetti.json');
    };


    render() {
        const { type } = this.props;
        const animatedStyle = {
            transform: [{ scale: this.animatedValue }],
            
        };
        return (
            
                <View style={{flex:1, alignItems:'center', height:width * 0.66, marginTop:-width * 0.66, overflow:'hidden', position:'absolute', bottom:-200, left:width * 0.165,}}>
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        loop={false}
                       style={{width:width*0.66, height:width*0.66}}
                        source={this.getReactionJson(type)}
                    />
                </View>
            
        );
    }
}
