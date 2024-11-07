import { FearthGdk } from '../FearthGdk';
import { LoginData } from '../data/LoginData';

export class FearthGdkDummy extends FearthGdk {
    public login(data: LoginData, callback: (errorCode: number) => void): void {
        callback(0);
    }

    public initialize(data: string): boolean {
        return true;
    }
    
}


