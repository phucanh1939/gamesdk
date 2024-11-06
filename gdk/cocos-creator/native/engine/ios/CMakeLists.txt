cmake_minimum_required(VERSION 3.8)

set(CMAKE_SYSTEM_NAME iOS)
set(APP_NAME "fearth-gdk"  CACHE STRING "Project Name")

project(${APP_NAME} CXX)

set(CC_PROJECT_DIR ${CMAKE_CURRENT_LIST_DIR})
set(CC_UI_RESOURCES)
set(CC_PROJ_SOURCES)
set(CC_ASSET_FILES)
set(CC_COMMON_SOURCES)
set(CC_ALL_SOURCES)

include(${CC_PROJECT_DIR}/../common/CMakeLists.txt)

set(EXECUTABLE_NAME ${APP_NAME}-mobile)

cc_ios_before_target(${EXECUTABLE_NAME})
add_executable(${EXECUTABLE_NAME} ${CC_ALL_SOURCES})
cc_ios_after_target(${EXECUTABLE_NAME})

target_sources(${EXECUTABLE_NAME} PRIVATE
    ${CMAKE_CURRENT_LIST_DIR}/Classes/FearthGdkWrapper.h
    ${CMAKE_CURRENT_LIST_DIR}/Classes/FearthGdkWrapper.mm
)

# Link the gdk framework to the application
target_link_libraries(
    ${EXECUTABLE_NAME}
    ${CMAKE_CURRENT_LIST_DIR}/fearth_gdk.framework
)

set_target_properties( ${EXECUTABLE_NAME} PROPERTIES
    XCODE_EMBED_FRAMEWORKS ${CMAKE_CURRENT_LIST_DIR}/fearth_gdk.framework # embed framework into the application bundle
    XCODE_EMBED_FRAMEWORKS_CODE_SIGN_ON_COPY "YES" # Make sure Framework must be signed by the same developer as the binary
    XCODE_ATTRIBUTE_LD_RUNPATH_SEARCH_PATHS "@executable_path/Frameworks" #  Set framework search path to (App bundle)/Frameworks so the application can use its embedded frameworks
)
