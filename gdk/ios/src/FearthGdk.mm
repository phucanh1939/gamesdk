// FearthGdk.mm
#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

// Implement the method to call the C++ test function
- (NSInteger)initGdk {
    // Call the C++ function and return the result
    NSLog(@"[GDK] <init> ....");
    return fearth::GdkCore::initGdk();
}

- (void)log:(NSString *)message {
    NSLog(@"%@", message);
}

@end
