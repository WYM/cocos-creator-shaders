import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass
export class AutoRotate extends Component {
    
    @property
    public speed: number = 10;
    private _cntTime: number = 0;

    start () {
    }

    update (deltaTime: number) {
        this._cntTime += deltaTime;
        this.node.setRotationFromEuler(this._cntTime * this.speed, this._cntTime * this.speed, this._cntTime * this.speed);
    }
}
