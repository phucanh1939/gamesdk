package com.fearth.gdk;

import com.cocos.lib.JsbBridgeWrapper;

public class FearthGdkWrapper {
    private static final String GDK_EVENT_INITIALIZE_COMPLETED = "GDK_EVENT_INITIALIZE_COMPLETED";
    private static final String GDK_EVENT_LOGIN_COMPLETED = "GDK_EVENT_LOGIN_COMPLETED";

    public static void initialize(String data)  {
        FearthGdk.getInstance().initialize(data, success -> {
            JsbBridgeWrapper.getInstance().dispatchEventToScript(FearthGdkWrapper.GDK_EVENT_INITIALIZE_COMPLETED, String.valueOf(success));
        });
    }

    public static void login(String data) {
        FearthGdk.getInstance().login(data, errorCode -> {
            JsbBridgeWrapper.getInstance().dispatchEventToScript(FearthGdkWrapper.GDK_EVENT_LOGIN_COMPLETED, String.valueOf(errorCode));
        });
    }
}
