import React, {Component} from 'react';
import {Animated, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native"

// noinspection JSAnnotator
export default class RN25Animate extends Component<Props> {

    static navigationOptions = {
        title: "RN25动画"
    }

    constructor(props) {
        super(props)
        this.state = ({
            spinValue: new Animated.Value(0),
            fadeAnimate: new Animated.Value(1),
        });
    }

    fade() {
        Animated.timing(                            // 随时间变化而执行的动画类型
            this.state.fadeAnimate,                      // 动画中的变量值
            {
                toValue: 0.1,                             // 透明度最终变为1，即完全不透明
                duration: 2000,
            }
        ).start();
        // console.log(xx)
    }

    move() {
    }


    render() {
        let imgLocal = "../../res/img/water.jpg";
        let imgUri2 = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534227246201&di=b8a1c5f630b32be0c0802f53045ae82e&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160609%2F9-160609112234.jpg";

        return <ScrollView>
            <TouchableOpacity
                style={style.btn}
                onPress={() => {

                    Animated.timing(                            // 随时间变化而执行的动画类型
                        this.state.fadeAnimate,                      // 动画中的变量值
                        {
                            toValue: 0.1,                             // 透明度最终变为1，即完全不透明
                            duration: 2000,
                        }
                    ).stop();
                }}>
                <Text style={style.btnText}>复位</Text>
            </TouchableOpacity>
            <View style={style.btn_group}>
                <TouchableOpacity
                    style={style.btn}
                    onPress={() => {
                        this.fade()
                    }}>
                    <Text style={style.btnText}>渐变</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btn}
                    onPress={() => {
                        this.move()
                    }}>
                    <Text style={style.btnText}>移动</Text>
                </TouchableOpacity>
            </View>


            {/*<View style={{alignItems: 'center', marginTop: 10, height: 160}}>*/}
            {/*<Image*/}
            {/*style={{width: 160, height: 160, borderRadius: 80}}*/}
            {/*source={{uri: imgUri2}}*/}
            {/*/>*/}
            {/*</View>*/}

            <View style={{alignItems: 'center', marginTop: 10, height: 160}}>
                <Animated.Image
                    style={{
                        width: 160,
                        height: 160,
                        borderRadius: 80,
                        opacity: this.state.fadeAnimate,
                    }}
                    source={{uri: imgUri2}}
                />
            </View>
        </ScrollView>
    }
}
const style = StyleSheet.create({
    btn_group: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
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
})