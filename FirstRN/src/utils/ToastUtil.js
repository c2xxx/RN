import Toast from "react-native-root-toast";

/**
 */

export default class ToastUtil extends Object{
    static toast = null;

    static show(message, time = Toast.durations.SHORT){
        if (this.toast){
            Toast.hide(this.toast);
        }
        this.toast = Toast.show(message,{
            duration: time,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
        });
    }

}