import { _decorator, native, sys } from 'cc';
const { ccclass} = _decorator;

@ccclass('FearthGdk')
export class FearthGdk {
    
    public static test(value: number): number {
        var result = -1939;
        if(sys.os == sys.OS.ANDROID && sys.isNative){
            result = native.reflection.callStaticMethod("com/fearth/gdk/FearthGdk", "test", "(I)I", value);
        }
        return result;
    }

}


