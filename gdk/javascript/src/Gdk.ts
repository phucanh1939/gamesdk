import { LoginResult } from "./data/LoginResult";
import { Logger } from "./log/Logger";

export class Gdk {
    public initialize(data: string, callback: (success: boolean) => void) {
        console.log("[Gdk] <initialize> " + data);
        callback(true);
    }

    public login(data: string, callback: (erroCode: number) => void) {
        console.log("[Gdk] <login>", data);
        const result: LoginResult = {
            errorCode: 0,
            success: true
        };
        callback(result.errorCode);
    }

    public hello() {
        Logger.say("hello");
    }
}
