import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('ErrorCode')
export class ErrorCode {
    // Success code
    public static readonly NONE: number = 0;
    
    // Login
    public static readonly LOGIN_INVALID_DATA: number = 1;
    
    // Additional error codes
    public static readonly UNKNOWN_ERROR: number = 99;

    // Add more error codes as needed...
}
