#include <jni.h>
#include "Network.h" 

extern "C" {
    JNIEXPORT jint JNICALL
    Java_com_fearth_gdk_FearthGdk_add(JNIEnv *env, jobject /* this */, jint a, jint b) {
        return fearth::Network::add(a, b);
    }

    JNIEXPORT jint JNICALL
    Java_com_fearth_gdk_FearthGdk_sub(JNIEnv *env, jobject /* this */, jint a, jint b) {
        return fearth::Network::sub(a, b);
    }
}
