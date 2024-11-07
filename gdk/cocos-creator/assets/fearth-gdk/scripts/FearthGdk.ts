import { _decorator, sys } from 'cc';
import { FearthGdkDummy } from './interfaces/FearthGdkDummy';
import { FearthGdkIOS } from './interfaces/FearthGdkIOS';
import { FearthGdkInterface } from './interfaces/FearthGdkInterface';
import { FearthGdkAndroid } from './interfaces/FearthGdkAndroid';
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
            }
        }
        if (FearthGdk.instance == null) {
            // Warning!!! Not found implement for current platform
            FearthGdk.instance = new FearthGdkDummy();
        }
        return FearthGdk.instance;
    }
}

