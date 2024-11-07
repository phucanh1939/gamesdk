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

    bool GdkCore::initialize(const std::string& data)
    {
        if (initialized) return false;
        // TODO
        initialized = true;
        return true;
    }

    void GdkCore::login(const std::string& data, std::function<int> callback)
    {
        // TODO
        callback(0); 
    }
}
