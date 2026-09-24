import {Point, Orientation, Face3d, Object3d, Collisions} from "./geometry"
import Phaser from 'phaser'

export default class Zombie{

    static all = new Set()

    constructor(face, column){
        this.anim = 0
        this.x = 0
        this.y = 90
        this.z = 0
        this.y_speed = 0
        this.up = false
        if(face == 0){
            this.face = "z"
        }else{
            this.face = "x"
        }
        this.column = column
        this.base = []
        
        if(face == 0) {
            this.base = [
                new Point(0, 0, -20),
                new Point(0, -40, -20),
                new Point(0, -40, +20),
                new Point(0, 0, +20)
            ]
            this.z = -60 + column*60
            this.extra = {x: 95, z: 0}
        }else {
            this.base = [
                new Point(-20, 0, 0),
                new Point(-20, -40, 0),
                new Point(20, -40, 0),
                new Point(20, 0, 0)
            ]
            this.x = -60 + column*60
            this.extra = {x: 0, z: -95}
        }
        this.object =
           new Object3d([
                new Face3d(
                    [
                        this.base[0].add(new Point(this.x, this.y, this.z)),
                        this.base[1].add(new Point(this.x, this.y, this.z)),
                        this.base[2].add(new Point(this.x, this.y, this.z)),
                        this.base[3].add(new Point(this.x, this.y, this.z))
                    ],
                    1,
                    "zombie0"
                )
            ])
        this.hand = undefined
        Zombie.all.add(this)
    }

    update(fps_ratio, rotations, actual_rotations, rotation){
        let a_texture = "zombie"

        for(let rotation of rotations){
            if(rotation.axis == this.face){
                if(rotation.index == this.column){
                    if(Math.abs(actual_rotations[rotation.axis][rotation.index]) > 5) this.face = 3
                }
            }
        }

        if(this.face != 3){
            this.y -= 0.2 * fps_ratio
            if(this.y < -65){
                a_texture = "zombie_body"
                if(this.hand == undefined){
                    let x = this.x + this.extra["x"]
                    let z = this.z + this.extra["z"]
                    this.hand = new Object3d([
                        new Face3d(
                            [
                                this.base[0].add(new Point(x, this.y, z)),
                                this.base[1].add(new Point(x, this.y, z)),
                                this.base[2].add(new Point(x, this.y, z)),
                                this.base[3].add(new Point(x, this.y, z))
                            ],
                            1,
                            "zombie_hands"
                        )
                    ])
                }
                this.y -= 0.1 * fps_ratio
                if(this.y < -90){
                    this.y = -90
                    this.hand = undefined
                    this.up = true
                    a_texture = "zombie_atack"

                    //this.x = 0
                    //this.z = 0
                }
            }
            this.anim += 0.3 * fps_ratio
            this.anim %= 10
        }else{
            this.y_speed += 0.4 * fps_ratio
            this.y += this.y_speed
            this.hand = undefined
        }

        let x = this.x + this.extra["x"]
        let z = this.z + this.extra["z"]
        if(this.up){
            x = (this.x + this.extra["x"]) * Math.cos(-rotation.y * Math.PI / 180) - (this.z + this.extra["z"]) * Math.sin(-rotation.y * Math.PI / 180)
            z = (this.x + this.extra["x"]) * Math.sin(-rotation.y * Math.PI / 180) + (this.z + this.extra["z"]) * Math.cos(-rotation.y * Math.PI / 180)
        }

        this.object.faces[0].texture = a_texture + Math.floor(this.anim)
        this.object.faces[0].points = 
        [
            this.base[0].add(new Point(x, this.y, z)),
            this.base[1].add(new Point(x, this.y, z)),
            this.base[2].add(new Point(x, this.y, z)),
            this.base[3].add(new Point(x, this.y, z))
        ]
    }
}