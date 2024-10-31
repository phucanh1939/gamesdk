cmake_minimum_required(VERSION 3.4.1)

project(fearth_gdk)

# Specify the path to the core C++ files
add_subdirectory(../../core ../build/core)

# Define your C++ source files
file(GLOB CPP_SOURCES "src/main/cpp/*.cpp") 

# Create a shared library (dynamic library)
add_library(fearth_gdk_android SHARED ${CPP_SOURCES})

# Specify any required include directories
include_directories(../../core/include)

# Link the core library if needed
target_link_libraries(fearth_gdk_android fearth_gdk_core)
