import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'

export default class RN00BasePage extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = ({
            content: "内容"
        });
    }

    static navigationOptions = () => ({
        title: "00"
    })

    doClick() {
        this.println("结果");
    }

    println(msg) {
        console.log(msg)
        //注意，这种写法只会显示最后一次setState，setState应该是异步执行的
        // this.setState({
        //     content: this.state.content + "\n" + msg
        // });
        this.setState((preState,props)=>({
            content: preState.content + "\n" + msg
        }));
    }

    clearScreen() {
        this.setState({
            content: ""
        });
    }

    render() {
        return <View style={style.container}>
            <ScrollView>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        this.doClick()
                    }}>
                    <Text style={style.text1}>Click</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        this.clearScreen()
                    }}>
                    <Text style={style.text1}>ClearScreen</Text>
                </TouchableOpacity>
                <Text>
                    {this.state.content}
                </Text>
            </ScrollView>
        </View>
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ddd"
    },
    text1: {
        fontSize: 30,
        textAlign: 'center',
    },
    btnBorder: {
        margin: 10,
        backgroundColor: "#99aa77"
    }
})