import { _decorator, native } from 'cc';
import { Event } from '../defines/Event';
import { LoginData } from '../data/LoginData';
import { GdkConfig } from '../data/GdkConfig';
import { FearthGdkInterface } from './FearthGdkInterface';
import { ErrorCode } from '../defines/ErrorCode';
const { ccclass } = _decorator;

@ccclass('FearthGdkWeb')
export class FearthGdkWeb implements FearthGdkInterface {
    private static GDK_URL: string = "http://localhost:9000/gdk.js";
    private isLoaded: boolean = false;

    private load(callback: (success: boolean) => void) {
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

    public initialize(data: GdkConfig): boolean {
        this.load((loaded) => {
            if (loaded) {
                fearth.gdk.initialize(JSON.stringify(data), (success) => {
                    console.log(`[FearthGdk] <initialize> success = ${success}`);
                });
            } else {
                console.error(`[FearthGdk] <initialize> Failed to load gdk from ${FearthGdkWeb.GDK_URL}`);
            }
        });
        return true;
    }

    public login(data: LoginData, callback: (errorCode: number) => void): void {

    }
}
