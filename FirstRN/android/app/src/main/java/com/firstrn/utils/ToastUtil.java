package com.firstrn.utils;

import android.content.Context;
import android.widget.Toast;

import com.firstrn.MainApplication;

public class ToastUtil {
    private static Toast toast;

    public static void show(String msg) {
        show(MainApplication.getContext(), msg, Toast.LENGTH_SHORT);
    }

    public static void show(Context context, String msg, int showTime) {
        if (toast == null) {
            toast = Toast.makeText(context, msg, showTime);
        } else {
            toast.setText(msg);
        }
        toast.show();
    }
}
