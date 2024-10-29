#include <jni.h>
#include "SdkCore.h"  // Include your NinetyEightSDK class header

extern "C" {
    JNIEXPORT jint JNICALL
    Java_com_nes_gamesdk_NinetyEightSdk_test(JNIEnv *env, jobject /* this */, jint number) {
        // Create an instance of NinetyEightSDK and call the test function
        return nes::SdkCore::test(number);
    }
}
