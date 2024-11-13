import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('LoginRequest')
export class LoginRequest {
    public username: string = "";
    public password: string = "";
}

