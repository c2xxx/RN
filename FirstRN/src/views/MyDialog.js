import React, {Component} from "react"
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export default class MyDialog extends Component {

    submit() {
        Alert.alert("", "click");
    }

    cancel() {
        Alert.alert("", "cancel");
    }

    render() {
        return <View style={styles.container}>
            <Text>这是自定义控件内文本</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    this.cancel()
                }}>
                <Text>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                    this.submit()
                }}>
                <Text>确认</Text>
            </TouchableOpacity>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10,
        backgroundColor: "#33BB55"
    },
    btn: {
        margin: 10,
        padding: 10,
        backgroundColor: "#aacc55"
    }
})