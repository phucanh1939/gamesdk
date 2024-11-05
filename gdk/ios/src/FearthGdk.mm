#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

+ (NSInteger)initialize {
    NSLog(@"[GDK] <initialize>");
    return fearth::GdkCore::initialize();
}

@end
