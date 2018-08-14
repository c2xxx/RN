import React, {Component} from 'react'
import {Alert, BackHandler, Platform, WebView} from 'react-native'

export default class RN07WebView extends Component<Props> {
    static navigationOptions = () => ({
        title: "07WebView"
    })

    componentWillMount() {
        if (Platform.OS === 'android') {
            this.listener = BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            this.listener.remove('hardwareBackPress');
        }
    }


    render() {
        return <WebView
            source={{uri: 'https://www.baidu.com'}}
            style={{marginTop: 5}}
        />
    }

    onBackAndroid() {
        console.log("按下返回键")
        if (true) {
            Alert.alert("提示", "按下返回键")
            return true;//消费返回键
        } else {
            return false;//默认行为
        }
    }
}