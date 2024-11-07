import { sys } from 'cc';
import { FearthGdkDummy } from './impl/FearthGdkDummy';
import { FearthGdkIOS } from './impl/FearthGdkIOS';
import { LoginData } from './data/LoginData';
import { GdkConfig } from './data/GdkConfig';

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

    public abstract initialize(data: GdkConfig): boolean;

    public abstract login(data: LoginData, callback: (errorCode: number) => void): void;
}

