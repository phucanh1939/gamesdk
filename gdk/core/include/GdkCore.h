#ifndef GDK_CORE_H
#define GDK_CORE_H

#include <functional>
#include <string>

namespace fearth
{
    class GdkCore
    {
    public:
        static GdkCore& getInstance();

        bool initialize(const std::string& data);
        void login(const std::string& data, std::function<void(int)> callback);

    private:
        GdkCore();
        ~GdkCore();

        GdkCore(const GdkCore&) = delete;
        GdkCore& operator=(const GdkCore&) = delete;

        bool initialized = false;
    };
}

#endif // GDK_CORE_H
