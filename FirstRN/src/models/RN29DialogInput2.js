import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import ModalInput from "../views/ModalInput";
import ToastUtil from "../utils/ToastUtil";

export default class RN29DialogInput2 extends Component<Props> {

    static navigationOptions = {
        title: "29弹出输入框2"
    }

    state = {
        isModal: false,
        txtValue: ''
    }

    doClick() {
        this.dialogInput.show();
    }

    dialogInput;

    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <ModalInput
                    ref={(c) => {
                        this.dialogInput = c
                    }}
                    onSubmit={(text) => {
                        if (text) {
                            ToastUtil.show(text)
                        }
                    }}
                />

                <TouchableOpacity onPress={() => {
                    this.doClick()
                }}>
                    <Text style={{backgroundColor: 'green', fontSize: 20, margin: 10, padding: 10}}>哈哈哈</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    modalViewStyle: {
        flex: 1,
        backgroundColor: '#00000066',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    border_button: {
        backgroundColor: "#00FFCB",
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 20,
    },
    txt_button: {
        fontSize: 20
    },
    textInput: {
        width: 200,
        padding: 5,
        backgroundColor: 'white',
        marginBottom: 30,
    },
})