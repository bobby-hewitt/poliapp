import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import Reaction from './Reaction';
import styles from './styles';
export default class ReactionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.types = this.props.types
    }

    renderItem = ({ item, index }) => {
       
        return <Reaction final={this.props.final} type={item.type} index={index} onSelect={this.props.onSelect} isNotSelected={this.props.selectedIndex !== false && this.props.selectedIndex !== index}isSelected={this.props.selectedIndex === index}/>;
    };

    render() {
        return (
            <View style={this.props.final ? styles.final: styles.card}>
                <FlatList
                    data={this.types}
                    horizontal
                    renderItem={this.renderItem}
                    keyExtractor={item => item.key}
                    bounces={false}
                    style={styles.list}
                />
            </View>
            
        );
    }
}