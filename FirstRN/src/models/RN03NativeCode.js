import React, {Component} from 'react'
import {
    Alert,
    NativeModules,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    DeviceEventEmitter,
    TouchableOpacity,
    View,
} from 'react-native'

let index = 0;

export default class RN03NativeCode extends Component<Props> {
    static navigationOptions = () => ({
        title: "03RN与原生代码交互"
    })

    componentWillMount() {
        DeviceEventEmitter.addListener('event', (result) => {
            console.log("事件：")
            console.log(result)
            Alert.alert("事件", result.value)
        });
    }

    render() {
        console.log("render index=" + index++)
        return <View style={style.container}>
            <ScrollView>
                <Text style={style.text1}>呵呵呵呵</Text>

                <TouchableHighlight
                    style={style.btnBorder}
                    onPress={() => {
                        NativeModules.RNBridge.toast("哈哈哈哈1");
                    }}>
                    <Text style={style.text1}>Toast1</Text>
                </TouchableHighlight>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        NativeModules.RNBridge.toast("哈哈哈哈2");
                    }}>
                    <Text style={style.text1}>Toast2</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        Alert.alert("getAge", "内容：" + NativeModules.RNBridge.getAge("chen"))
                    }}>
                    <Text style={style.text1}>这样不行的</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        NativeModules.RNBridge.getAddress("chen")
                            .then(result => {
                                Alert.alert("地址", "内容：" + result)
                            })
                            .catch(error => {
                                Alert.alert("地址", "异常：" + result)
                            })
                    }}>
                    <Text style={style.text1}>使用promise取返回值</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {
                        NativeModules.RNBridge.eventTest("chen");
                    }}>
                    <Text style={style.text1}>通过事件接收返回数据</Text>
                </TouchableOpacity>
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
        fontSize: 24,
        textAlign: 'center',
    },
    btnBorder: {
        margin: 5,
        backgroundColor: "#99aa77"
    }
})