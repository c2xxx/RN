import BasePage from "./RN00BasePage"
import React from "react";
import {PermissionsAndroid} from 'react-native'

export default class RN27Permission extends BasePage {

    static navigationOptions = () => ({
        title: "27权限管理"
    })


    initButtons() {
        this.buttonMap.检查相机权限 = this.checkCameraPermission.bind(this);
        this.buttonMap.申请相机权限 = this.checkRequestCameraPermission.bind(this);
        this.buttonMap.申请多个权限 = this.requestMultiPermission.bind(this);
    }

    checkCameraPermission() {
        let cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;
        PermissionsAndroid.check(cameraPermission)
            .then(hasPermission => {
                this.println("是否有权限：" + hasPermission)
            })
    }

    checkRequestCameraPermission() {
        let cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;
        PermissionsAndroid.check(cameraPermission)
            .then(hasPermission => {
                if (hasPermission) {
                    this.println("有相机权限")
                } else {
                    this.requestCameraPermission().then()
                }
            })
    }

    async requestCameraPermission() {
        try {
            const granted = await
                PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        'title': 'Cool Photo App Camera Permission',
                        'message': '您需要打开摄像机权限。。。。\n这个提示出现在第一次被拒绝之后'
                    }
                )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                this.println("You can use the camera")
            } else {
                this.println("Camera permission denied")
            }
        } catch (err) {
            console.warn(err)
        }
    }

    requestMultiPermission() {
        let permissions = [
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            PermissionsAndroid.PERMISSIONS.CAMERA
        ]
        PermissionsAndroid.requestMultiple(permissions)
            .then(result => {
                console.log(result)
                this.println(JSON.stringify(result))
            })
    }
}