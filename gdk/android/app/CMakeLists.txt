cmake_minimum_required(VERSION 3.4.1)

set(GDK_NAME "fearth_gdk")

project(${GDK_NAME})

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
    ${CMAKE_CURRENT_LIST_DIR}/src/main/GdkCoreJni.cpp
)

# Form the source files and include
list(APPEND GDK_ALL_SOURCES ${GDK_CORE_SOURCES} ${GDK_PLATFORM_SOURCES})
list(APPEND GDK_ALL_HEADERS ${GDK_CORE_HEADERS} ${GDK_PLATFORM_HEADERS})
list(APPEND GDK_ALL_INCLUDE_DIRS ${GDK_CORE_INCLUDE_DIRS} ${GDK_PLATFORM_INCLUDE_DIRS})

# Create a shared library (dynamic library)
add_library(${GDK_NAME} SHARED ${GDK_ALL_SOURCES} ${GDK_ALL_HEADERS})

# Specify any required include directories
target_include_directories(${GDK_NAME} PUBLIC ${GDK_ALL_INCLUDE_DIRS})
