import { _decorator } from 'cc';
import { LoginRequest } from '../data/LoginRequest';
import { GdkConfigData } from '../data/GdkConfigData';
import { FearthGdkInterface } from './FearthGdkInterface';
import { LoginResponse } from '../data/LoginResponse';
const { ccclass } = _decorator;

@ccclass('FearthGdkDummy')
export class FearthGdkDummy implements FearthGdkInterface {
    public login(data: LoginRequest, callback: (response: LoginResponse) => void): void {
        callback({
            success: true,
            errorCode: 0,
            userId: "user_xxx",
            token: "token_xxx",
        });
    }

    public initialize(data: GdkConfigData, callback: (success: boolean) => void): void {
        callback(true);
    }
    
}


