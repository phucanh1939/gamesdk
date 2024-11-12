import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('ErrorCode')
export class ErrorCode {
    public static readonly OK: number = 0;
    public static readonly INVALID_INPUT_DATA: number = 1;
}
