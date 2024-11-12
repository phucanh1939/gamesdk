#ifndef FEARTH_GDK_WRAPPER_H
#define FEARTH_GDK_WRAPPER_H

#define GDK_EVENT_LOGIN @"GDK_EVENT_LOGIN"
#define GDK_EVENT_LOGIN_COMPLETED @"GDK_EVENT_LOGIN_COMPLETED"

#import <Foundation/Foundation.h>

@interface FearthGdkWrapper : NSObject

+ (void)initialize:(NSString *)data;
+ (void)login:(NSString *)data;

@end

#endif /* FEARTH_GDK_WRAPPER_H */
