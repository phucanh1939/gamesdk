// FearthGdk.mm
#import "FearthGdkWrapper.h"
#import <fearth_gdk/FearthGdk.h>

@implementation FearthGdkWrapper

+ (BOOL)initialize:(NSString *)data {
    return [FearthGdk.sharedInstance initialize:data];
}

+ (void)login:(NSString *)data {
    [FearthGdk.sharedInstance login:data callback:^(NSNumber* errorCode) {
        NSLog(@"[GdkWrapper] <login> errorCode: %@", errorCode);
        JsbBridgeWrapper* bridge = [JsbBridgeWrapper sharedInstance];
        [bridge dispatchEventToScript:GDK_EVENT_LOGIN_COMPLETED arg:[errorCode stringValue]];
    }];
}

@end

