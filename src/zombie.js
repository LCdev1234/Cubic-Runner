import {Point, Orientation, Face3d, Object3d, Collisions} from "./geometry"
import Phaser from 'phaser'

export default class Zombie{

    static all = new Set()

    constructor(x, y, z){
        this.anim = 0
        this.object = /*
            new Object3d([
                new Face3d(
                    [
                        new Point(x - 20, y, z - 95),
                        new Point(x - 20, y-40, z - 95),
                        new Point(x + 20, y-40, z - 95),
                        new Point(x + 20, y, z - 95)
                    ],
                    1,
                    "player0"
                )
            ])*/
           new Object3d([
                new Face3d(
                    [
                        new Point(x + 95, y, z - 20),
                        new Point(x + 95, y-40, z - 20),
                        new Point(x + 95, y-40, z + 20),
                        new Point(x + 95, y, z + 20)
                    ],
                    1,
                    "player0"
                )
            ])
        Zombie.all.add(this)
    }

    update(fps_ratio){
        this.anim += 0.3 * fps_ratio
        this.anim %= 10
        let a_texture = "zombie"
        this.object.faces[0].texture = a_texture + Math.floor(this.anim)
    }
}