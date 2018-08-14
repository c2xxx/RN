import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'


export default class RN05Video extends Component<Props> {
    static navigationOptions = () => ({
        title: "05RN播放视频"
    })
    super;

    render() {
        return <View style={style.container}>
            <ScrollView>
                <TouchableOpacity
                    style={style.btnBorder}
                    onPress={() => {

                    }}>
                    <Text style={style.text1}>播放</Text>
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
        fontSize: 30,
        textAlign: 'center',
    },
    btnBorder: {
        margin: 10,
        backgroundColor: "#99aa77"
    }
})