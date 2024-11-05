import { _decorator, Component, Label } from 'cc';
import { FearthGdk } from '../../scripts/FearthGdk';
const { ccclass, property } = _decorator;

@ccclass('TestController')
export class TestController extends Component {

    @property({type: Label})
    public text: Label = null!;

    protected start(): void {
        this.text.string = FearthGdk.initialize().toString();
    }

    public onPressed(): void{
        FearthGdk.initialize()
    }
}


