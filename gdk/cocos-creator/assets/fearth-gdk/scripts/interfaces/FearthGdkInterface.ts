import { GdkConfig } from "../data/GdkConfig";
import { LoginData } from "../data/LoginData";

export interface FearthGdkInterface {
    initialize(data: GdkConfig): boolean;
    login(data: LoginData, callback: (errorCode: number) => void): void;
}