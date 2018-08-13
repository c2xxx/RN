/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import StackNavigator from "react-navigation"

type Props = {};
const FirstRN = StackNavigator({
    Welcome: {screen: App},
    Home: {screen: Home},
});


export default class Home extends Component<Props> {


    static navigationOptions = {
        title: "Home",
    }

    /**
     * 点击按钮
     */
    onBtnClick = () => {
        console.log("点击了按钮")
        alert("点击了按钮");

        const RootNavigator = StackNavigator({
            Home: {
                screen: HomeScreen
            },
            Chat: {
                path: 'people/:name',
                screen: ChatScreen
            }
        });

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>我的首页</Text>
                <Button style={styles.instructions}
                        title={"开始我的RN"}
                        onPress={this.onBtnClick}
                />
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
