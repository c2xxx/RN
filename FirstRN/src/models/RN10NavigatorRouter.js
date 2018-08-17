import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native"
import MyTouchableOpacity from "../views/MyTouchableOpacity"
export default class RN10NavigatorRouter extends Component<Props> {

    static navigationOptions = {
        title: "RN10Router学习"
    }


    doClick() {

    }

    render() {
        return <ScrollView>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    this.doClick();
                }}>
                <Text style={style.btnText}>Click</Text>
            </TouchableOpacity>

            <MyTouchableOpacity
                style={style.btn}
                onPress={() => {
                    this.doClick();
                }}>
                <Text style={style.btnText}>这个是复写的控件</Text>
            </MyTouchableOpacity>
        </ScrollView>
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