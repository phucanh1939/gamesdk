import { LoginResponse } from "./data/LoginResponse";
import { LoginRequest } from "./data/LoginRequest";
import { ErrorCode } from "./defines/ErrorCode";
import { GdkConfigData } from "./data/GdkConfigData";

export class Gdk {
    private config: GdkConfigData | null = null;
    private initialized = false;

    public initialize(config: GdkConfigData, callback?: (success: boolean) => void) {
        console.log(`[Gdk] <initialize> config = ${JSON.stringify(config)}`);
        if (this.initialized) {
            callback?.(false);
            return;
        }
        this.config = config;
        this.initialized = true;
        callback?.(true);
    }

    public initializeWithJson(configJson: string, callback?: (success: boolean) => void) {
        console.log(`[Gdk] <initializeWithJson> configJson = ${configJson}`);
        try {
            const config: GdkConfigData = JSON.parse(configJson);
            this.initialize(config, callback);
        } catch (error) {
            console.error("[Gdk] <initializeWithJson> Error parsing request JSON", error);
            callback?.(false);
        }
    }

    public login(request: LoginRequest, callback?: (response: LoginResponse) => void) {
        console.log(`[Gdk] <login> request = ${JSON.stringify(request)}`);
        const response: LoginResponse = {
            success: true,
            errorCode: ErrorCode.OK,
            userId: "xxx1939",
            token: "tk_1222111"
        };
        callback?.(response);
    }

    public loginWithJson(requestJson: string, callback?: (responseJson: string) => void) {
        console.log(`[Gdk] <loginWithJson> requestJson = ${requestJson}`);
        try {
            const request: LoginRequest = JSON.parse(requestJson);
            this.login(request, (response: LoginResponse) => {
                const responseJson = JSON.stringify(response);
                callback?.(responseJson);
            });
        } catch (error) {
            console.error("[Gdk] <loginWithJson> Error parsing request JSON", error);
            const errorResponse: LoginResponse = {
                success: false,
                errorCode: ErrorCode.INVALID_INPUT_DATA,
                userId: "",
                token: ""
            };
            callback?.(JSON.stringify(errorResponse));
        }
    }
}
