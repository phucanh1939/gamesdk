#ifndef FEARTH_GDK_WRAPPER_H
#define FEARTH_GDK_WRAPPER_H

#define GDK_EVENT_LOGIN_SUCCESS @"GDK_EVENT_LOGIN_SUCCESS"
#define GDK_EVENT_LOGIN_FAILED  @"GDK_EVENT_LOGIN_FAILED"

#import <Foundation/Foundation.h>

@interface FearthGdkWrapper : NSObject

+ (BOOL)initialize;
+ (void)login;

@end

#endif /* FEARTH_GDK_WRAPPER_H */
