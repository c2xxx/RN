package com.firstrn.rn;

import android.util.Log;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.UiThreadUtil;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.firstrn.utils.ToastUtil;

public class RNBridge extends ReactContextBaseJavaModule {
    public RNBridge(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "RNBridge";
    }

    @ReactMethod
    public void toast(final String msg) {
        Log.d("Logger_RNBridge", Thread.currentThread().getName() + " id=" + Thread.currentThread().getId());
        UiThreadUtil.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                ToastUtil.show(msg);
            }
        });
    }

    /**
     * 这样直接返回无效，因为调用是异步进行的，需要用回调函数或发送事件
     *
     * @param name
     * @return
     */
    @ReactMethod
    public int getAge(String name) {
        if (name == null) {
            return 88;
        }
        if (name.startsWith("chen")) {
            return 28;
        }
        return 22;
    }

    @ReactMethod
    public void getAddress(String name, Promise promise) {
        if (name == null) {
            promise.reject("-1", "未知地区");
            return;
        }
        if (name.startsWith("chen")) {
            promise.resolve("福建");
        } else {
            promise.resolve("广东");
        }
    }

    @ReactMethod
    public void getMap(String name, Promise promise) {
        WritableMap map = Arguments.createMap();
        map.putString("name", "chen");
        map.putInt("age", 33);
        map.putString("address", "福建");
        promise.resolve(promise);
    }

    @ReactMethod
    public void eventTest(String name) {
        String event = "收到来自“" + name + "”的访问";
        sendEvent(event);
    }

    private void sendEvent(String event) {
        WritableMap map = Arguments.createMap();
        map.putString("value", event);
        ReactContext context = getReactApplicationContext();
        sendTransMisson(context, "event", map);
    }

    public void sendTransMisson(ReactContext reactContext, String event, WritableMap map) {
        reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(event, map);
    }

}
