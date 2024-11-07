import { _decorator, native, sys } from 'cc';
import { FearthGdk } from '../FearthGdk';
const { ccclass} = _decorator;

@ccclass('FearthGdk')
export class FearthGdkDummy extends FearthGdk{
    public login(callback: (errorCode: number) => void): void {
        callback(0);
    }

    public initialize(): boolean {
        return true;
    }
    
}


