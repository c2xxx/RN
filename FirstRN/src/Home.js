import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

type Props = {};

export default class Home extends Component<Props> {


    static navigationOptions = {
        title: "首页",
    }

    /**
     * 点击按钮
     */
    onBtnClick = () => {
        console.log("点击了按钮btn")
        this.props.navigation.navigate('Second',{name:"chen"});

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
