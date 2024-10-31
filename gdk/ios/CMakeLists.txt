cmake_minimum_required(VERSION 3.4.1)

# Define the project name
project(fearth_gdk)

# Set the iOS SDK version if necessary
set(CMAKE_OSX_DEPLOYMENT_TARGET "12.0")  # Adjust to your minimum supported iOS version

# Add the core library as a subdirectory, specifying the binary directory
add_subdirectory(../core build/core)

# Create the framework target for the iOS framework
add_library(fearth_gdk SHARED
    src/FearthGdk.mm  # Add other Objective-C files for the framework as needed
)

# Specify that this target is a framework
set_target_properties(fearth_gdk PROPERTIES
    FRAMEWORK TRUE
    PUBLIC_HEADER "src/FearthGdk.h"  # Specify public headers for the framework
)

# Link the core library to the framework
target_link_libraries(fearth_gdk fearth_gdk_core)

# Specify the include directories for the framework
target_include_directories(fearth_gdk PUBLIC
    ${PROJECT_SOURCE_DIR}/../core/include  # Adjusted to point to the core include directory
    ${PROJECT_SOURCE_DIR}/include
)
