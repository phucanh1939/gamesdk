import { _decorator, native, sys } from 'cc';
import { FearthGdk } from '../FearthGdk';
const { ccclass} = _decorator;

@ccclass('FearthGdk')
export class FearthGdkIOS extends FearthGdk{
    public login(callback: (errorCode: number) => void): void {
        throw new Error('Method not implemented.');
    }

    public initialize(): boolean {
        return native.reflection.callStaticMethod("FearthGdkWrapper", "initialize");
    }
    
}


