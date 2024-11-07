import { _decorator, sys } from 'cc';
import { FearthGdkIOS } from './impl/FearthGdkIOS';
import { FearthGdkDummy } from './impl/FearthGdkDummy';
const { ccclass} = _decorator;

@ccclass('FearthGdk')
export abstract class FearthGdk {

    private static instance: FearthGdk = null;

    public static getInstance(): FearthGdk {
        if (FearthGdk.instance == null) {
            if(sys.os == sys.OS.IOS && sys.isNative) {
                FearthGdk.instance = new FearthGdkIOS();
            } else {
                FearthGdk.instance = new FearthGdkDummy();
            }
        }
        return FearthGdk.instance;
    }

    public abstract initialize(): boolean;

    public abstract login(callback: (errorCode: number) => void): void;
}
