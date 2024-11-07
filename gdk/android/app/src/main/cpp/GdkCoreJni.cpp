#include <jni.h>
#include "GdkCore.h"

extern "C" {

    // JNI method for nativeInitialize
    JNIEXPORT jboolean JNICALL
    Java_com_fearth_gdk_FearthGdk_nativeInitialize(JNIEnv* env, jobject obj, jstring data)
    {
        // Convert the jstring to a C++ string
        const char* dataStr = env->GetStringUTFChars(data, nullptr);
        std::string strData(dataStr);

        // Call the C++ method
        bool result = fearth::GdkCore::getInstance().initialize(strData);

        // Release the jstring memory
        env->ReleaseStringUTFChars(data, dataStr);

        // Return result as jboolean (JNI TRUE/FALSE)
        return result ? JNI_TRUE : JNI_FALSE;
    }

    // JNI method for nativeLogin, calls back to FearthGdk.onLoginCompleted in Java
    JNIEXPORT void JNICALL
    Java_com_fearth_gdk_FearthGdk_nativeLogin(JNIEnv* env, jobject obj, jstring data)
    {
        // Convert the jstring to a C++ string
        const char* dataStr = env->GetStringUTFChars(data, nullptr);
        std::string strData(dataStr);

        // Define a lambda function to handle the callback from C++ and call Java's onLoginCompleted method
        fearth::GdkCore::getInstance().login(strData, [env, obj](int errorCode) {
            // Get the class of the Java object (FearthGdk)
            jclass clazz = env->GetObjectClass(obj);

            // Get the method ID for onLoginCompleted(int) in FearthGdk
            jmethodID methodID = env->GetMethodID(clazz, "onLoginCompleted", "(I)V");
            if (methodID != nullptr) {
                // Call the Java method onLoginCompleted with the result code
                env->CallVoidMethod(obj, methodID, errorCode);
            }
        });

        // Release the jstring memory
        env->ReleaseStringUTFChars(data, dataStr);
    }

}
