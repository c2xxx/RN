import React, {Component} from 'react'
import {ProgressBarAndroid, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native'
import Video from 'react-native-video'


export default class RN05Video extends Component<Props> {

    constructor(props) {
        super(props);

        this.state = {
            state: 1.0,
            isPlay: false,
            playState: 1,
            progress: 0.0,
            progressTxt: "00:00/00:00",
        };
        this.loadStart = this.loadStart.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.onProgress = this.onProgress.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.videoError = this.videoError.bind(this);

    }

    static navigationOptions = () => ({
        title: "05RN播放视频"
    })

    loadStart() {
        console.log('视频开始加载' + this.state.isPlay);
    }

    setDuration() {
        console.log('视频加载完成，即将播放');
    }


    onEnd() {
        console.log('视频播放完成');

    }

    videoError() {
        console.log('视频播放出错');
    }

    onProgress(data) {
        console.log('onProgress');
        // console.log(data);
        // console.log(data.currentTime);
        // console.log(data.playableDuration);
        // console.log(data.seekableDuration);
        this.setState({
            progressTxt: this.formatTime(data.currentTime) + "/" + this.formatTime(data.seekableDuration),
            progress: (data.currentTime / data.seekableDuration),
        })
    }

    formatTime(time) {
        let minute = Math.floor(time / 60);
        let second = Math.floor(time % 60);
        if (minute < 10) {
            minute = "0" + minute;
        }
        if (second < 10) {
            second = "0" + second;
        }
        return `${minute}:${second}`
    }

    render() {
        let localVideo = '../../res/video/xidada.mp4';
        let imgLocal = "../../res/img/water.jpg";
        return <ScrollView>
            <TouchableOpacity
                style={style.btnBorder}
                onPress={() => {

                    // // 稍后触发全屏
                    // this.player.presentFullscreenPlayer()

                    this.setState({
                        isPlay: !this.state.isPlay,
                    })
                    // console.log("是否播放：" + this.state.isPlay)

                    //this.refs.player.seek(20);//播放前进到第20秒
                    //this.refs.player.presentFullscreenPlayer();//iOS调用系统的播放器
                }}>
                <Text style={style.text1}>{this.state.isPlay ? "播放" : "暂停"}</Text>
            </TouchableOpacity>
            <Video
                source={require(localVideo)} // 视频的URL地址，或者本地地址，都可以.
                ref={(ref) => {
                    this.player = ref
                }}
                rate={this.state.state}                   // 控制暂停/播放，0 代表暂停paused, 1代表播放normal.
                volume={1.0}                 // 声音的放声音的放大倍数大倍数，0 代表没有声音，就是静音muted, 1 代表正常音量 normal，更大的数字表示放大的倍数
                muted={false}                // true代表静音，默认为false.
                paused={this.state.isPlay}               // true代表暂停，默认为false
                resizeMode="contain"           // 视频的自适应伸缩铺放行为，contain、stretch、cover
                repeat={false}                // 是否重复播放
                playInBackground={false}     // 当app转到后台运行的时候，播放是否暂停
                playWhenInactive={false}     // [iOS] Video continues to play when control or notification center are shown. 仅适用于IOS
                onLoadStart={this.loadStart} // 当视频开始加载时的回调函数
                onLoad={this.setDuration}    // 当视频加载完毕时的回调函数
                onProgress={this.onProgress}    //  进度控制，每250ms调用一次，以获取视频播放的进度
                onEnd={this.onEnd}           // 当视频播放完毕后的回调函数
                onError={this.videoError}    // 当视频不能加载，或出错后的回调函数
                style={style.backgroundVideo}
            />

            <Text>播放进度：</Text>
            <Text>{this.state.progressTxt}</Text>
            <ProgressBarAndroid
                color="green"
                styleAttr="Horizontal"
                progress={this.state.progress}
                indeterminate={false}
                style={{marginTop: 10}}
            />
            <Text>播放速度：</Text>
            <View style={style.borderHor}>
                <TouchableOpacity
                    style={style.btnState}
                    onPress={() => {
                        this.setState({
                            state: 0.5
                        });
                    }}>
                    <Text>0.5倍</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnState}
                    onPress={() => {
                        this.setState({
                            state: 1
                        });
                    }}>
                    <Text>1.0倍</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnState}
                    onPress={() => {
                        this.setState({
                            state: 1.5
                        });
                    }}>
                    <Text>1.5倍</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnState}
                    onPress={() => {
                        this.setState({
                            state: 2.5
                        });
                    }}>
                    <Text>2.5倍</Text>
                </TouchableOpacity>
            </View>

            <Text>时间设置：</Text>

            <View style={style.borderHor}>
                <TouchableOpacity
                    style={style.btnState}
                    onPress={() => {
                        this.player.seek(30);
                    }}>
                    <Text>30秒</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={style.btnState}
                    onPress={() => {
                        this.player.seek(60);
                    }}>
                    <Text>60秒</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#ddd"
    },
    borderHor: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
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
    },
    btnState: {
        margin: 2,
        padding: 10,
        backgroundColor: "#99aa77"
    },
    backgroundVideo: {
        margin: 10,
        height: 200,
    },
})