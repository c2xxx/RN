/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';



export default class Home extends Component<Props> {

    constructor(props){
        super(props)
        this.state=({
            name:"abc"+this.props.navigation.state.params.name
        });
    }

    static navigationOptions = {
        title: "第二页",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>我的第二页{this.state.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
