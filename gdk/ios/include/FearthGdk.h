#ifndef FEARTH_GDK_H
#define FEARTH_GDK_H
// FearthGdk.h
#import <Foundation/Foundation.h>

// Declare the FearthGdk class
@interface FearthGdk : NSObject

// Declare a method that calls the C++ function
- (NSInteger)initGdk;
- (void)log:(NSString *)message;

@end
#endif /* FEARTH_GDK_H */
