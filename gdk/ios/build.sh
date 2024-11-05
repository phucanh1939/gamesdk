#!/bin/bash
sh ./gen_xcode.sh
cmake --build build/ --config Debug
cmake --build build/ --config Release
