import { _decorator, Component, Label, log } from 'cc';
import { FearthGdk } from '../../scripts/FearthGdk';
import { LoginRequest } from '../../scripts/data/LoginRequest';
import { GdkConfigData } from '../../scripts/data/GdkConfigData';
const { ccclass, property } = _decorator;

@ccclass('TestController')
export class TestController extends Component {

    @property({type: Label})
    public text: Label = null!;

    protected onInitPressed(): void {
        const data: GdkConfigData = {
            gameKey: "game_xyz"
        }
        FearthGdk.getInstance().initialize(data, success => {
            log(`[TestController] <init> finished!!! ${success}`);
            this.text.string = "Init " + success;
        });
    }

    public onLoginPressed(): void{
        const data: LoginRequest = {
            username: "user_abc",
            password: "password_abc"

        }
        FearthGdk.getInstance().login(data, response => {
            log(`[TestController] <login> finished!!! ${JSON.stringify(response)}`);
            this.text.string = "Login Success!!!";
        });
    }
}
