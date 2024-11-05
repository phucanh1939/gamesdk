import { _decorator, native, sys } from 'cc';
const { ccclass} = _decorator;

@ccclass('FearthGdk')
export class FearthGdk {
    
    public static initialize(): number {
        var result = 12;
        if(sys.os == sys.OS.IOS && sys.isNative){
            result = native.reflection.callStaticMethod("FearthGdk", "initialize");
        }
        return result;
    }

}


