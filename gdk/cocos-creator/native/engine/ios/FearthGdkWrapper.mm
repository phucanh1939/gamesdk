// FearthGdk.mm
#import "FearthGdkWrapper.h"
#import "platform/apple/JsbBridgeWrapper.h"
#import <fearth_gdk/FearthGdk.h>

@implementation FearthGdkWrapper

+ (void)initialize:(NSString *)data {
    NSLog(@"[GdkWrapper] <initialize> data: %@", data);
    return [FearthGdk.sharedInstance initialize:data callback:^(BOOL success){
        NSLog(@"[GdkWrapper] <initialize> callback success: %@", success);
        JsbBridgeWrapper* bridge = [JsbBridgeWrapper sharedInstance];
        [bridge dispatchEventToScript:GDK_EVENT_INITIALIZE_COMPLETED arg:(success ? @"true" : @"false")];
    }];
}

+ (void)login:(NSString *)data {
    NSLog(@"[GdkWrapper] <login> data: %@", data);
    [FearthGdk.sharedInstance login:data callback:^(NSNumber* errorCode){
        NSLog(@"[GdkWrapper] <login> callback errorCode: %@", errorCode);
        JsbBridgeWrapper* bridge = [JsbBridgeWrapper sharedInstance];
        [bridge dispatchEventToScript:GDK_EVENT_LOGIN_COMPLETED arg:[errorCode stringValue]];
    }];
}

@end

