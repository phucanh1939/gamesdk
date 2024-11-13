#include <jni.h>
#include "GdkCore.h"

extern "C" {

    JNIEXPORT jstring JNICALL
    Java_com_fearth_gdk_FearthGdk_nativeGenerateToken(JNIEnv* env, jobject obj, jstring username, jstring password)
    {
        const char* usernameStr = env->GetStringUTFChars(username, nullptr);
        const char* passwordStr = env->GetStringUTFChars(password, nullptr);
        std::string token = fearth::GdkCore::getInstance().generateToken(usernameStr, passwordStr);
        env->ReleaseStringUTFChars(username, usernameStr);
        env->ReleaseStringUTFChars(password, usernameStr);
        return env->NewStringUTF(token.c_str());
    }
}
