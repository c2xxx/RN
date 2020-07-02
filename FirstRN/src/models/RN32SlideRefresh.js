import React, {Component} from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
export default class RN32SlideRefresh extends Component<Props> {

    static navigationOptions = {
        title: "RN32SlideRefresh"
    }

    state = {
        value: '哈哈哈'
    }

    doClick() {

    }

    render_content() {
        return (
            <View style={{backgroundColor: "#ddd", height: screenH + 10}}><Text>{this.state.value}</Text></View>
        )
    }

    render() {
        return (
            <FlatList
                renderItem={this.render_content.bind(this)}
                refreshing={false}
                onRefresh={() => {
                    ToastUtil.show("刷新")
                    this.setState({
                        value: '这是新的内容' + new Date().getTime()
                    })
                }}
                keyExtractor={(item, index) => {
                    return "" + index
                }}
                data={[1]}/>
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