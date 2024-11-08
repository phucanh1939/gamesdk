import { LoginResult } from "./data/LoginResult";
import { Logger } from "./log/Logger";

export class Gdk {
    public init(callback: (success: boolean) => void) {
        console.log("[FearthGdk] <init>");
        callback(true);
    }

    public login(data: string, callback: (erroCode: number) => void) {
        console.log("[FearthGdk] <login>", data);
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
