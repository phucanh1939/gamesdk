#ifndef FEARTH_GDK_H
#define FEARTH_GDK_H

#import <Foundation/Foundation.h>

@interface FearthGdk : NSObject

// Singleton access method
+ (instancetype)sharedInstance;

// Instance methods
- (BOOL)initialize;
- (void)login:(void (^)(BOOL success, NSString *message))callback;

@end

#endif /* FEARTH_GDK_H */
