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
        title: "RN00"
    }


    doClick() {

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