import { _decorator, native } from 'cc';
import { Event } from '../defines/Event';
import { LoginRequest } from '../data/LoginRequest';
import { GdkConfigData } from '../data/GdkConfigData';
import { FearthGdkInterface } from './FearthGdkInterface';
import { LoginResponse } from '../data/LoginResponse';
const { ccclass } = _decorator;

@ccclass('FearthGdkAndroid')
export class FearthGdkAndroid implements FearthGdkInterface {
    private static readonly WRAPPER_CLASS: string               = "com/fearth/gdk/FearthGdkWrapper";
    private static readonly WRAPPER_INIT_FUNC: string           = "initialize";
    private static readonly WRAPPER_INIT_SIGNATURE: string      = "(Ljava/lang/String;)V";
    private static readonly WRAPPER_LOGIN_FUNC: string          = "login";
    private static readonly WRAPPER_LOGIN_SIGNATURE: string     = "(Ljava/lang/String;)V";

    private initializeCallback: (success: boolean) => void = null;
    private loginCallback: (response: LoginResponse) => void = null;

    public initialize(data: GdkConfigData, callback: (success: boolean) => void): void {
        if (!data) {
            callback(false);
            return;
        }

        this.initializeCallback = callback;
        native.jsbBridgeWrapper.addNativeEventListener(Event.INITIALIZE_COMPLETED, this.onInitializeCompleted.bind(this));

        native.reflection.callStaticMethod(
            FearthGdkAndroid.WRAPPER_CLASS,
            FearthGdkAndroid.WRAPPER_INIT_FUNC,
            FearthGdkAndroid.WRAPPER_INIT_SIGNATURE,
            JSON.stringify(data)
        );
        
    }

    private onInitializeCompleted(data: string): void {
        native.jsbBridgeWrapper.removeAllListenersForEvent(Event.INITIALIZE_COMPLETED);
        var success = data == "true";
        if (this.initializeCallback != null) {
            this.initializeCallback(success);
            this.initializeCallback = null;
        }
    }

    public login(data: LoginRequest, callback: (response: LoginResponse) => void): void {
        if (!data) {
            // callback(ErrorCode.INVALID_INPUT_DATA);
            return;
        }
        this.loginCallback = callback;
        native.jsbBridgeWrapper.addNativeEventListener(Event.LOGIN_COMPLETED, this.onLoginCallback.bind(this));
        native.reflection.callStaticMethod(
            FearthGdkAndroid.WRAPPER_CLASS,
            FearthGdkAndroid.WRAPPER_LOGIN_FUNC,
            FearthGdkAndroid.WRAPPER_LOGIN_SIGNATURE,
            JSON.stringify(data)
        );
    }

    private onLoginCallback(data: string): void {
        native.jsbBridgeWrapper.removeAllListenersForEvent(Event.LOGIN_COMPLETED);

        // TODO parse data to LoginResponse and callback

        // if (this.loginCallback != null) {
        //     this.loginCallback(errorCode);
        //     this.loginCallback = null;
        // }
    }
    
}
