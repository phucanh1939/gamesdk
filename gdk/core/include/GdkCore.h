#ifndef GDK_CORE_H
#define GDK_CORE_H

#include <functional>
#include <string>

namespace fearth
{
    class GdkCore
    {
    public:
        GdkCore(const GdkCore&) = delete;
        GdkCore& operator=(const GdkCore&) = delete;

        static GdkCore& getInstance();

        std::string generateToken(const std::string& username, const std::string& password);

    private:
        GdkCore() = default;
        ~GdkCore() = default;

        std::string secretKey = "__xxx__";
    };
}

#endif // GDK_CORE_H
