import { _decorator, Component, Label } from 'cc';
import { FearthGdk } from '../../scripts/FearthGdk';
import { LoginData } from '../../scripts/data/LoginData';
const { ccclass, property } = _decorator;

@ccclass('TestController')
export class TestController extends Component {

    @property({type: Label})
    public text: Label = null!;

    protected start(): void {
        FearthGdk.getInstance().initialize('{gameKey: "test"}');
    }

    public onPressed(): void{
        var loginData = new LoginData();
        loginData.signature = "fake_signature";
        FearthGdk.getInstance().login(loginData, this.onLoginCompleted);
    }

    private onLoginCompleted(errorCode: number): void {
        this.text.string = "err: " + errorCode.toString();
    }
}
