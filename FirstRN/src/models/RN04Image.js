import React, {Component} from 'react'
import {Image, ScrollView, StyleSheet, View,} from 'react-native'


export default class RN04Image extends Component<Props> {
    static navigationOptions = () => ({
        title: "04图片展示"
    })
    super;

    render() {
        let imgUri1 = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
        let imgUri2 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534227246201&di=b8a1c5f630b32be0c0802f53045ae82e&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160609%2F9-160609112234.jpg";
        let imgLocal = "../../res/img/water.jpg";
        return <View style={style.container}>
            <ScrollView>
                <Image
                    style={{width: 150, height: 150}}
                    source={{uri: imgUri1}}
                />
                <Image
                    style={{width: 150, height: 150}}
                    source={{uri: imgUri2}}
                />
                <Image
                    style={{width: 150, height: 150}}
                    source={require(imgLocal)}
                />
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