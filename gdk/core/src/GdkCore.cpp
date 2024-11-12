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

    GdkCore::GdkCore()
    {
    }

    GdkCore::~GdkCore()
    {
    }

    void GdkCore::initialize(const std::string& data, std::function<void(bool)> callback)
    {
        if (initialized) {
            if (callback) callback(false);
            return;
        }
        initialized = true;
        if (callback) callback(true);
    }

    void GdkCore::login(const std::string& data, std::function<void(int)> callback)
    {
        // TODO
        if (callback) callback(0); 
    }
}
