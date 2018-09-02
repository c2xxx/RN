import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, YellowBox,} from 'react-native'

/**
 * 首先，出现此错误提示的原因是源代码内有已被React舍弃的代码，但此并不影响程序运行。 在index.js 内写入以下代码可屏蔽此提示
 * */
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
YellowBox.ignoreWarnings(['Remote debugger is in a background tab which may cause apps to perform slowly']);

export default class RN00BasePage extends Component<Props> {

    constructor(props) {
        super(props)
        this.state = ({
            content: "内容"
        });
    }

    static navigationOptions = () => ({
        title: "00"
    })

    println(msg) {
        console.log(msg)
        //注意，这种写法只会显示最后一次setState，setState应该是异步执行的
        // this.setState({
        //     content: this.state.content + "\n" + msg
        // });
        this.setState((preState, props) => ({
            content: preState.content + "\n" + msg
        }));
    }

    clearScreen() {
        this.setState({
            content: ""
        });
    }

    // buttonList = ['Click']
    // buttonOnPress = [this.doClick.bind(this)]
    buttonMap = {}

    doClick() {
        this.println("结果" + JSON.stringify(this.buttonMap));
    }

    componentWillMount() {
        console.log(JSON.stringify(this.buttonMap))
        this.initButtons(this.buttonMap)
        console.log(JSON.stringify(this.buttonMap))
        //如果没有按钮则添加默认的click
        let hasEntry;
        for (let key in this.buttonMap) {
            hasEntry = true;
            break
        }
        if (!hasEntry) {
            this.buttonMap.click = this.doClick.bind(this)
        }
        this.buttonMap.清屏 = this.clearScreen.bind(this)
    }

    initButtons(buttonMap) {

    }

    render() {
        let buttons = [];
        for (let key in this.buttonMap) {
            if (typeof this.buttonMap[key] == "function") {
                buttons.push(
                    <TouchableOpacity
                        key={key}
                        style={style.btnBorder}
                        onPress={() => {
                            this.buttonMap[key]();
                        }}>
                        <Text style={style.text1}>{key}</Text>
                    </TouchableOpacity>
                )
            }
        }
        return <View style={style.container}>
            <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                    {buttons}
                </View>
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
        fontSize: 25,
        textAlign: 'center',
    },
    btnBorder: {
        marginHorizontal: 10,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#99aa77"
    }
})