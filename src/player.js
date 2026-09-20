import {Point, Orientation, Face3d, Object3d, Collisions} from "./geometry"
import Phaser from 'phaser'

export default class Player{
    constructor(x, y, z, input, general_cube){
        this.x = x
        this.y = y
        this.z = z
        this.state = "iddle"
        this.input = input
        this.y_speed = 0
        this.x_speed = 0
        this.z_speed = 0
        this.can_down = true
        this.can_shift = true
        this.anim = 0
        this.last_jump_time = 0
        this.second_jump = false
        this.jump_timer = 50
        this.shift_cooldown = 0
        this.timer = 0
        this.shift_timer = 0
        this.slider_timer = 0
        this.sliding = {x: 0, z:0}
        this.final_slide = {x: 0, z: 0, finish: false}
        this.can_slide = false
        this.kinetic_jump = 0
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

    update(fps_ratio, rotation, rubik_rotation, actual_rotation){
        //Constant Variables
        const gravity = 0.8
        const friction = 0.7

        //Time
        this.shift_cooldown += 1 * fps_ratio
        this.jump_timer += 1 * fps_ratio
        this.timer += 1 *fps_ratio
        if(this.can_slide) this.slider_timer += 1 * fps_ratio
        if(!this.can_down) this.kinetic_jump += 1 * fps_ratio

        //Input
        let input_x = this.input.d.isDown - this.input.a.isDown
        let input_z = this.input.w.isDown - this.input.s.isDown
        let jump = this.input.cursors.space.isDown
        let shift = this.input.shift.isDown
        let radians = rotation.y * Math.PI / 180

        if(shift){
            this.state = "shift"
        }else{
            if(input_x == 0){
                this.state = "iddle"
            }else if(input_x == 1){
                this.state = "r_walk"
            }else if(input_x == -1){
                this.state = "l_walk"
            }
        }

        //Change player speed
        if(!shift){
            this.x_speed += (input_x * Math.cos(radians) - input_z * Math.sin(radians)) * 0.9 * fps_ratio
            this.z_speed += (input_x * Math.sin(radians) + input_z * Math.cos(radians)) * 0.9 * fps_ratio
            if(jump && this.can_down && this.jump_timer > 27) {
                this.jump_timer = 0
                this.y_speed -= 8
                this.can_down = false
                this.kinetic_jump = 0
            }
        }
        /*
        //Floary shift
        if(shift && this.jump_timer < 40){
            this.y_speed = -1
        }else{
            //Gravity
            this.y_speed += gravity * fps_ratio
        }
        */
        //Gravity
        this.y_speed += gravity * fps_ratio
        //Friction
        this.x_speed *= Math.pow(friction, fps_ratio)
        this.z_speed *= Math.pow(friction, fps_ratio)

        //Player movement
        this.just_down = false
        this.push = false
        const steps = Math.ceil(fps_ratio)*2
        for(let i = 0; i < steps; i++){
            this.x += (this.x_speed * fps_ratio) /steps
            this.y += (this.y_speed * fps_ratio) /steps
            this.z += (this.z_speed * fps_ratio) /steps

            //Collisions
            this.collisions(rubik_rotation, actual_rotation)
        }


        let extra_x = 0
        let extra_z = 0
        let y = this.y
        if(this.can_shift){
            y -= Math.min(15, this.shift_timer) + Math.sin(this.timer/10)*3
            this.shift_timer += 2 * fps_ratio
            if(this.shift_timer > 15){
                this.shift_timer = 15
            }
            if(this.can_slide){
                if(this.slider_timer <=5){
                    extra_x += this.sliding.x*60 / (5/this.slider_timer)
                    extra_z += this.sliding.z*60 / (5/this.slider_timer)
                }else{
                    this.x += this.sliding.x * 60
                    this.z += this.sliding.z * 60
                    this.final_slide = {x: this.sliding.x, z: this.sliding.z, finish: true}
                    this.can_slide = false
                    this.sliding.x = 0
                    this.sliding.z = 0
                }
            }
        }else{
            y -= Math.max(0, this.shift_timer)
            this.shift_timer -= 2 * fps_ratio
            if(this.shift_timer < 0){
                this.shift_timer = 0
            }

            this.can_slide = false
            this.sliding.x = 0
            this.sliding.z = 0
        }
        let x = (this.x + extra_x) * Math.cos(-rotation.y * Math.PI / 180) - (this.z + extra_z) * Math.sin(-rotation.y * Math.PI / 180)
        let z = (this.x + extra_x) * Math.sin(-rotation.y * Math.PI / 180) + (this.z + extra_z) * Math.cos(-rotation.y * Math.PI / 180)
        

        //Aniamtion
        if(this.can_down) this.kinetic_jump -= 1.2 * fps_ratio
        this.kinetic_jump = Math.max(this.kinetic_jump, 0)
        let amount = 1.5
        let extra_amount = 0
        if(this.can_down) extra_amount += this.kinetic_jump

        const speed = 0.2
        const breath_animation = Math.sin(this.timer*speed)
        const squishY = 1 + breath_animation*amount + extra_amount*0.7
        const squishX = 1 - breath_animation*amount - extra_amount
        this.anim += 0.2 * fps_ratio
        let a_texture = "player"
        if(this.state == "iddle"){
            this.anim = this.anim%8
        }else if(this.state == "r_walk"){
            this.object.faces[0].flipX = false
            this.anim = this.anim%8
        }else if(this.state == "l_walk"){
            this.object.faces[0].flipX = true
            this.anim = this.anim%8
        }else if(this.state == "shift"){
            a_texture = "player_shift"
            this.anim = this.anim%8
        }
        this.object.faces[0].texture = a_texture + Math.floor(this.anim)
        this.object.faces[0].points = 
        [
            new Point(x - 15 + squishX/2, y-90, z + 0),
            new Point(x - 15 + squishX/2, y-120+squishY, z - 0),
            new Point(x + 15 - squishX/2, y-120+squishY, z - 0),
            new Point(x + 15 - squishX/2, y-90, z + 0)
        ]
    }
    collisions(rubik_rotation, rotations){
        //Check for rotations
        let final_rotated_cube = {faces: []}
        let rotated = false
        let rotated_side = []
        /*
        if(rotations.size > 0){
            rotated_side = rotations.values().next().value.axis
            rotated = true
        }*/
        for(let x of rubik_rotation.x){
            if(x != 0){
                rotated_side.push("x")
                rotated = true
                break
            }
        }

        for(let y of rubik_rotation.y){
            if(y != 0){
                rotated_side.push("y")
                rotated = true
                break
            }
        }

        for(let z of rubik_rotation.z){
            if(z != 0){
                rotated_side.push("z")
                rotated = true
                break
            }
        }
        
        if(!rotated){
            for(let face of this.general_cube.faces){
                let points = face.points
                let t1 = [points[0], points[1], points[3]]
                let t2 = [points[1], points[2], points[3]]

                let col1 = Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t1[0], t1[1], t1[2])
                let col2 = Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t2[0], t2[1], t2[2])

                if(col2.collision){
                    this.x += col2.distance * col2.direction.x
                    this.y += col2.distance * col2.direction.y
                    this.z += col2.distance * col2.direction.z
                    if(col2.normals.y == -1 && this.y < 150){
                        this.y_speed = 0
                        if(!this.can_down && !this.just_down) {
                            this.push = true
                            this.just_down = true
                        }else if(!this.just_down) this.push = false
                        this.can_down = true
                    }
                }
                if(col1.collision){
                    this.x += col1.distance * col1.direction.x
                    this.y += col1.distance * col1.direction.y
                    this.z += col1.distance * col1.direction.z
                    if(col1.normals.y == -1 && this.y < 150){
                        this.y_speed = 0
                        if(!this.can_down && !this.just_down) {
                            this.push = true
                            this.just_down = true
                        }else if(!this.just_down) this.push = false
                        this.can_down = true
                    }
                }
            }
        }else {
            let rotated_cube = new Object3d([])
            let x_faces = [this.general_cube.faces[5], this.general_cube.faces[3]]
            let y_faces = [this.general_cube.faces[0], this.general_cube.faces[1]]
            let z_faces = [this.general_cube.faces[2], this.general_cube.faces[4]]
            if(rotated_side.includes("x")){
                const x_distance = (x_faces[1].points[0].x - x_faces[0].points[0].x) / 3

                //First Division
                if(rubik_rotation["x"][0] != 0) {
                    const rotation = rubik_rotation["x"][0]
                    rotated_cube.add_faces(x_faces[0].transform(rotation, 0, 0))
                    rotated_cube.add_faces(x_faces[0].translation(x_distance, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(y_faces[0].substract(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(y_faces[1].substract(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(z_faces[0].substract(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(z_faces[1].substract(x_distance*2, 0, 0).transform(rotation, 0, 0))
                }else{
                    rotated_cube.add_faces(x_faces[0])
                    rotated_cube.add_faces(x_faces[0].translation(x_distance, 0, 0))
                    rotated_cube.add_faces(y_faces[0].substract(x_distance*2, 0, 0))
                    rotated_cube.add_faces(y_faces[1].substract(x_distance*2, 0, 0))
                    rotated_cube.add_faces(z_faces[0].substract(x_distance*2, 0, 0))
                    rotated_cube.add_faces(z_faces[1].substract(x_distance*2, 0, 0))
                }

                //Second Division
                if(rubik_rotation["x"][1] != 0) {
                    const rotation = rubik_rotation["x"][1]
                    rotated_cube.add_faces(x_faces[0].translation(x_distance, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(x_faces[0].translation(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(y_faces[0].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(y_faces[1].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(z_faces[0].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(z_faces[1].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0).transform(rotation, 0, 0))
                }else{
                    rotated_cube.add_faces(x_faces[0].translation(x_distance, 0, 0))
                    rotated_cube.add_faces(x_faces[0].translation(x_distance*2, 0, 0))
                    rotated_cube.add_faces(y_faces[0].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0))
                    rotated_cube.add_faces(y_faces[1].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0))
                    rotated_cube.add_faces(z_faces[0].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0))
                    rotated_cube.add_faces(z_faces[1].substract(x_distance*2, 0, 0).translation(x_distance, 0, 0))
                }

                //Third Division
                if(rubik_rotation["x"][2] != 0) {
                    const rotation = rubik_rotation["x"][2]
                    rotated_cube.add_faces(x_faces[0].translation(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(x_faces[0].translation(x_distance*3, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(y_faces[0].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(y_faces[1].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(z_faces[0].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0).transform(rotation, 0, 0))
                    rotated_cube.add_faces(z_faces[1].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0).transform(rotation, 0, 0))
                }else{
                    rotated_cube.add_faces(x_faces[0].translation(x_distance*2, 0, 0))
                    rotated_cube.add_faces(x_faces[0].translation(x_distance*3, 0, 0))
                    rotated_cube.add_faces(y_faces[0].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0))
                    rotated_cube.add_faces(y_faces[1].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0))
                    rotated_cube.add_faces(z_faces[0].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0))
                    rotated_cube.add_faces(z_faces[1].substract(x_distance*2, 0, 0).translation(x_distance*2, 0, 0))
                }
            }
            if(rotated_side.includes("y")){
                const y_distance = (y_faces[1].points[0].y - y_faces[0].points[0].y) / 3

                //First Division
                if(rubik_rotation["y"][0] != 0) {
                    const rotation = rubik_rotation["y"][0]
                    rotated_cube.add_faces(y_faces[0].transform(0, rotation, 0))
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(x_faces[0].substract(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(x_faces[1].substract(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(z_faces[0].substract(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(z_faces[1].substract(0, y_distance*2, 0).transform(0, rotation, 0))
                }else{
                    rotated_cube.add_faces(y_faces[0])
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance, 0))
                    rotated_cube.add_faces(x_faces[0].substract(0, y_distance*2, 0))
                    rotated_cube.add_faces(x_faces[1].substract(0, y_distance*2, 0))
                    rotated_cube.add_faces(z_faces[0].substract(0, y_distance*2, 0))
                    rotated_cube.add_faces(z_faces[1].substract(0, y_distance*2, 0))
                }

                //Second Division
                if(rubik_rotation["y"][1] != 0) {
                    const rotation = rubik_rotation["y"][1]
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(x_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(x_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(z_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(z_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance, 0).transform(0, rotation, 0))
                }else{
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance, 0))
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance*2, 0))
                    rotated_cube.add_faces(x_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance, 0))
                    rotated_cube.add_faces(x_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance, 0))
                    rotated_cube.add_faces(z_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance, 0))
                    rotated_cube.add_faces(z_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance, 0))
                }

                //Third Division
                if(rubik_rotation["y"][2] != 0) {
                    const rotation = rubik_rotation["y"][2]
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance*3, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(x_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(x_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(z_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0).transform(0, rotation, 0))
                    rotated_cube.add_faces(z_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0).transform(0, rotation, 0))
                }else{
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance*2, 0))
                    rotated_cube.add_faces(y_faces[0].translation(0, y_distance*3, 0))
                    rotated_cube.add_faces(x_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0))
                    rotated_cube.add_faces(x_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0))
                    rotated_cube.add_faces(z_faces[0].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0))
                    rotated_cube.add_faces(z_faces[1].substract(0, y_distance*2, 0).translation(0, y_distance*2, 0))
                }
            }

            if(rotated_side.includes("z")){
                const z_distance = (z_faces[1].points[0].z - z_faces[0].points[0].z) / 3

                //First Division
                if(rubik_rotation["z"][0] != 0) {
                    const rotation = rubik_rotation["z"][0]
                    rotated_cube.add_faces(z_faces[0].transform(0, 0, rotation))
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance).transform(0, 0, rotation))
                    rotated_cube.add_faces(x_faces[0].substract(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(x_faces[1].substract(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(y_faces[0].substract(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(y_faces[1].substract(0, 0, z_distance*2).transform(0, 0, rotation))
                }else{
                    rotated_cube.add_faces(z_faces[0])
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance))
                    rotated_cube.add_faces(x_faces[0].substract(0, 0, z_distance*2))
                    rotated_cube.add_faces(x_faces[1].substract(0, 0, z_distance*2))
                    rotated_cube.add_faces(y_faces[0].substract(0, 0, z_distance*2))
                    rotated_cube.add_faces(y_faces[1].substract(0, 0, z_distance*2))
                }

                //Second Division
                if(rubik_rotation["z"][1] != 0) {
                    const rotation = rubik_rotation["z"][1]
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance).transform(0, 0, rotation))
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(x_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance).transform(0, 0, rotation))
                    rotated_cube.add_faces(x_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance).transform(0, 0, rotation))
                    rotated_cube.add_faces(y_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance).transform(0, 0, rotation))
                    rotated_cube.add_faces(y_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance).transform(0, 0, rotation))
                }else{
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance))
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance*2))
                    rotated_cube.add_faces(x_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance))
                    rotated_cube.add_faces(x_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance))
                    rotated_cube.add_faces(y_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance))
                    rotated_cube.add_faces(y_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance))
                }

                //Third Division
                if(rubik_rotation["z"][2] != 0) {
                    const rotation = rubik_rotation["z"][2]
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance*3).transform(0, 0, rotation))
                    rotated_cube.add_faces(x_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(x_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(y_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2).transform(0, 0, rotation))
                    rotated_cube.add_faces(y_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2).transform(0, 0, rotation))
                }else{
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance*2))
                    rotated_cube.add_faces(z_faces[0].translation(0, 0, z_distance*3))
                    rotated_cube.add_faces(x_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2))
                    rotated_cube.add_faces(x_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2))
                    rotated_cube.add_faces(y_faces[0].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2))
                    rotated_cube.add_faces(y_faces[1].substract(0, 0, z_distance*2).translation(0, 0, z_distance*2))
                }
            }
            

            //Collision
            final_rotated_cube = rotated_cube
            for(let face of rotated_cube.faces){
                let points = face.points
                let t1 = [points[0], points[1], points[3]]
                let t2 = [points[1], points[2], points[3]]

                let col1 = Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t1[0], t1[1], t1[2])
                let col2 = Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t2[0], t2[1], t2[2])
                
                if(col2.collision){
                    this.x += col2.distance * col2.direction.x
                    this.y += col2.distance * col2.direction.y
                    this.z += col2.distance * col2.direction.z
                    if(col2.normals.y == -1 && this.y < 150){
                        this.y_speed = 0
                        if(!this.can_down && !this.just_down) {
                            this.push = true
                            this.just_down = true
                        }else if(!this.just_down) this.push = false
                        this.can_down = true
                    }else if(Math.abs(col2.normals.y) < 1 && Math.abs(col2.normals.y) > 0.1 && this.y < 150){
                        this.y_speed = 0.8
                        if(!this.can_down && !this.just_down) {
                            this.push = true
                            this.just_down = true
                        }else if(!this.just_down) this.push = false
                        this.can_down = true
                    }
                }
                if(col1.collision){
                    this.x += col1.distance * col1.direction.x
                    this.y += col1.distance * col1.direction.y
                    this.z += col1.distance * col1.direction.z
                    if(col1.normals.y == -1 && this.y < 150){
                        this.y_speed = 0
                        if(!this.can_down && !this.just_down) {
                            this.push = true
                            this.just_down = true
                        }else if(!this.just_down) this.push = false
                        this.can_down = true
                    }else if(Math.abs(col1.normals.y) < 1 && Math.abs(col1.normals.y) > 0.1 && this.y < 150){
                        this.y_speed = 0.8
                        if(!this.can_down && !this.just_down) {
                            this.push = true
                            this.just_down = true
                        }else if(!this.just_down) this.push = false
                        this.can_down = true
                    }
                }
            }
        }
        
        if(this.x > -80 && this.x < 80 && this.z < 80 && this.z > -80 && this.y > 90 && this.y < 180) this.y = -5
        if(rotations.size > 0){
            for(let i of rotations){
                if(i.axis == "x"){
                    if(i.index == Math.floor((this.x + 90)/60)){
                        
                    }else{
                        if(this.x < -80 && this.x > -90) this.x = -80
                        if(this.x > 80 && this.x < 90) this.x = 80
                        if(this.z < -80 && this.z > -90) this.z = -80
                        if(this.z > 80 && this.z < 90) this.z = 80
                    }
                }else if(i.axis == "z"){
                    if(i.index == Math.floor((this.z + 90)/60)){
                        
                    }else{
                        if(this.x < -80 && this.x > -90) this.x = -80
                        if(this.x > 80 && this.x < 90) this.x = 80
                        if(this.z < -80 && this.z > -90) this.z = -80
                        if(this.z > 80 && this.z < 90) this.z = 80
                    }
                }
            }
        }else{
            if(this.x < -80 && this.x > -90) this.x = -80
            if(this.x > 80 && this.x < 90) this.x = 80
            if(this.z < -80 && this.z > -90) this.z = -80
            if(this.z > 80 && this.z < 90) this.z = 80
        }
        //Collision
        for(let face of final_rotated_cube.faces){
            let points = face.points
            let t1 = [points[0], points[1], points[3]]
            let t2 = [points[1], points[2], points[3]]
            
            while(Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t1[0], t1[1], t1[2]).collision){
                this.y -= 0.1
            }
            while(Collisions.CheckTriangle(new Point(this.x, this.y-100, this.z), t2[0], t2[1], t2[2]).collision){
                this.y -= 0.1
            }
        }
    }
    
    getAxis(){
        const z_up = {x: -90, z:0}
        const z_down = {x: 90, z:0}
        const x_up = {x:0, z:90}
        const x_down = {x:0, z:-90}

        z_up.distance = (z_up.x - this.x)**2 + (z_up.z - this.z)**2
        z_down.distance = (z_down.x - this.x)**2 + (z_down.z - this.z)**2
        x_up.distance = (x_up.x - this.x)**2 + (x_up.z - this.z)**2
        x_down.distance = (x_down.x - this.x)**2 + (x_down.z - this.z)**2
        let smallest_axis = ""
        let smallest_direction = -1
        let smallest = z_up.distance

        if(z_down.distance < smallest){
            smallest = z_down.distance
            smallest_axis = "z"
            smallest_direction = 1
        }else{
            smallest = z_up.distance
            smallest_axis = "z"
            smallest_direction = -1
        }
        if(x_up.distance < smallest){
            smallest = x_up.distance
            smallest_axis = "x"
            smallest_direction = -1
        }
        if(x_down.distance < smallest){
            smallest = x_down.distance
            smallest_axis = "x"
            smallest_direction = 1
        }

        return {smallest: x_up.distance, smallest_axis: smallest_axis, smallest_direction:smallest_direction}
    }
}