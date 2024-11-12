import { GdkConfig } from "../data/GdkConfig";
import { LoginData } from "../data/LoginData";

export interface FearthGdkInterface {
    initialize(data: GdkConfig, callback: (success: boolean) => void): void;
    login(data: LoginData, callback: (errorCode: number) => void): void;
}