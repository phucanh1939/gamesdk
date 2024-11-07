package com.fearth.gdk;

import com.cocos.lib.JsbBridgeWrapper;

public class FearthGdkWrapper {
    private static final String GDK_EVENT_LOGIN_COMPLETED = "GDK_EVENT_LOGIN_COMPLETED";

    public static boolean initialize(String data)  {
        return FearthGdk.getInstance().initialize(data);
    }

    public static void login(String data) {
        FearthGdk.getInstance().login(data, errorCode -> {
            JsbBridgeWrapper.getInstance().dispatchEventToScript(FearthGdkWrapper.GDK_EVENT_LOGIN_COMPLETED, String.valueOf(errorCode));
        });
    }
}
