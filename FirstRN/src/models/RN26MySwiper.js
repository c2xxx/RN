import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native"

const {width, height} = Dimensions.get('window');

export default class RN26MySwiper extends Component<Props> {

    static navigationOptions = {
        title: "RN26MySwiper"
    }


    doClick() {

    }

    renderItem(name) {
        return (
            <View style={{
                width: width - 40,
                backgroundColor: "#ddd",
                alignItems: 'center',
                justifyContent: 'center',
                margin: 10,
                height: 100
            }}>
                <Text>{name}</Text>
            </View>
        )
    }

    list = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    render() {
        let items = [];
        this.list.map(item => {
            items.push(this.renderItem(item));
        })
        return (
            <View>
                <ScrollView
                    style={{width: width - 20, backgroundColor: "white"}}
                    horizontal
                    pagingEnabled>
                    {items}
                </ScrollView>
            </View>
        )
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    btn: {
        margin: 10,
        backgroundColor: "#aacc66"
    },
})