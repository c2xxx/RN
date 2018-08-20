import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity} from "react-native"

export default class RN17MultiClick extends Component<Props> {

    constructor(props) {
        super(props)

        this.state = {
            waiting: false,//防多次点击
        }
    }

    static navigationOptions = {
        title: "RN17防止多次点击"
    }


    doClick() {
        console.log("这里写实际逻辑")
    }

    _repeatClick() {
        this.setState({waiting: true});
        this.doClick();//这里写你原本要交互的方法
        setTimeout(() => {
            this.setState({waiting: false})
        }, 2000);//设置的时间间隔由你决定
    }

    render() {
        return <ScrollView>
            <TouchableOpacity
                style={this.state.waiting?styles.btnDisable:styles.btn}
                activeOpacity={0.65}
                disabled={this.state.waiting}
                onPress={() => this._repeatClick()}>
                <Text style={styles.btnText}>{'提交'} </Text>
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
    btnDisable: {
        margin: 10,
        backgroundColor: "#ddd"
    },
    hello: {
        fontSize: 20,
        margin: 10,
        textAlign: 'left'
    },
})