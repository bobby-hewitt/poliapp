import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';

import LottieView from 'lottie-react-native/src/js';
import styles from '../style';


export default class Reaction extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.animation.loop =this.props.loop
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
                loop={this.props.loop}
                style={this.props.style}
                source={this.props.animation}
            />        
        );
    }
}

