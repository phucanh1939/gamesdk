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

        bool init();
        void login(std::function<void(bool, std::string)> callback);

    private:
        GdkCore();
        ~GdkCore();

        GdkCore(const GdkCore&) = delete;
        GdkCore& operator=(const GdkCore&) = delete;

        bool initialized = false;
    };
}

#endif // GDK_CORE_H
