import { _decorator } from 'cc';
import { LoginData } from '../data/LoginData';
import { GdkConfig } from '../data/GdkConfig';
import { FearthGdkInterface } from './FearthGdkInterface';
const { ccclass } = _decorator;

@ccclass('FearthGdkDummy')
export class FearthGdkDummy implements FearthGdkInterface {
    public login(data: LoginData, callback: (errorCode: number) => void): void {
        callback(0);
    }

    public initialize(data: GdkConfig, callback: (success: boolean) => void): void {
        callback(true);
    }
    
}


