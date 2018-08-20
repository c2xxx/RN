import React, {Component} from 'react';
import {Alert, ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native"

import ModalDialog from "../views/ModalDialog"
import MyDialog from "../views/MyDialog"

export default class RN16MyConfirmDialog extends Component<Props> {

    constructor(props) {
        super(props)
        // 初始状态
        this.state = {
            isDialogVisible: false
        };
    }

    static navigationOptions = {
        title: "RN16自定义确认框"
    }


    doClick() {
        Alert.alert(
            "提示",
            "是否要进行下一步操作？",
            [
                {
                    text: '下一步', onPress: () => {
                        Alert.alert("结果：", "下一步")
                    }, style: 'destructive'
                },
                {
                    text: '终止', onPress: () => {
                        Alert.alert("结果：", "终止")
                    }, style: 'cancel'
                },
            ],
            {cancelable: true}
        )
    }

    showDialog() {
        this.setState({isDialogVisible: true});
    }

    hideDialog() {
        this.setState({isDialogVisible: false});
    }

    render() {
        return <ScrollView>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    this.doClick()
                }}>
                <Text style={styles.btnText}>原始对话框</Text>
            </TouchableOpacity>

            <MyDialog>
            </MyDialog>

            <ModalDialog
                _dialogVisible={this.state.isDialogVisible}
                _dialogLeftBtnAction={() => {
                    this.hideDialog()
                    Alert.alert("结果：", "取消")
                }}
                _dialogRightBtnAction={() => {
                    this.hideDialog()
                    Alert.alert("结果：", "确定")
                }}
            />
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    this.showDialog()
                }}>
                <Text style={styles.btnText}>自定义对话框</Text>
            </TouchableOpacity>
        </ScrollView>
    }
}
const styles = StyleSheet.create({
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
    hello: {
        fontSize: 20,
        margin: 10,
        textAlign: 'left'
    },
})