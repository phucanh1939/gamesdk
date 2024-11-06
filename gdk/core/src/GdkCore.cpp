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

    bool GdkCore::init()
    {
        if (initialized) return false;
        // TODO
        initialized = true;
        return true;
    }

    void GdkCore::login(std::function<void(bool, std::string)> callback)
    {
        // Dummy data
        bool success = true;
        std::string json = R"({"id": 100, "name": "user_name_abc"})";
        callback(success, json); 
    }
}
