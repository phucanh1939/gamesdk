#include "GdkCore.h"
#include <iostream>

namespace fearth
{
    GdkCore& GdkCore::getInstance()
    {
        // Local static instance, thread-safe in C++11 and later
        static GdkCore instance;
        return instance;
    }

    std::string GdkCore::generateToken(const std::string& username, const std::string& password)
    {
        std::string token = secretKey + "token_" + username + "_" + password;
        return token;
    }
}
