#include <jni.h>
#include "GdkCore.h"

extern "C" {

    JNIEXPORT void JNICALL
    Java_com_fearth_gdk_FearthGdk_nativeInitialize(JNIEnv* env, jobject obj, jstring data)
    {
        const char* dataStr = env->GetStringUTFChars(data, nullptr);
        std::string strData(dataStr);
        fearth::GdkCore::getInstance().initialize(strData, (bool success) {
            jclass clazz = env->GetObjectClass(obj);
            jmethodID methodID = env->GetMethodID(clazz, "onNativeInitializeCompleted", "(Z)V");
            if (methodID != nullptr) {
                env->CallVoidMethod(obj, methodID, success);
            }
        });
        env->ReleaseStringUTFChars(data, dataStr);
    }

    JNIEXPORT void JNICALL
    Java_com_fearth_gdk_FearthGdk_nativeLogin(JNIEnv* env, jobject obj, jstring data)
    {
        const char* dataStr = env->GetStringUTFChars(data, nullptr);
        std::string strData(dataStr);
        fearth::GdkCore::getInstance().login(strData, [env, obj](int errorCode) {
            jclass clazz = env->GetObjectClass(obj);
            jmethodID methodID = env->GetMethodID(clazz, "onNativeLoginCompleted", "(I)V");
            if (methodID != nullptr) {
                env->CallVoidMethod(obj, methodID, errorCode);
            }
        });
        env->ReleaseStringUTFChars(data, dataStr);
    }

}
