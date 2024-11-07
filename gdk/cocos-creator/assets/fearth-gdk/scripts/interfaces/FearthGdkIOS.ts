import { _decorator, native } from 'cc';
import { Event } from '../defines/Event';
import { LoginData } from '../data/LoginData';
import { GdkConfig } from '../data/GdkConfig';
import { FearthGdkInterface } from './FearthGdkInterface';
import { ErrorCode } from '../defines/ErrorCode';
const { ccclass } = _decorator;

type LoginCallback = (errorCode: number) => void;

@ccclass('FearthGdkIOS')
export class FearthGdkIOS implements FearthGdkInterface {
    private static readonly WRAPPER_CLASS: string               = "FearthGdkWrapper";
    private static readonly WRAPPER_INIT_FUNC: string           = "initialize:";
    private static readonly WRAPPER_LOGIN_FUNC: string          = "login:";

    private loginCallback: LoginCallback = null;

    public initialize(data: GdkConfig): boolean {
        if (!data) return;
        return native.reflection.callStaticMethod(
            FearthGdkIOS.WRAPPER_CLASS,
            FearthGdkIOS.WRAPPER_INIT_FUNC,
            JSON.stringify(data)
        );
    }

    public login(data: LoginData, callback: (errorCode: number) => void): void {
        if (!data) 
        {
            callback(ErrorCode.LOGIN_INVALID_DATA)
            return;
        }
        this.loginCallback = callback;
        native.jsbBridgeWrapper.addNativeEventListener(Event.LOGIN_COMPLETED, this.onLoginCallback.bind(this));
        native.reflection.callStaticMethod(
            FearthGdkIOS.WRAPPER_CLASS,
            FearthGdkIOS.WRAPPER_LOGIN_FUNC,
            JSON.stringify(data)
        );
    }

    private onLoginCallback(data: string): void {
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
