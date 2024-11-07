// FearthGdk.mm
#import "FearthGdkWrapper.h"
#import <fearth_gdk/FearthGdk.h>

@implementation FearthGdkWrapper

+ (BOOL)initialize {
    return [FearthGdk.sharedInstance initialize];
}

+ (void)login {
    [FearthGdk.sharedInstance login:^(BOOL success, NSString *data) {
        JsbBridgeWrapper* bridge = [JsbBridgeWrapper sharedInstance];
        if (success) {
            NSLog(@"[GdkWrapper] <login> successful: %@", data);
            [bridge dispatchEventToScript:GDK_EVENT_LOGIN_SUCCESS arg:data]
        } else {
            NSLog(@"[GdkWrapper] <login> failed: %@", data);
            [bridge dispatchEventToScript:GDK_EVENT_LOGIN_FAILED arg:data]
        }
    }];
}

@end
