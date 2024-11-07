import { _decorator, Component, Label } from 'cc';
import { FearthGdk } from '../../scripts/FearthGdk';
import { LoginData } from '../../scripts/data/LoginData';
import { GdkConfig } from '../../scripts/data/GdkConfig';
const { ccclass, property } = _decorator;

@ccclass('TestController')
export class TestController extends Component {

    @property({type: Label})
    public text: Label = null!;

    protected start(): void {
        const data: GdkConfig = {
            gameKey: "game_xyz"
        }
        FearthGdk.getInstance().initialize(data);
    }

    public onPressed(): void{
        const data: LoginData = {
            signature: "fake_signature"
        }
        FearthGdk.getInstance().login(data, this.onLoginCompleted.bind(this));
    }

    private onLoginCompleted(errorCode: number): void {
        this.text.string = "err: " + errorCode.toString();
    }
}
