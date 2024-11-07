#ifndef FEARTH_GDK_H
#define FEARTH_GDK_H

#import <Foundation/Foundation.h>

#define ERROR_CODE_LOGIN_DATA_IS_NULL @1


@interface FearthGdk : NSObject

// Singleton access method
+ (instancetype)sharedInstance;

// Instance methods
- (BOOL)initialize:(NSString*)data;
- (void)login:(NSString*)data callback:(void (^)(NSNumber *errorCode))callback;

@end

#endif /* FEARTH_GDK_H */
