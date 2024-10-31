// FearthGdk.mm
#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

// Implement the method to call the C++ test function
- (NSInteger)test:(NSInteger)number {
    // Call the C++ function and return the result
    return fearth::GdkCore::test(static_cast<int>(number));
}

@end
