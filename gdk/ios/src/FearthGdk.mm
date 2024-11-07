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

- (void)login {
    NSLog(@"[GDK] <login>");
    fearth::GdkCore::getInstance().login(
        ^(bool success, std::string data) {
            NSString *dataNSString = [NSString stringWithCString:data.c_str() encoding:NSUTF8StringEncoding];
            callback(success, dataNSString);
        }
    );
}

@end
