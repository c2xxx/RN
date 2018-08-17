import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    View
} from "react-native"

export default class RN00 extends Component<Props> {

    static navigationOptions = {
        title: "RN00菜单"
    }


    doClick() {

    }

    render() {
        return <ScrollView>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    this.props.navigation.navigate("RN11SlideDownRefresh");
                }}>
                <Text style={style.btnText}>RN11SlideDownRefresh</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {
                    this.props.navigation.navigate("RN12ListView");
                }}>
                <Text style={style.btnText}>RN12ListView</Text>
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