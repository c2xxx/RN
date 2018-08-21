import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {};

export default class ContentPage extends Component<Props> {


    static navigationOptions = {
        title: "内容",
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>展示内容</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});
