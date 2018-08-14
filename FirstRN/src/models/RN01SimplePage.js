import React from 'react'
import {Text} from 'react-native'


export default class RN01SimplePage extends React.Component {
    static navigationOptions = () => ({
        title: "01最简界面"
    })

    render() {
        return <Text>{`呵呵呵
        呵`}</Text>
    }
}