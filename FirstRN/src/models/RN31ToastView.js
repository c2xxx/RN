import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";

export let screenW = Dimensions.get('window').width;
export let screenH = Dimensions.get('window').height;
export default class RN31ToastView extends Component<Props> {

    static navigationOptions = {
        title: "RN31ToastView"
    }


    doClick() {

    }

    render() {
        return (
            <View style={{backgroundColor: "#00000066", flex: 1}}>
                <View style={{flex: 1}}>
                    <Text>显示一个对话框在中间位置</Text>
                </View>

                <TouchableOpacity
                    style={style.btn}
                    onPressIn={() => {
                        ToastUtil.show("show")
                    }}
                    onPressOut={() => {
                        ToastUtil.show("hide")

                    }}>
                    <Text style={style.btnText}>Click</Text>
                </TouchableOpacity>
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