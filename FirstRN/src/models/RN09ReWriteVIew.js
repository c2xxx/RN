import React, {Component} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native"
import MyTouchableOpacity from "../views/MyTouchableOpacity"

export default class RN09ReWriteVIew extends Component<Props> {

    static navigationOptions = {
        title: "RN09重写控件"
    }


    doClick() {
        Alert.alert("提示", "点击了按钮")
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
                <Text style={style.btnText}> 这个是复写的控件</Text>
            </MyTouchableOpacity>

            <Text style={style.text_area}
                  onPress={() => {
                      this.doClick();
                  }}>
                这是文本框</Text>
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
    text_area: {
        fontSize: 18,
        margin: 10,
        backgroundColor: "#aacc66"
    }
})