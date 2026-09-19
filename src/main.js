import './style.css'
import Phaser from 'phaser'
import {Point, Orientation, Face3d, Object3d} from "./geometry"
import Cube from "./cubes"
import Player from "./player"


class MainScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    preload() {
        this.load.image
        (
            "red",
            "./assets/red.png"
        )
        this.load.image
        (
            "green",
            "./assets/green.png"
        )
        this.load.image
        (
            "white",
            "./assets/white.png"
        )
        this.load.image
        (
            "blue",
            "./assets/blue.png"
        )
        this.load.image
        (
            "yellow",
            "./assets/yellow.png"
        )
        this.load.image
        (
            "orange",
            "./assets/orange.png"
        )

        //Player
        this.load.image
        (
            "player0",
            "./assets/player/player0000.png"
        )
        this.load.image
        (
            "player1",
            "./assets/player/player0001.png"
        )
        this.load.image
        (
            "player2",
            "./assets/player/player0002.png"
        )
        this.load.image
        (
            "player3",
            "./assets/player/player0003.png"
        )
        this.load.image
        (
            "player4",
            "./assets/player/player0004.png"
        )
        this.load.image
        (
            "player5",
            "./assets/player/player0005.png"
        )
        this.load.image
        (
            "player6",
            "./assets/player/player0006.png"
        )
        this.load.image
        (
            "player7",
            "./assets/player/player0007.png"
        )
        this.load.image
        (
            "player_shift0",
            "./assets/player/player_shift0000.png"
        )
        this.load.image
        (
            "player_shift1",
            "./assets/player/player_shift0001.png"
        )
        this.load.image
        (
            "player_shift2",
            "./assets/player/player_shift0002.png"
        )
        this.load.image
        (
            "player_shift3",
            "./assets/player/player_shift0003.png"
        )
        this.load.image
        (
            "player_shift4",
            "./assets/player/player_shift0004.png"
        )
        this.load.image
        (
            "player_shift5",
            "./assets/player/player_shift0005.png"
        )
        this.load.image
        (
            "player_shift6",
            "./assets/player/player_shift0006.png"
        )
        this.load.image
        (
            "player_shift7",
            "./assets/player/player_shift0007.png"
        )
    }

    create() {
        //Set scaling method for pixel images
        for (let i = 0; i < 8; i++) {
            this.textures.get(`player${i}`).setFilter(
                Phaser.Textures.FilterMode.NEAREST
            );
        }
        for (let i = 0; i < 8; i++) {
            this.textures.get(`player_shift${i}`).setFilter(
                Phaser.Textures.FilterMode.NEAREST
            );
        }

        //Color map
        this.colorMap = {
            "white": 0xffffff,
            "blue": 0x0000ff,
            "yellow": 0xffff00,
            "orange": 0xffa500,
            "green": 0x00ff00,
            "red": 0xff0000,
            "": 0x000000
        }

        //Graphic canvas
        this.cube_graphics = this.add.graphics()
        this.cube_graphics.setDefaultStyles({
            lineStyle: {
                width: 5,
                color: 0x00ff00,
                alpha: 1,
            },
            fillStyle: {
                color: 0x00ff00,
                alpha: 1,
            },
        });
        this.cube_graphics.setVisible(false)
        this.cube_graphics.setDepth(0)
        //Canvas
        this.canvas = this.add.renderTexture(0, 0, this.scale.width, this.scale.height)
        this.canvas.setOrigin(0, 0)
        this.canvas.setDepth(1)
        // Corrected code
        this.scale.on("resize", (gameSize) => {
            const { width, height } = gameSize;
            this.canvas.resize(width, height);
            this.canvas.setPosition(0, 0);
        });
        
        //Keys
        this.input = {
            cursors: this.input.keyboard.createCursorKeys(),
            w: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
            s: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
            d: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
            a: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
            z: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z),
            x: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.X),
            shift: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT)
        }

        //Mesh
        const vertices = [
            0, 0, 0, 0,   // 0: top-left
            0, 200, 0, 1,   // 1: bottom-left
            500, 500, 1, 1,   // 2: bottom-right
            500, 0, 1, 0    // 3: top-right
        ]

        const indices = [
            0, 1, 2, 0, //Triangle 1
            0, 2, 3, 0  //Triangle 2
        ]

        this.face = this.add.mesh2d(
            0,
            0,
            "green",
            vertices,
            indices
        )
        this.face.setDepth(1)
        this.face.setVisible(false)

        //Rendering initialization
        this.cube = new Cube(30, 45, 0)

        //Player
        this.player = new Player(0, -50, 0, this.input, this.cube.general_cube)

        //Normal and separated 3d objects
        this.visible_objects = 
        [
            this.player.object
        ]
        //Rubik cube object
        this.visible_cubes = [this.cube]

        //Text
        this.cords = this.add.text(this.scale.width - 200, 50, "", {})
        this.cords.setStyle({
            "color":"white",
            "fontFamily":"arial",
            "fontSize":"30px"})
        //Cube upper face show
        /*
        this.upface = [
            [this.add.rectangle(70, 70, 100, 100, 0xff0000), this.add.rectangle(170, 70, 100, 100, 0xff0000), this.add.rectangle(270, 70, 100, 100, 0xff0000)],
            [this.add.rectangle(70, 170, 100, 100, 0xff0000), this.add.rectangle(170, 170, 100, 100, 0xff0000), this.add.rectangle(270, 170, 100, 100, 0xff0000)],
            [this.add.rectangle(70, 270, 100, 100, 0xff0000), this.add.rectangle(170, 270, 100, 100, 0xff0000), this.add.rectangle(270, 270, 100, 100, 0xff0000)]
        ]*/
        //this.player_indicator = this.add.circle(170, 170, 30, 0x572364)
    }

    update(time, delta) {
        //Input

        this.canvas.clear()
        //Constant variables
        let width = this.scale.width
        let height = this.scale.height
        const fps = 1000 / delta
        const fps_ratio = Math.min(60 / fps, 2)
        //Clear Screen
        this.cube_graphics.clear()

        //Update Cube
        this.cube.update(fps_ratio)

        //Update Player
        this.player.update(fps_ratio, this.cube.rotation, this.cube.rubik_rotation, this.cube.actual_anim_rotations)

        //Debug
        /*this.cords.text = "\"" + Math.floor(this.player.x) + ", " + Math.floor(this.player.z) + "\""
        for(let x = 0; x < this.upface.length; x++){
            for(let z = 0; z < this.upface[x].length; z++){
                this.upface[x][z].setFillStyle(this.colorMap[this.cube.face_colors[0][z][x]])
            }
        }
        this.player_indicator.setPosition(Math.floor((this.player.x + 90)/60)*100 + 70, 70 + Math.floor((this.player.z + 90)/60)*100)
        //console.log(Math.floor((this.player.x + 90)/60))
        //this.cube.rubik_rotation.x[Math.floor((this.player.x + 90)/60)] += 0.1*/
        if(this.player.push){
            this.player.second_jump = time - this.player.last_jump_time < 600
            this.player.last_jump_time = time

            let playerInfo = this.player.getAxis()
            let smallest_axis = playerInfo.smallest_axis
            let smallest_direction = playerInfo.smallest_direction

            let index = -1
            if(smallest_axis == "x") index = Math.floor((this.player.x + 90)/60)
            else index = Math.floor((this.player.z + 90)/60)
            //this.cube.rubik_rotate(smallest_axis, index, smallest_direction)
            if(this.player.second_jump && this.cube.last_rotated_axis == smallest_axis && this.cube.last_rotated_index == index){
                this.cube.rubik_rotate(smallest_axis, index, smallest_direction)
                this.player.last_jump_time = 0
            }else{
                this.cube.rubik_animation(smallest_axis, index, smallest_direction)
            }
        }
        //Moving tiles
        if(this.player.state == "shift" && this.player.can_down && !this.cube.getActualRotationIndex().includes(Math.floor((this.player[this.cube.getActualRotationAxis()] + 90)/60))){
            let player_index_x = Math.floor((this.player.x + 90)/60)
            let player_index_z = Math.floor((this.player.z + 90)/60)

            if(this.cube.face_colors[0]?.[player_index_x]?.[player_index_z] != undefined && 
            this.cube.face_colors[0][player_index_x][player_index_z] != "" &&
            this.cube.moving_color.x == -1 && this.cube.moving_color.z == -1){
                this.player.can_shift = true
                this.player.shift_cooldown = 0

                this.cube.moving_color.color = this.cube.face_colors[0][player_index_x][player_index_z]
                this.cube.moving_color.x = player_index_x
                this.cube.moving_color.z = player_index_z
                this.cube.face_colors[0][player_index_x][player_index_z] = ""
                this.cube.update_colors()
            }
            if(this.player.can_shift){
                if(this.player.final_slide.finish){
                    this.player.final_slide.finish = false;
                    this.cube.moving_color.x += this.player.final_slide.x
                    this.cube.moving_color.z += this.player.final_slide.z
                }

                this.cube.setTilePosition(this.cube.moving_color.x, this.cube.moving_color.z)
                this.cube.setTileVisibility(this.cube.moving_color.color)
                this.cube.setTileY(Math.min(15, this.player.shift_timer) + Math.sin(this.player.timer/10)*3)
                
                if(this.player.can_slide){
                    this.cube.setTileMovement(this.player.sliding.x*60 / (5/this.player.slider_timer),
                    this.player.sliding.z*60 / (5/this.player.slider_timer))
                }

                //input
                let tile_input = {}
                tile_input.x = this.input.d.isDown - this.input.a.isDown
                tile_input.z = this.input.w.isDown - this.input.s.isDown
                if(this.player.shift_cooldown > 8){
                    if(tile_input.x != 0){
                        let next_color = this.cube.face_colors[0]?.[this.cube.moving_color.x + tile_input.x]?.[this.cube.moving_color.z]
                        if(next_color != undefined && next_color == ""){
                            if(this.cube.getActualRotationAxis() == "x"){
                                if(!this.cube.getActualRotationIndex().includes(this.cube.moving_color[this.cube.getActualRotationAxis()] + tile_input.x)){
                                    this.player.can_slide = true
                                    this.player.slider_timer = 0
                                    this.player.sliding.x = tile_input.x
                                    this.player.shift_cooldown = 0
                                }
                            }else{
                                this.player.can_slide = true
                                this.player.slider_timer = 0
                                this.player.sliding.x = tile_input.x
                                this.player.shift_cooldown = 0
                            }
                        }
                    }
                    if(tile_input.z != 0 && this.player.shift_cooldown > 8){
                        let next_color = this.cube.face_colors[0]?.[this.cube.moving_color.x]?.[this.cube.moving_color.z + tile_input.z]
                        if(next_color != undefined && next_color == ""){
                            if(this.cube.getActualRotationAxis() == "z"){
                                if(!this.cube.getActualRotationIndex().includes(this.cube.moving_color[this.cube.getActualRotationAxis()] + tile_input.z)){
                                    this.player.can_slide = true
                                    this.player.slider_timer = 0
                                    this.player.sliding.z = tile_input.z
                                    this.player.shift_cooldown = 0
                                }
                            }else{
                                this.player.can_slide = true
                                this.player.slider_timer = 0
                                this.player.sliding.z = tile_input.z
                                this.player.shift_cooldown = 0
                            }
                        }
                    }
                    
                }
            }
        }else {
            this.player.can_shift = false
        }
        if(!this.player.can_shift){
            if(Math.max(0, this.player.shift_timer) > 0){
                this.cube.setTileY(Math.max(0, this.player.shift_timer))
            }else{
                this.cube.setTileVisibility("")
                if(this.cube.moving_color.color != ""){
                    this.cube.face_colors[0][this.cube.moving_color.x][this.cube.moving_color.z] = this.cube.moving_color.color
                    this.cube.moving_color.x = -1
                    this.cube.moving_color.z = -1
                    this.cube.moving_color.color = ""
                    this.cube.update_colors()
                }
            }
        }

        //Object Rendering
        let draw_faces = []
        for(let object of this.visible_objects){
            for(let face of object.faces){
                draw_faces.push(face.transform(this.cube.rotation.x, 0, 0).projection().translation(width/2, height/2))
            }
        }
        for(let cube of this.visible_cubes){
            for(let face of cube.calculate(width, height)){
                draw_faces.push(face)
            }
        }

        let sorted_faces = []
        {
            let n = 0;
            for(let draw_face of draw_faces){
                let avarageZ = getAvarageZ(draw_face.points)
                sorted_faces.push({index: n, z: avarageZ})
                n++
            }
        }
        sorted_faces.sort((a, b) => b.z - a.z)
        for(let face_sort of sorted_faces){
            let face = draw_faces[face_sort.index]

            let depth = (face_sort.z - 350) / (600 - 350)
            depth *= 0.4
            drawFace(this.cube_graphics, face.points, face.color, depth, this.canvas, this.face, face.texture, face.flipX)
        }

        //Cube rotation by player
        /*
        if (this.input.w.isDown) {
            this.cube.rotation.x += 1
        }
        if (this.input.s.isDown) {
            this.cube.rotation.x += -1
        }
        if (this.input.a.isDown) {
            this.cube.rotation.y += 1
        }
        if (this.input.d.isDown) {
            this.cube.rotation.y += -1
        }
        */
        //this.cube.rotation.y += 0.1;
        //this.rx += 0.1;
        this.cube.rotation.y = this.cube.rotation.y % 360
        this.cube.rotation.x = this.cube.rotation.x % 360
    }
}


const config = {
    type: Phaser.AUTO,
    parent: "gameCanvas",
    backgroundColor: "#061132",
    scale: {
        mode: Phaser.Scale.RESIZE,
        //autoCenter: Phaser.Scale.CENTER_BOTH,
        width: "100%",
        height: "100%",
    },
    scene: [MainScene]
}

const game = new Phaser.Game(config)

function drawFace(graphics, face, color, darkness, canvas, mesh, texture, flipX){
    //Draw Solid
    if(color != 1){
        graphics.fillStyle(color, 1)
        graphics.beginPath()
        graphics.moveTo(face[0].x, face[0].y)
        for(let point of face){
            graphics.lineTo(point.x, point.y)
        }
        graphics.moveTo(face[0].x, face[0].y)
        graphics.closePath()
        graphics.fillPath()

        graphics.fillStyle(0x000000, darkness)
        graphics.beginPath()
        graphics.moveTo(face[0].x, face[0].y)
        for(let point of face){
            graphics.lineTo(point.x, point.y)
        }
        graphics.moveTo(face[0].x, face[0].y)
        graphics.closePath()
        graphics.fillPath()
        canvas.draw(graphics, 0, 0)
        canvas.render()
        graphics.clear()
    }
    
    //Draw Texture
    if(texture != ""){
        const vertices = [
                face[0].x, face[0].y, 0, 0,   // 0: top-left
                face[1].x, face[1].y, 0, 1,   // 1: bottom-left
                face[2].x, face[2].y, 1, 1,   // 2: bottom-right
                face[3].x, face[3].y, 1, 0    // 3: top-right
            ]
        if(flipX){
            mesh.vertices = flipTexture(vertices)
        }else{
            mesh.vertices = vertices
        }
        mesh.setTexture(texture)
        canvas.draw(mesh, 0, 0)
        canvas.render()
    }
}

function getAvarageZ(face){
    let sum = 0
    for(let point of face){
        if(point.depth > sum) sum = point.depth
        //sum += point.depth
    }
    return(sum)
}

function flipTexture(vertices) {
    const flipped = [...vertices];

    for (let i = 0; i < flipped.length; i += 4) {
        flipped[i + 2] = 1 - flipped[i + 2];
    }

    return flipped;
}