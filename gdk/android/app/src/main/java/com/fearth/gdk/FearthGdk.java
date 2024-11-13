package com.fearth.gdk;

import com.fasterxml.jackson.databind.ObjectMapper;
import android.util.Log;

import com.fearth.gdk.data.GdkConfigData;
import com.fearth.gdk.data.LoginRequest;
import com.fearth.gdk.data.LoginResponse;
import com.fearth.gdk.defines.ErrorCode;
import com.fearth.gdk.utils.JsonHelper;

public class FearthGdk {
    static {
        System.loadLibrary("fearth_gdk");
    }

    public interface InitializeCallback { void invoke(boolean success); }
    public interface LoginCallback { void invoke(LoginResponse response); }
    public interface LoginCallbackWithJson { void invoke(String json); }

    private static FearthGdk instance;
    private GdkConfigData config;
    private boolean initialized = false;
    private final ObjectMapper mapper = new ObjectMapper();

    private native String nativeGenerateToken(String username, String password);

    private FearthGdk() {}

    public static synchronized FearthGdk getInstance() {
        if (instance == null) {
            instance = new FearthGdk();
        }
        return instance;
    }

    public void initialize(GdkConfigData config, InitializeCallback callback) {
        if (config == null) {
            if (callback != null) {
                callback.invoke(false);
            }
            return;
        }
        Log.d("Gdk", "<initialize> gameKey = " + config.gameKey);
        if (this.initialized) {
            if (callback != null) callback.invoke(false);
            return;
        }
        this.config = config;
        this.initialized = true;
        if (callback != null) callback.invoke(true);
    }

    public void initializeWithJson(String configJson, InitializeCallback callback) {
        GdkConfigData config = JsonHelper.fromJson(configJson, GdkConfigData.class);
        this.initialize(config, callback);
    }

    public void login(LoginRequest request, LoginCallback callback) {
        if (request == null) {
            if (callback != null) {
                callback.invoke(LoginResponse.error(ErrorCode.INVALID_INPUT_DATA));
            }
            return;
        }
        Log.d("Gdk", "<login> username = " + request.username + ", password = " + request.password);
        String token = nativeGenerateToken(request.username, request.password);
        if (callback != null) {
            LoginResponse response = new LoginResponse();
            response.success = true;
            response.errorCode = 0;
            response.token = token;
            response.userId = "__1939";
            callback.invoke(response);
        }
    }

    public void loginWithJson(String requestJson, LoginCallbackWithJson callback) {
        LoginRequest request = JsonHelper.fromJson(requestJson, LoginRequest.class);
        login(request, response -> {
            if (callback != null) {
                callback.invoke(JsonHelper.toJson(response));
            }
        });
    }
}
