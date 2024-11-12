import { _decorator } from "cc";

const { ccclass } = _decorator;

@ccclass('Event')
export class Event {
    public static readonly INITIALIZE_COMPLETED: string         = "GDK_EVENT_INITIALIZE_COMPLETED";
    public static readonly LOGIN_COMPLETED: string              = "GDK_EVENT_LOGIN_COMPLETED";
}
