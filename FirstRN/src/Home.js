import React, {Component} from 'react';
import {Button, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RN25Animate from "./models/RN25Animate";
import RN25Animate2 from "./models/RN25Animate2";

type Props = {};

export default class Home extends Component<Props> {


    static navigationOptions = {
        title: "首页",
    }

    menus = ['Home', 'RN00', 'RN00BasePage', 'RN00Menu', 'RN01SimplePage', 'RN02PageLife', 'RN03NativeCode',
        'RN04Image', 'RN05Video', 'RN06Http', 'RN07WebView', 'RN09ReWriteVIew', 'RN11SlideDownRefresh',
        'RN12ListView', 'RN13MyToolClass', 'RN14SingleInstance', 'RN15SubPage', 'RN16MyConfirmDialog',
        'RN17DoubleClick', 'RN18Model', 'RN19Icons', 'RN20Position', 'RN21Chat', 'Second', 'RN17DoubleClick'
        ,
        'RN18Model'
        ,
        'RN19IconsSimple'
        ,
        'RN19IOIcons'
        ,
        'RN20Position'
        ,
        'RN21Chat'
        ,
        'RN22GroupCell'
        ,
        'RN23Promise'
        ,
        'RN25Animate'
        ,
        'RN25Animate2'
        ,
        'RN26MySwiper'
        ,
        'Second'
    ]

    componentDidMount() {
        this.goPage();
    }

    goPage() {

        this.props.navigation.navigate('RN23Promise', {name: "chen"});
    }

    /**
     * 点击按钮
     */
    onBtnClick = () => {
        this.goPage();
    };

    render() {
        return (
            <View style={styles.container}>
                <Button style={styles.button}
                        title={"开始我的RN"}
                        onPress={this.onBtnClick}
                />
                {/*<TouchableOpacity>*/}
                {/*<View style={styles.menu_item_container}>*/}
                {/*<Text style={styles.menu_item_title}>01、基本实例</Text>*/}
                {/*<Text style={styles.menu_item_subtitle}>RN03XXXX</Text>*/}
                {/*</View>*/}
                {/*</TouchableOpacity>*/}
                <FlatList
                    renderItem={this.renderMenu.bind(this)}
                    data={this.menus}
                    keyExtractor={(item, index) => {
                        return `key${index}`
                    }}
                    numColumns={1}/>
            </View>
        );
    }

    gotoPage(pageName) {
        console.log("跳转页面：" + pageName)
        this.props.navigation.navigate(pageName, {name: "chen"});
    }

    renderMenu({item, index}) {
        return (
            <TouchableOpacity
                onPress={() => {
                    this.gotoPage(`${item}`)
                }}>
                <View style={styles.menu_item_container}>
                    <Text style={styles.menu_item_title}>{index < 9 && '0'}{index + 1}、{item}</Text>
                    <Text style={styles.menu_item_subtitle}>{item}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        backgroundColor: '#F5FCFF',
    },
    button: {
        textAlign: 'center',
        marginTop: 10,
        color: '#333333',
    },
    menu_item_container: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        margin: 5,
        padding: 5,
        backgroundColor: '#67B92F',
    },
    menu_item_title: {
        color: 'white',
        fontSize: 25

    },
    menu_item_subtitle: {
        color: 'white',
        marginLeft: 48,
        fontSize: 18
    },
});
