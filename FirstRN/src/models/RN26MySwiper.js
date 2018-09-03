import React, {Component} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from "react-native"

const {width, height} = Dimensions.get('window');

export default class RN26MySwiper extends Component<Props> {

    static navigationOptions = {
        title: "RN26MySwiper"
    }


    doClick() {

    }

    renderItem(name, index) {
        return (
            <View
                key={index.toString()}
                style={{
                    width: width - 60,
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
    _scrollView;

    _handleEndDrag(event: Object, _scrollView) {
        var endX = event.nativeEvent.contentOffset.x;//取得拖拉后的位置
        let contentWidth = width - 40;
        console.log("width=", contentWidth, " currentX=", endX)
        let index = Math.round(endX * 1.0 / contentWidth);
        console.log("第几个Item=", index)
        _scrollView.scrollTo({x: index * contentWidth - 20, animated: true});
    }


    render() {
        let items = [];
        this.list.map((item, index) => {
            items.push(this.renderItem(item, index));
        })
        return (
            <View>
                <ScrollView
                    style={{width: width, backgroundColor: "white"}}
                    horizontal
                    ref={(scrollView) => {
                        this._scrollView = scrollView;
                    }}
                    onScrollEndDrag={(event) => {
                        this._handleEndDrag(event, _scrollView);
                    }}>
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