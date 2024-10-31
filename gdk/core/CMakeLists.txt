cmake_minimum_required(VERSION 3.4.1)

project(fearth_gdk)

# Define your C++ source files
file(GLOB CPP_SOURCES "src/*.cpp")

# Create a shared library (dynamic library)
# This means that the compiled library code is stored in a separate file that can be loaded into memory at runtime,
# rather than being statically linked into the executable.
add_library(fearth_gdk_core SHARED ${CPP_SOURCES})

# Specify any required include directories
include_directories(include)
