import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('LoginResponse')
export class LoginResponse {
    public success: boolean = true;
    public errorCode: number = 0;
    public userId: string = "";
    public token: string = "";

    public static error(errorCode: number): LoginResponse {
        var response = new LoginResponse();
        response.errorCode = errorCode;
        return response;
    }
}


