#import "FearthGdk.h"
#include "GdkCore.h"

@implementation FearthGdk

+ (instancetype)sharedInstance {
    static FearthGdk *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];
    });
    return sharedInstance;
}

- (void)initialize:(NSString *)data callback:(void (^)(BOOL success))callback{
    NSLog(@"[GDK] <initialize> data: %@", data);
    if (!data) {
        NSLog(@"[GDK] <initialize> error: data is nil");
        return;
    }   
    std::string dataStdString = [data UTF8String];
    fearth::GdkCore::getInstance().initialize(dataStdString, ^(bool success){
        if (callback) {
            callback(success);
        }
    });
}

- (void)login:(NSString *)data callback:(void (^)(NSNumber *errorCode))callback {
    NSLog(@"[GDK] <login> data: %@", data);
    if (!data) {
        NSLog(@"[GDK] <login> error: data is nil");
        if (callback) {
            callback(@ERROR_CODE_LOGIN_DATA_IS_NULL); // Pass error code and message
        }
        return;
    }
    std::string dataStdString = [data UTF8String];
    fearth::GdkCore::getInstance().login(dataStdString, ^(int errorCode) {
        if (callback) {
            callback(@(errorCode));
        }
    });
}

@end
