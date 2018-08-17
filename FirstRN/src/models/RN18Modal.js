import React, {Component} from 'react';
import {Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native"

export default class RN18Modal extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = ({
            modalVisibility: false
        })
    }

    static navigationOptions = {
        title: "RN18Modal"
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
            <Modal style={style.modal}
                   visible={false}
                   transparent={true}
                   onRequestClose={() => {
                       console.log("关闭");
                   }}>

                <View style={style.container_modal}>
                    <Text>弹窗</Text>
                    <TouchableOpacity
                        style={style.btn}
                        onPress={() => {
                            this.doClick()
                        }}>
                        <Text style={style.btnText}>弹出的按钮</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </ScrollView>
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    container_modal: {
        flex: 1,
        flexWrap: 'wrap',
        height: 100,
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 8,
    },
    modal: {
        fontSize: 18,
        margin: 8,
        backgroundColor: "#33cc66"
    },
    btn: {
        margin: 10,
        backgroundColor: "#aacc66"
    },
})