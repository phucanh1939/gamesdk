import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('GdkConfig')
export class GdkConfig {
    public gameKey: string = null;
}
