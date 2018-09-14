import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from "react-native"
import ToastUtil from "../utils/ToastUtil";

export default class RN12ListView extends Component<Props> {
    //生成id的方法
    _KeyExtractor = (item, index) => `key${index}`;

    constructor(props) {
        super(props)
        this.state = ({
            duringInitData: true,
            threshold: 0,
            list: [],
        });
        this._onRefresh = this._onRefresh.bind(this);
    }


    static navigationOptions = {
        title: "RN12列表数据"
    }


    doClick() {

    }

    componentWillMount() {
        this.setState({
            duringInitData: true,
        });
        this._onRefresh();
    }

    _onRefresh() {
        console.log("下拉刷新")
        setTimeout(() => {
            this.endRefresh();
        }, 500)
    }

    endRefresh() {
        let imageA = 'https://facebook.github.io/react-native/docs/assets/favicon.png';
        let imageB = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534227246201&di=b8a1c5f630b32be0c0802f53045ae82e&imgtype=0&src=http%3A%2F%2Fimg.tupianzj.com%2Fuploads%2Fallimg%2F160609%2F9-160609112234.jpg";

        for (let i = 0; i < 20; i++) {
            this.state.list.push({
                id: i,
                name: "陈" + i,
                age: 3 + i,
                poster: (i % 2 == 0) ? imageA : imageB
            });
        }
        console.log("刷新结束")
        this.setState({
            duringInitData: false,
        });
    }

    render() {
        if (this.state.duringInitData) {
            return this.renderLoading();
        } else {
            return this.renderContent();
        }
    }

    renderLoading() {
        return <View style={style.container}>
            <Text style={style.btnText}>正在加载数据...</Text>
        </View>
    }


    headerOrFooterComponent(x) {
        let i = x === 1 ? '我是头部' : '我是尾部------';
        return (
            this.state.list.length !== 0 ?
                <View style={{alignItems: 'center', backgroundColor: 'green'}}>
                    <Text>{i}</Text>
                </View> : null
        )
    }

    renderContent() {
        return <View>
            <Text style={style.btnText}>数据量：{this.state.list.length}</Text>
            <FlatList
                data={this.state.list}
                renderItem={this.renderMV}
                keyExtractor={(item, index) => '' + index}//这一步可以不用，不过会警告
                refreshing={false}
                ListFooterComponent={() => this.headerOrFooterComponent(2)}
                ListHeaderComponent={() => this.headerOrFooterComponent(1)}
                onEndReachedThreshold={1}
                onEndReached={() => {
                    // this._onRefresh()
                    ToastUtil.show("滚动到底部")
                }}
                onRefresh={() => {
                    this._onRefresh()
                    ToastUtil.show("刷新开始")
                }}/>
        </View>
    }

    renderMV({item}) {
        console.log(item)
        return <View style={style.item_container}>
            <Image style={style.item_img} source={{uri: item.poster}}></Image>
            <View>
                <Text>name:{item.name}</Text>
                <Text>age:{item.age}</Text>
            </View>
        </View>
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    item_container: {
        flex: 1,
        margin: 5,
        padding: 5,
        flexDirection: "row",
        backgroundColor: "#aacc66"
    },
    item_img: {
        height: 50,
        width: 50,
        marginRight: 5,
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