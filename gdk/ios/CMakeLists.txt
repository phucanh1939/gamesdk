cmake_minimum_required(VERSION 3.27)

# Configs
set(GDK_NAME "fearth_gdk")
set(GDK_BUNDLE_ID "com.fearth.gdk")
set(DEVICE_FAMILY "1,2")

set(MACOSX_BUNDLE_INFO_STRING ${GDK_BUNDLE_ID})
set(MACOSX_BUNDLE_GUI_IDENTIFIER ${GDK_BUNDLE_ID})
set(MACOSX_BUNDLE_BUNDLE_NAME ${GDK_BUNDLE_ID})

# Project setup
project(${GDK_NAME})

# Enable Objective-C++ if required by `.mm` files
enable_language(OBJC OBJCXX)

# Specify the iOS platform
set(CMAKE_SYSTEM_NAME "iOS")
set(CMAKE_OSX_SYSROOT "iphoneos")
set(CMAKE_IOS_DEPLOYMENT_TARGET "12.0")
set(CMAKE_OSX_ARCHITECTURES "arm64;x86_64")  # iOS devices (arm64)
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -fobjc-arc") # Turn on ARC

set(MACOSX_BUNDLE_INFO_STRING ${GDK_BUNDLE_ID})
set(MACOSX_BUNDLE_GUI_IDENTIFIER ${GDK_BUNDLE_ID})
set(MACOSX_BUNDLE_BUNDLE_NAME ${GDK_BUNDLE_ID})

# Code signing
# To see info on a machine:
# /usr/bin/env xcrun security find-identity -v -p codesigning
set(CMAKE_XCODE_ATTRIBUTE_DEVELOPMENT_TEAM "4Y75FRX67J")
set(CMAKE_XCODE_ATTRIBUTE_CODE_SIGN_IDENTITY "iPhone Developer")
set(CMAKE_XCODE_ATTRIBUTE_CODE_SIGN_STYLE "Manual")

# Variables store path to source files
set(GDK_CORE_SOURCES)
set(GDK_CORE_HEADERS)
set(GDK_CORE_INCLUDE_DIRS)
set(GDK_PLATFORM_SOURCES)
set(GDK_PLATFORM_HEADERS)
set(GDK_PLATFORM_INCLUDE_DIRS)
set(GDK_ALL_SOURCES)
set(GDK_ALL_HEADERS)
set(GDK_ALL_INCLUDE_DIRS)

# include core
include(${CMAKE_CURRENT_LIST_DIR}/../core/CMakeLists.txt)

# platform sources
list(APPEND GDK_PLATFORM_SOURCES
    ${CMAKE_CURRENT_LIST_DIR}/src/FearthGdk.mm
)

# platform headers
list(APPEND GDK_PLATFORM_HEADERS
    ${CMAKE_CURRENT_LIST_DIR}/include/FearthGdk.h
)

# platform include dir
list(APPEND GDK_PLATFORM_INCLUDE_DIRS
    ${CMAKE_CURRENT_LIST_DIR}/include
)

# Form the source files and include
list(APPEND GDK_ALL_SOURCES ${GDK_CORE_SOURCES} ${GDK_PLATFORM_SOURCES})
list(APPEND GDK_ALL_HEADERS ${GDK_CORE_HEADERS} ${GDK_PLATFORM_HEADERS})
list(APPEND GDK_ALL_INCLUDE_DIRS ${GDK_CORE_INCLUDE_DIRS} ${GDK_PLATFORM_INCLUDE_DIRS})

message("The value of GDK_ALL_SOURCES is: ${GDK_ALL_SOURCES}")
message("The value of GDK_ALL_HEADERS is: ${GDK_ALL_HEADERS}")
message("The value of GDK_ALL_INCLUDE_DIRS is: ${GDK_ALL_INCLUDE_DIRS}")

# Create the framework target for the iOS framework
add_library(${GDK_NAME} SHARED ${GDK_ALL_SOURCES} ${GDK_ALL_HEADERS})

# public header
set(GDK_PUBLIC_HEADER ${CMAKE_CURRENT_LIST_DIR}/include/FearthGdk.h)

# Specify that this target is a framework
set_target_properties(${GDK_NAME} PROPERTIES
    FRAMEWORK TRUE
    FRAMEWORK_VERSION A
    MACOSX_FRAMEWORK_IDENTIFIER ${GDK_BUNDLE_ID}
    # PRODUCT_BUNDLE_IDENTIFIER ${GDK_BUNDLE_ID}
    PUBLIC_HEADER ${GDK_PUBLIC_HEADER}
    XCODE_ATTRIBUTE_ENABLE_BITCODE "NO"
    XCODE_ATTRIBUTE_TARGETED_DEVICE_FAMILY ${DEVICE_FAMILY}
    XCODE_ATTRIBUTE_SKIP_INSTALL "YES"
)

# Specify the include directories for the framework
target_include_directories(${GDK_NAME} PUBLIC ${GDK_ALL_INCLUDE_DIRS})
