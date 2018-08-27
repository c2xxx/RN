import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    FlatList,
    TouchableOpacity,
    ScrollView,
    View
} from "react-native"

export default class RN21Chat extends Component<Props> {

    static navigationOptions = {
        title: "RN00"
    }

    constructor(props) {
        super(props)
        this.state = {
            chats: []
        }
        this.initData();
    }

    initData() {
        let headerImgA = "http://uploads.5068.com/allimg/1801/82-1P115193S3-50.jpg"
        let headerImgB = "http://uploads.5068.com/allimg/1801/82-1P115193S3-50.jpg"
        let chats = [{
            speaker: "A",
            content: "你好！",
            headImg: headerImgB,
        }, {
            speaker: "咪咕",
            content: "你好啊！",
            headImg: headerImgA,
        }, {
            speaker: "A",
            content: "帮我打开卧室的灯！",
            headImg: headerImgB,
        }, {
            speaker: "咪咕",
            content: "抱歉，我不知道卧室在哪里！",
            headImg: headerImgA,
        }, {
            speaker: "A",
            content: "你笨死了！",
            headImg: headerImgB,
        }, {
            speaker: "咪咕",
            content: "嗯嗯，是的！",
            headImg: headerImgA,
        }]
        this.setState({
            chats: chats
        })
    }

    doClick() {

    }

    render() {
        return (
            <ScrollView>
                <Text>对话记录</Text>
                <FlatList renderItem={this.renderChat.bind(this)}
                          data={this.state.chats}
                          keyExtractor={(item, index) => {
                              return `key${index}`
                          }}
                          numColumns={1}/>
            </ScrollView>
        )

    }

    renderChat({item}) {
        return (
            <View>
                <Text>{item.content}</Text>
            </View>
        )
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
})