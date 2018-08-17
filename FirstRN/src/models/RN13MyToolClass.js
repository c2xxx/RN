import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native"
import MyTool from "../utils/MyUtils";

export default class RN13MyToolClass extends Component<Props> {

    static navigationOptions = {
        title: "RN13我的工具类"
    }


    doClick() {
        console.log("add    " + MyTool.add(10, 5))
        console.log("sub    " + MyTool.sub(10, 5))
        console.log("name   " + MyTool.name)
        console.log("time   " + MyTool.getTime())
    }

    render() {
        return <ScrollView>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    this.doClick()
                }}>
                <Text style={style.btnText}>Click</Text>
            </TouchableOpacity>
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