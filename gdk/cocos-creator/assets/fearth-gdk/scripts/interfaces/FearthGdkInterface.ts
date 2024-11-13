import { GdkConfigData } from "../data/GdkConfigData";
import { LoginRequest } from "../data/LoginRequest";
import { LoginResponse } from "../data/LoginResponse";

export interface FearthGdkInterface {
    initialize(data: GdkConfigData, callback: (success: boolean) => void): void;
    login(data: LoginRequest, callback: (response: LoginResponse) => void): void;
}