import { _decorator, native } from 'cc';
import { Event } from '../defines/Event';
import { LoginData } from '../data/LoginData';
import { GdkConfig } from '../data/GdkConfig';
import { FearthGdkInterface } from './FearthGdkInterface';
import { ErrorCode } from '../defines/ErrorCode';
const { ccclass } = _decorator;

@ccclass('FearthGdkIOS')
export class FearthGdkIOS implements FearthGdkInterface {
    private static readonly WRAPPER_CLASS: string               = "FearthGdkWrapper";
    private static readonly WRAPPER_INIT_FUNC: string           = "initialize:";
    private static readonly WRAPPER_LOGIN_FUNC: string          = "login:";

    private initializeCallback: (success: boolean) => void = null;
    private loginCallback: (errorCode: number) => void = null;

    public initialize(data: GdkConfig, callback: (success: boolean) => void): void {
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

    public login(data: LoginData, callback: (errorCode: number) => void): void {
        if (!data) {
            callback(ErrorCode.INVALID_INPUT_DATA)
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
        var errorCode = Number(data);
        if (isNaN(errorCode)) {
            errorCode = -1939;
        }
        if (this.loginCallback != null) {
            this.loginCallback(errorCode);
            this.loginCallback = null;
        }
    }
    
}
