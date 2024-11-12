package com.fearth.gdk;

public class FearthGdk {
    static {
        System.loadLibrary("fearth_gdk");
    }

    public interface InitializeCallback {
        void invoke(boolean success);
    }

    public interface LoginCallback {
        void invoke(int errorCode);
    }

    private static FearthGdk instance;

    private InitializeCallback initializeCallback;
    private LoginCallback loginCallback;

    public native boolean nativeInitialize(String data);
    public native void nativeLogin(String data);

    private FearthGdk() {}

    public static synchronized FearthGdk getInstance() {
        if (instance == null) {
            instance = new FearthGdk();
        }
        return instance;
    }

    public void initialize(String data, InitializeCallback callback) {
        this.initializeCallback = callback;
        nativeInitialize(data);
    }

    public void login(String data, LoginCallback callback) {
        this.loginCallback = callback;
        nativeLogin(data);
    }

    private void onNativeLoginCompleted(int errorCode) {
        if (this.loginCallback != null) {
            this.loginCallback.invoke(errorCode);
            this.loginCallback = null;
        }
    }

    private void onNativeInitializeCompleted(boolean success) {
        if (this.initializeCallback != null) {
            this.initializeCallback.invoke(success);
            this.initializeCallback = null;
        }
    }


}
