import {Point, Orientation, Face3d, Object3d} from "./geometry"

export default class Player{
    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z
        this.anim = 0
        this.object = new Object3d([
                        new Face3d(
                            [
                                new Point(x - 15, this.y-90, z + 0),
                                new Point(x - 15, this.y-120, z - 0),
                                new Point(x + 15, this.y-120, z - 0),
                                new Point(x + 15, this.y-90, z + 0)
                            ],
                            1,
                            "player0"
                        )
                    ])
    }

    update(fps_ratio, z_rotation){
        let x = this.x * Math.cos(-z_rotation * Math.PI / 180) - this.z * Math.sin(-z_rotation * Math.PI / 180)
        let z = this.x * Math.sin(-z_rotation * Math.PI / 180) + this.z * Math.cos(-z_rotation * Math.PI / 180)

        this.anim += 0.2 * fps_ratio
        this.anim = this.anim%12
        this.object.faces[0].texture = "player" + Math.floor(this.anim)
        this.object.faces[0].points = 
        [
            new Point(x - 15, this.y-90, z + 0),
            new Point(x - 15, this.y-120, z - 0),
            new Point(x + 15, this.y-120, z - 0),
            new Point(x + 15, this.y-90, z + 0)
        ]
    }
}