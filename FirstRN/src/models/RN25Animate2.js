import React, {Component} from 'react';
import {
    Animated, ScrollView, StyleSheet, Text, TouchableOpacity,
    Easing,     //引入Easing渐变函数
    View
} from "react-native"

// noinspection JSAnnotator
export default class RN25Animate2 extends Component<Props> {

    static navigationOptions = {
        title: "RN25Animate2"
    }

    constructor(props) {
        super(props)
        //使用Animated.Value设定初始化值（缩放度，角度等等）
        this.state = {
            bounceValue: new Animated.Value(1), //你可以改变这个值看
            rotateValue: new Animated.Value(0),//旋转角度的初始值
        };
    }

    startAnimation() {
        this.state.bounceValue.setValue(1);//和上面初始值一样，所以
//弹动没有变化
        this.state.rotateValue.setValue(0);
        Animated.parallel([
            //通过Animated.spring等函数设定动画参数
            //可选的基本动画类型: spring, decay, timing
            Animated.spring(this.state.bounceValue, {
                toValue: 1,      //变化目标值，也没有变化
                friction: 20,    //friction 摩擦系数，默认40
            }),
            Animated.timing(this.state.rotateValue, {
                toValue: 1,  //角度从0变1
                duration: 15000,  //从0到1的时间
                easing: Easing.out(Easing.linear),//线性变化，匀速旋转
            }),
            //调用start启动动画,start可以回调一个函数,从而实现动画循环
        ]).start(() => this.startAnimation());
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
                        this.startAnimation()
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
                {/*//插入一张图片*/}
                <Animated.Image source={{uri: imgUri2}}
                                style={{
                                    width: 150,
                                    height: 150, borderRadius: 75, //图片变园
                                    transform: [
                                        //将初始化值绑定到动画目标的style属性上
                                        {scale: this.state.bounceValue},
                                        //使用interpolate插值函数,实现了从数值单位的映
//射转换,上面角度从0到1，这里把它变成0-360的变化
                                        {
                                            rotateZ: this.state.rotateValue.interpolate({
                                                inputRange: [0, 1],
                                                outputRange: ['0deg', '360deg'],
                                            })
                                        },
                                    ]
                                }}>
                </Animated.Image>

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