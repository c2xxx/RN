import {PermissionsAndroid, Platform} from "react-native";
import Toast from 'react-native-root-toast'

export default class AndroidPermissionHelper {

    /**
     * 是否Android系统
     * @returns {boolean}
     */
    static isAndroid() {
        return Platform.OS == 'android'
    }

    /**
     * 检查权限
     * @param permission 权限
     * @param name 对应中文名
     * */
    static check(permission, name) {
        PermissionsAndroid.check(permission)
            .then(granted1 => {
                if (granted1 === PermissionsAndroid.RESULTS.GRANTED) {
                    //已经有权限
                    resolve(true)
                } else {
                    resolve(false)
                }
            })
    }

    /**
     * 申请权限
     * @param permission 权限字符串
     * @param name 权限名称
     * @param message 如果第一次被拒绝，后续申请提示
     */
    static request(permission, name, message) {
        name = name || this.getPermissionName(permission)
        PermissionsAndroid
            .request(
                permission,
                {
                    'title': '权限管理',
                    'message': message || `应用需要您的${name}权限`
                    //'\n这个提示出现在第一次被拒绝之后'
                }
            )
            .then(granted => {
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    //得到申请的权限
                    resolve(true)
                } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
                    //拒绝并且不再寻问
                    reject(-2)
                    Toast.show(`无法获取${name}权限，应用可能无法正常运行！`)
                } else {
                    //没有得到申请的权限
                    reject(-1)
                }
            })
        //返回后这么处理：
        // .then(() => {
        //
        // })
        // .catch(errorCode => {
        //
        // })
    }

    static getPermissionName(permission) {
        switch (permission) {
            case PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE:
            case PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE:
                return "读写SD卡"
            case PermissionsAndroid.PERMISSIONS.CAMERA:
                return "相机"
            case PermissionsAndroid.PERMISSIONS.READ_CONTACTS:
            case PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS:
                return "读取联系人"
            case PermissionsAndroid.PERMISSIONS.RECORD_AUDIO:
                return "麦克风"
            case PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION:
            case PermissionsAndroid.PERMISSIONS.MSGESTURE_FLAG_INERTIA:
                return "定位"
            default:
                return permission
        }
    }


    /**
     * 申请权限
     * @param permissionArray
     */
    static request(permissionArray) {
        PermissionsAndroid
            .requestMultiple(permissionArray)
            .then({})
    }
}