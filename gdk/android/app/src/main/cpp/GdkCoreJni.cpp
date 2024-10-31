#include <jni.h>
#include "GdkCore.h"

extern "C" {
    JNIEXPORT jint JNICALL
    Java_com_fearth_gdk_FearthGdk_test(JNIEnv *env, jobject /* this */, jint number) {
        return fearth::GdkCore::test(number);
    }
}
