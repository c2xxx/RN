import React, {Component} from 'react';
import {Alert, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"

export default class ModalInput extends Component<Props> {

    static navigationOptions = {
        title: "29弹出输入框"
    }

    state = {
        isModal: false,
        txtValue: ''
    }

    onPreCancel() {
        this.hide();
        this.props.onCancel();
    }

    onPreSubmit() {
        this.hide();
        this.props.onSubmit(this.state.txtValue);
    }

    show() {
        this.setState({
            isModal: true
        })
    }

    hide() {
        this.setState({
            isModal: false
        })
    }


    static defaultProps = {
        onCancel: () => {
        },
        onSubmit: (text) => {
            if (text) {
                Alert.alert("提示", "输入内容：" + text)
            }
        },
    };



    render() {
        return (
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
                                this.onPreCancel()
                            }}>
                            <View style={styles.border_button}>
                                <Text style={styles.txt_button}>取消</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                this.onPreSubmit()
                            }}>
                            <View style={styles.border_button}>
                                <Text style={styles.txt_button}>确定</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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