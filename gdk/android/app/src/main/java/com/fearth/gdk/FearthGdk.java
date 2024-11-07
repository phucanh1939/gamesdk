package com.fearth.gdk;

public class FearthGdk {

    static {
        System.loadLibrary("fearth_gdk"); // Load the native library
    }

    // Declare the native methods
    public native boolean nativeInitialize(String data);
    public native void nativeLogin(String data);

    // Store the callback
    private LoginCallback loginCallback;

    // Initialize method
    public boolean initialize(String data) {
        return nativeInitialize(data);
    }

    // Login method with callback
    public void login(String data, LoginCallback callback) {
        this.loginCallback = callback;
        nativeLogin(data);
    }

    // This method will be called from C++ to signal login completion
    private void onLoginCompleted(int errorCode) {
        if (this.loginCallback != null) {
            this.loginCallback.onLoginComplete(errorCode); // Call the callback
            this.loginCallback = null; // Reset the callback after use
        }
    }

    // Nested interface for login callback
    public interface LoginCallback {
        void onLoginComplete(int errorCode);
    }
}
