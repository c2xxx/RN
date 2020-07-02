import React, {Component} from 'react';
import {Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";

export default class RN29DialogInput extends Component<Props> {

    static navigationOptions = {
        title: "29弹出输入框"
    }

    state = {
        isModal: false,
        txtValue: ''
    }

    doClick() {
        this.setState({
            isModal: true
        })
    }

    onCancel() {
        ToastUtil.show("取消");
        this.setState({
            isModal: false
        })
    }

    onSubmit() {
        ToastUtil.show("输入内容：" + this.state.txtValue);
        this.setState({
            isModal: false
        })
    }


    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Modal
                    animationType='slide'           // 从底部滑入
                    transparent={true}             // 不透明
                    visible={this.state.isModal}    // 根据isModal决定是否显示
                    onRequestClose={() => {
                    }}>
                    <View style={styles.modalViewStyle}>

                        <TextInput
                            underlineColorAndroid={'transparent'}

                            style={styles.textInput}
                            multiline={true}
                            placeholder={"请输入"}
                            onChangeText={(text) => {
                                this.setState({
                                    txtValue: text
                                })
                            }}
                            value={this.state.txtValue}
                        />


                        <View style={{flexDirection: 'row'}}>

                            <TouchableOpacity
                                onPress={() => {
                                    this.onCancel();
                                }}>
                                <View style={styles.border_button}>
                                    <Text style={styles.txt_button}>取消</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    this.onSubmit();
                                }}>
                                <View style={styles.border_button}>
                                    <Text style={styles.txt_button}>确定</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </Modal>

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