// FearthGdk.mm
#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

// Implement the method to call the C++ test function
+ (NSInteger)initialize {
    // Call the C++ function and return the result
    NSLog(@"[GDK] <init> ....");
    return fearth::GdkCore::initialize();
}

@end
