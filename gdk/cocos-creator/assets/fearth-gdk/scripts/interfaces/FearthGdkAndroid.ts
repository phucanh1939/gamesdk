import { _decorator, native } from 'cc';
import { Event } from '../defines/Event';
import { LoginData } from '../data/LoginData';
import { GdkConfig } from '../data/GdkConfig';
import { FearthGdkInterface } from './FearthGdkInterface';
import { ErrorCode } from '../defines/ErrorCode';
const { ccclass } = _decorator;

type LoginCallback = (errorCode: number) => void;

@ccclass('FearthGdkAndroid')
export class FearthGdkAndroid implements FearthGdkInterface {
    private static readonly WRAPPER_CLASS: string               = "com/fearth/gdk/FearthGdkWrapper";
    private static readonly WRAPPER_INIT_FUNC: string           = "initialize";
    private static readonly WRAPPER_INIT_SIGNATURE: string      = "(Ljava/lang/String;)Z";
    private static readonly WRAPPER_LOGIN_FUNC: string          = "login";
    private static readonly WRAPPER_LOGIN_SIGNATURE: string     = "(Ljava/lang/String;)V";

    private loginCallback: LoginCallback = null;

    public initialize(data: GdkConfig): boolean {
        if (!data) return;
        return native.reflection.callStaticMethod(
            FearthGdkAndroid.WRAPPER_CLASS,
            FearthGdkAndroid.WRAPPER_INIT_FUNC,
            FearthGdkAndroid.WRAPPER_INIT_SIGNATURE,
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
            FearthGdkAndroid.WRAPPER_CLASS,
            FearthGdkAndroid.WRAPPER_LOGIN_FUNC,
            FearthGdkAndroid.WRAPPER_LOGIN_SIGNATURE,
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
