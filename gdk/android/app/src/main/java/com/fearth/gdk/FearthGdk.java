package com.fearth.gdk;

public class FearthGdk {
    // Load the native library
    static {
        System.loadLibrary("fearth_gdk_android");
    }

    // Declare native methods
    public static native int add(int a, int b);
    public static native int sub(int a, int b);
    public static native int test(int number);

    public static int one(int number)
    {
        return number + 1;
    }
}
