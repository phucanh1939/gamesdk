package com.nes.gamesdk;

public class NinetyEightSdk {
    // Load the native library
    static {
        System.loadLibrary("nes_android"); // Make sure this matches the name of your shared library
    }

    // Declare native methods
    public native int add(int a, int b);
    public native int sub(int a, int b);
    public native int test(int number);
}
