import { _decorator, sys } from 'cc';
import { FearthGdkDummy } from './interfaces/FearthGdkDummy';
import { FearthGdkIOS } from './interfaces/FearthGdkIOS';
import { FearthGdkInterface } from './interfaces/FearthGdkInterface';
const { ccclass } = _decorator;

@ccclass('FearthGdk')
export abstract class FearthGdk {

    private static instance: FearthGdkInterface = null;

    public static getInstance(): FearthGdkInterface {
        if (FearthGdk.instance == null) {
            if(sys.os == sys.OS.IOS && sys.isNative) {
                FearthGdk.instance = new FearthGdkIOS();
            } else {
                FearthGdk.instance = new FearthGdkDummy();
            }
        }
        return FearthGdk.instance;
    }
}

