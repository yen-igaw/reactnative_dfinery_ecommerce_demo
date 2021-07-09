#import <React/RCTBridgeModule.h>

#import <React/RCTEventEmitter.h>
//#import <AdBrixRM/AdBrixRM-Swift.h>
#import <AdBrixRM_XC/AdBrixRM_XC-Swift.h>

@interface RNAdbrixRmReact : RCTEventEmitter <RCTBridgeModule,AdBrixRMDeferredDeeplinkDelegate, AdBrixRMDeeplinkDelegate>

@end

