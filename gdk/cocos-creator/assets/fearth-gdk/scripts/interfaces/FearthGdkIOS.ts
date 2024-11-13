import { _decorator, native } from 'cc';
import { Event } from '../defines/Event';
import { LoginRequest } from '../data/LoginRequest';
import { GdkConfigData } from '../data/GdkConfigData';
import { FearthGdkInterface } from './FearthGdkInterface';
import { ErrorCode } from '../defines/ErrorCode';
import { LoginResponse } from '../data/LoginResponse';
const { ccclass } = _decorator;

@ccclass('FearthGdkIOS')
export class FearthGdkIOS implements FearthGdkInterface {
    private static readonly WRAPPER_CLASS: string               = "FearthGdkWrapper";
    private static readonly WRAPPER_INIT_FUNC: string           = "initialize:";
    private static readonly WRAPPER_LOGIN_FUNC: string          = "login:";

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
            FearthGdkIOS.WRAPPER_CLASS,
            FearthGdkIOS.WRAPPER_INIT_FUNC,
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
            callback(LoginResponse.error(ErrorCode.INVALID_INPUT_DATA));
            return;
        }
        this.loginCallback = callback;
        native.jsbBridgeWrapper.addNativeEventListener(Event.LOGIN_COMPLETED, this.onLoginCompleted.bind(this));
        native.reflection.callStaticMethod(
            FearthGdkIOS.WRAPPER_CLASS,
            FearthGdkIOS.WRAPPER_LOGIN_FUNC,
            JSON.stringify(data)
        );
    }

    private onLoginCompleted(data: string): void {
        native.jsbBridgeWrapper.removeAllListenersForEvent(Event.LOGIN_COMPLETED);
        // TODO Parse data to response and callback
        // if (this.loginCallback != null) {
        //     this.loginCallback(errorCode);
        //     this.loginCallback = null;
        // }
    }
    
}
