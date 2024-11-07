import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('Event')
export class Event {
    // LOGIN
    public static readonly LOGIN: string                = "GDK_EVENT_LOGIN";
    public static readonly LOGIN_COMPLETED: string      = "GDK_EVENT_LOGIN_COMPLETED";
}
