import {Point, Orientation, Face3d, Object3d, Collisions} from "./geometry"
import Phaser from 'phaser'

export default class Player{
    constructor(x, y, z, input, general_cube){
        this.x = x
        this.y = y
        this.z = z
        this.input = input
        this.y_speed = 0
        this.x_speed = 0
        this.z_speed = 0
        this.can_down = true
        this.anim = 0
        this.object = 
        new Object3d([
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
        this.general_cube = general_cube
    }

    update(fps_ratio, rotation, rubik_rotation){
        //Constant Variables
        const gravity = 0.8
        const friction = 0.7

        //Input
        let input_x = this.input.cursors.right.isDown - this.input.cursors.left.isDown
        let input_z = this.input.cursors.up.isDown - this.input.cursors.down.isDown
        let jump = this.input.cursors.space.isDown
        let radians = rotation.y * Math.PI / 180

        //Change player speed
        this.x_speed += (input_x * Math.cos(radians) - input_z * Math.sin(radians)) * 1.5 * fps_ratio
        this.z_speed += (input_x * Math.sin(radians) + input_z * Math.cos(radians)) * 1.5 * fps_ratio
        this.y_speed += gravity * fps_ratio
        if(jump && this.can_down) {
            this.y_speed -= 8
            this.can_down = false
        }
        //Friction
        this.x_speed *= Math.pow(friction, fps_ratio)
        this.z_speed *= Math.pow(friction, fps_ratio)

        //Player movement
        this.x += this.x_speed * fps_ratio
        this.y += this.y_speed * fps_ratio
        this.z += this.z_speed * fps_ratio

        //Collisions
        this.collisions(rubik_rotation)


        let x = this.x * Math.cos(-rotation.y * Math.PI / 180) - this.z * Math.sin(-rotation.y * Math.PI / 180)
        let z = this.x * Math.sin(-rotation.y * Math.PI / 180) + this.z * Math.cos(-rotation.y * Math.PI / 180)

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
    collisions(rubik_rotation){
        //Check for rotations
        let rotated = false
        let rotated_side = []
        if(!rotated){
            for(let x of rubik_rotation.x){
                if(x != 0){
                    rotated_side = rubik_rotation.x
                    rotated = true
                }
            }
        }
        if(!rotated){
            for(let y of rubik_rotation.y){
                if(y != 0){
                    rotated_side = rubik_rotation.y
                    rotated = true
                }
            }
        }
        if(!rotated){
            for(let z of rubik_rotation.z){
                if(z != 0){
                    rotated_side = rubik_rotation.z
                    rotated = true
                }
            }
        }

        if(!rotated){
            for(let face of this.general_cube.faces){
                let points = face.points
                let t1 = [points[0], points[1], points[3]]
                let t2 = [points[1], points[2], points[3]]

                let touching = Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t1[0], t1[1], t1[2]) || Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t2[0], t2[1], t2[2])
                while (touching){
                    this.y -= 1
                    this.y_speed = 0
                    this.can_down = true
                    touching = Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t1[0], t1[1], t1[2]) || Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t2[0], t2[1], t2[2])
                }
            }
        }
        /*if(this.y > 0){
            this.y = 0
            this.y_speed = 0
            this.can_down = true
        }*/
    }
}