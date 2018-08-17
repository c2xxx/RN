import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    View
} from "react-native"

export default class RN08NativeView extends Component<Props> {

    static navigationOptions = {
        title: "RN08原生控件"
    }

    render() {
        return <ScrollView>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    this.props.navigation.navigate("RN01SimplePage");
                }}>
                <Text style={style.btnText}>跳界面,触发didFocus、didBlur</Text>
            </TouchableOpacity>
        </ScrollView>
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap:'wrap',
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