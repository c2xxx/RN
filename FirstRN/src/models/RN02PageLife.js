import React, {Component} from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from "react-native"

export default class RN02PageLife extends Component<Props> {

    static navigationOptions = {
        title: "02RN的生命周期"
    }

    componentWillMount() {
        console.log("componentWillMount")
    }

    componentDidMount() {
        console.log("componentDidMount")
        this.startListener();
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    stopListener() {
        this.eventDidFocus.remove();
        this.eventDidBlur.remove();
    }

    startListener() {
        this.eventDidFocus = this.props.navigation.addListener(
            'didFocus',
            (payload) => {
                console.log("didFocus:")
                console.log(payload)
            }
        );
        this.eventDidBlur = this.props.navigation.addListener(
            'didBlur',
            (payload) => {
                console.log("didBlur:")
                console.log(payload)
            }
        );
    }

    render() {
        console.log("render")
        return <View style={style.container}>
            <Text style={style.text1}>按钮的不同写法</Text>
            <Button title={"跳界面,触发didFocus、didBlur"} onPress={() => {
                this.props.navigation.navigate("RN01SimplePage");
            }}/>

            <TouchableHighlight style={style.btnBg}
                                onPress={() => {
                                    this.props.navigation.navigate("RN01SimplePage");
                                }}>
                <Text style={style.btn1}>跳界面,触发didFocus、didBlur</Text>
            </TouchableHighlight>

            <TouchableOpacity style={style.btnBg}
                              onPress={() => {
                                  this.props.navigation.navigate("RN01SimplePage");
                              }}>
                <Text style={style.btn1}>跳界面,触发didFocus、didBlur</Text>
            </TouchableOpacity>

            <TouchableNativeFeedback style={style.btnBg}
                                     onPress={() => {
                                         this.props.navigation.navigate("RN01SimplePage");
                                     }}>
                <Text style={style.btn1}>跳界面,触发didFocus、didBlur</Text>
            </TouchableNativeFeedback>
        </View>
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    text1: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 30,
    },
    btn1: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    btnBg: {
        marginTop: 10,
        backgroundColor: "#aacc66"
    },
})