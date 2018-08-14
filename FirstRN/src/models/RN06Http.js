import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'

let url = "http://open.broadin.cn/api/package/info";
export default class RN06Http extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = ({
            content: "内容"
        });
    }

    static navigationOptions = () => ({
        title: "06Http请求"
    })

    loadData() {

        console.log("网络请求")
        fetch(url, {method: "GET"})
            .then((response) => response.text())
            .then(result => {
                console.log(result)
                this.setState({
                    content: result
                });
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    content: error
                });
            })
    }
    loadData2() {

        console.log("网络请求")
        fetch(url, {method: "GET"})
            .then((response) => response.json())
            .then(result => {
                console.log(result)
                this.setState({
                    content: `状态码：${result.ret}`
                });
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    content: error
                });
            })
    }

    render() {
        return <View style={style.container}>
            <ScrollView>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        this.loadData()
                    }}>
                    <Text style={style.text1}>请求</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        this.loadData2()
                    }}>
                    <Text style={style.text1}>请求</Text>
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