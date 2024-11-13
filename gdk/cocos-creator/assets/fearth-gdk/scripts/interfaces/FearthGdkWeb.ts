import { _decorator, log } from 'cc';
import { LoginRequest } from '../data/LoginRequest';
import { GdkConfigData } from '../data/GdkConfigData';
import { FearthGdkInterface } from './FearthGdkInterface';
import { LoginResponse } from '../data/LoginResponse';
const { ccclass } = _decorator;

@ccclass('FearthGdkWeb')
export class FearthGdkWeb implements FearthGdkInterface {
    private static GDK_URL: string = "http://localhost:9000/gdk.js";
    private readonly isRemote: boolean = false;
    private isLoaded: boolean = false;

    private load(callback: (success: boolean) => void) {
        log(`[FearthGdkWeb] <load> ${FearthGdkWeb.GDK_URL}`);
        if (this.isLoaded) {
            callback(true);
            return;
        }
        const script = document.createElement('script');
        script.src = FearthGdkWeb.GDK_URL;
        script.onload = () => callback(true);
        script.onerror = () => callback(false);
        document.head.appendChild(script);
        this.isLoaded = true;
    }

    public initialize(data: GdkConfigData, callback: (success: boolean) => void): void {
        log(`[FearthGdkWeb] <initialize> ${JSON.stringify(data)}`);
        if (this.isRemote) {
            this.load(success => {
                if (success) {
                    globalThis.fearth.gdk.initialize(data, callback);
                } else {
                    callback(false);
                }
            });
        }
        else {
            globalThis.fearth.gdk.initialize(data, callback);
        }

    }

    public login(data: LoginRequest, callback: (response: LoginResponse) => void): void {
        log(`[FearthGdkWeb] <login> ${JSON.stringify(data)}`);
        globalThis.fearth.gdk.login(data, callback);
    }
}
