import { _decorator, sys, warn } from 'cc';
import { FearthGdkDummy } from './interfaces/FearthGdkDummy';
import { FearthGdkIOS } from './interfaces/FearthGdkIOS';
import { FearthGdkInterface } from './interfaces/FearthGdkInterface';
import { FearthGdkAndroid } from './interfaces/FearthGdkAndroid';
import { FearthGdkWeb } from './interfaces/FearthGdkWeb';
const { ccclass } = _decorator;

@ccclass('FearthGdk')
export abstract class FearthGdk {

    private static instance: FearthGdkInterface = null;

    public static getInstance(): FearthGdkInterface {
        if (FearthGdk.instance == null) {
            if (sys.isNative) {
                if (sys.os == sys.OS.IOS) {
                    FearthGdk.instance = new FearthGdkIOS();
                } else if (sys.os == sys.OS.ANDROID) {
                    FearthGdk.instance = new FearthGdkAndroid();
                }
            } else if (sys.isBrowser) {
                FearthGdk.instance = new FearthGdkWeb();
            }
        }
        if (FearthGdk.instance == null) {
            // Warning!!! Not found implement for current platform
            warn("[FearthGdk] <create> Warning!!! Not found implement for current platform")
            FearthGdk.instance = new FearthGdkDummy();
        }
        return FearthGdk.instance;
    }
}

