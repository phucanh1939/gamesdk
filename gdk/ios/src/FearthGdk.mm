#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

+ (instancetype)sharedInstance {
    static FearthGdk *sharedInstance = nil;
    if (!sharedInstance) {
        sharedInstance = [[self alloc] init];
    }
    return sharedInstance;
}

- (BOOL)initialize {
    NSLog(@"[GDK] <initialize>");
    return fearth::GdkCore::getInstance().init() ? YES : NO;
}

- (void)login:(void (^)(BOOL success, NSString *message))callback {
    NSLog(@"[GDK] <login>");
    fearth::GdkCore::getInstance().login([callback copy]);
}

@end
