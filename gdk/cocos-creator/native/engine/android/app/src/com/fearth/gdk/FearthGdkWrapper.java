package com.fearth.gdk;

import com.cocos.lib.JsbBridgeWrapper;
import com.fearth.gdk.data.GdkConfigData;
import com.fearth.gdk.data.LoginRequest;
import com.fearth.gdk.utils.JsonHelper;

public class FearthGdkWrapper {
    private static final String GDK_EVENT_INITIALIZE_COMPLETED = "GDK_EVENT_INITIALIZE_COMPLETED";
    private static final String GDK_EVENT_LOGIN_COMPLETED = "GDK_EVENT_LOGIN_COMPLETED";

    public static void initialize(String configJson) {
        GdkConfigData config = JsonHelper.fromJson(configJson, GdkConfigData.class);
        FearthGdk.getInstance().initialize(config, success -> {
            JsbBridgeWrapper.getInstance().dispatchEventToScript(FearthGdkWrapper.GDK_EVENT_INITIALIZE_COMPLETED, String.valueOf(success));
        });
    }

    public static void login(String requestJson) {
        LoginRequest request = JsonHelper.fromJson(requestJson, LoginRequest.class);

        FearthGdk.getInstance().login(request, response -> {
            String json = JsonHelper.toJson(response);
            JsbBridgeWrapper.getInstance().dispatchEventToScript(FearthGdkWrapper.GDK_EVENT_LOGIN_COMPLETED, json);
        });
    }
}
