#include <jni.h>
#include "Math.h" 

extern "C" {
    JNIEXPORT jint JNICALL
    Java_com_nes_gamesdk_NinetyEightSdk_add(JNIEnv *env, jobject /* this */, jint a, jint b) {
        return nes::Math::add(a, b); // Call the add function from Math class
    }

    JNIEXPORT jint JNICALL
    Java_com_nes_gamesdk_NinetyEightSdk_sub(JNIEnv *env, jobject /* this */, jint a, jint b) {
        return nes::Math::sub(a, b); // Call the sub function from Math class
    }
}
