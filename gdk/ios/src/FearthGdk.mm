#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

// Singleton instance method
+ (instancetype)sharedInstance {
    static FearthGdk *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

// Updated initialize method with NSString* parameter
- (BOOL)initialize:(NSString *)data {
    NSLog(@"[GDK] <initialize> with data: %@", data);
    if (!data) {
        NSLog(@"[GDK] <initialize> error: data is nil");
        return NO;
    }
    std::string dataStdString = [data UTF8String];
    return fearth::GdkCore::getInstance().initialize(dataStdString) ? YES : NO;
}

// Updated login method with NSString* parameter and callback
- (void)login:(NSString *)data callback:(void (^)(NSNumber *errorCode))callback {
    NSLog(@"[GDK] <login> with data: %@", data);
    if (!data) {
        NSLog(@"[GDK] <login> error: data is nil");
        if (callback) {
            callback(ERROR_CODE_LOGIN_DATA_IS_NULL); // Pass error code and message
        }
        return;
    }
    std::string dataStdString = [data UTF8String];
    fearth::GdkCore::getInstance().login(
        dataStdString,
        ^(int errorCode) {
            NSNumber *errorCodeNumber = @(errorCode);
            if (callback) {
                callback(errorCodeNumber);
            }
        }
    );
}

@end
