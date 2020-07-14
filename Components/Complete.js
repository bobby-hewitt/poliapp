import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import LottieView from 'lottie-react-native/src/js';
import styles from '../style';


export default class Reaction extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.animation.loop =false
        if (!this.props.noAnimation){
        this.animation.play();
        } else {
             this.animation.animationProgress = 1.0
        }

    }


   


    render() {
        return (

                
                    <LottieView
                        ref={animation => {
                            this.animation = animation;
                        }}
                        progress={this.props.noAnimation ? 0.99 : 0}
                        loop={false}
                        style={{zIndex:1,position:'absolute', top:-4.5,left:-4.5, height:100, width:100,}}
                        source={require('../Assets/Animations/complete.json')}
                    />
                
            
        );
    }
}

