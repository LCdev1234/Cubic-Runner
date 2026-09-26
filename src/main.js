import './style.css'
import Phaser from 'phaser'
import {Point, Orientation, Face3d, Object3d} from "./geometry"
import Cube from "./cubes"
import Player from "./player"
import Zombie from "./zombie"


class MainScene extends Phaser.Scene {
    constructor() {
        super("game-scene")
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

        //Solve colors
        this.load.image
        (
            "solve_colors",
            "./assets/solve_colors.png"
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

        //Cube solving
        this.load.image
        (
            "sign_background",
            "./assets/sign_background.png"
        )
        this.load.image
        (
            "solve_background",
            "./assets/solve_background.png"
        )

        //Zombie
        this.load.image
        (
            "zombie0",
            "./assets/zombie/zombie0000.png"
        )
        this.load.image
        (
            "zombie1",
            "./assets/zombie/zombie0001.png"
        )
        this.load.image
        (
            "zombie2",
            "./assets/zombie/zombie0002.png"
        )
        this.load.image
        (
            "zombie3",
            "./assets/zombie/zombie0003.png"
        )
        this.load.image
        (
            "zombie4",
            "./assets/zombie/zombie0004.png"
        )
        this.load.image
        (
            "zombie5",
            "./assets/zombie/zombie0005.png"
        )
        this.load.image
        (
            "zombie6",
            "./assets/zombie/zombie0006.png"
        )
        this.load.image
        (
            "zombie7",
            "./assets/zombie/zombie0007.png"
        )
        this.load.image
        (
            "zombie8",
            "./assets/zombie/zombie0008.png"
        )
        this.load.image
        (
            "zombie9",
            "./assets/zombie/zombie0009.png"
        )

        this.load.image
        (
            "zombie_body0",
            "./assets/zombie/zombie_body0000.png"
        )
        this.load.image
        (
            "zombie_body1",
            "./assets/zombie/zombie_body0001.png"
        )
        this.load.image
        (
            "zombie_body2",
            "./assets/zombie/zombie_body0002.png"
        )
        this.load.image
        (
            "zombie_body3",
            "./assets/zombie/zombie_body0003.png"
        )
        this.load.image
        (
            "zombie_body4",
            "./assets/zombie/zombie_body0004.png"
        )
        this.load.image
        (
            "zombie_body5",
            "./assets/zombie/zombie_body0005.png"
        )
        this.load.image
        (
            "zombie_body6",
            "./assets/zombie/zombie_body0006.png"
        )
        this.load.image
        (
            "zombie_body7",
            "./assets/zombie/zombie_body0007.png"
        )
        this.load.image
        (
            "zombie_body8",
            "./assets/zombie/zombie_body0008.png"
        )
        this.load.image
        (
            "zombie_body9",
            "./assets/zombie/zombie_body0009.png"
        )
        this.load.image
        (
            "zombie_hands",
            "./assets/zombie/hands.png"
        )

        this.load.image
        (
            "zombie_atack0",
            "./assets/zombie/zombie_atack0000.png"
        )
        this.load.image
        (
            "zombie_atack1",
            "./assets/zombie/zombie_atack0001.png"
        )
        this.load.image
        (
            "zombie_atack2",
            "./assets/zombie/zombie_atack0002.png"
        )
        this.load.image
        (
            "zombie_atack3",
            "./assets/zombie/zombie_atack0003.png"
        )
        this.load.image
        (
            "zombie_atack4",
            "./assets/zombie/zombie_atack0004.png"
        )
        this.load.image
        (
            "zombie_atack5",
            "./assets/zombie/zombie_atack0005.png"
        )
        this.load.image
        (
            "zombie_atack6",
            "./assets/zombie/zombie_atack0006.png"
        )
        this.load.image
        (
            "zombie_atack7",
            "./assets/zombie/zombie_atack0007.png"
        )
        this.load.image
        (
            "zombie_atack8",
            "./assets/zombie/zombie_atack0008.png"
        )
        this.load.image
        (
            "zombie_atack9",
            "./assets/zombie/zombie_atack0009.png"
        )
        this.load.image
        (
            "zombie_hands",
            "./assets/zombie/hands.png"
        )
    }

    create() {
        //Clear all
        this.input.setDefaultCursor('default')
        this.win = false
        Zombie.reset()
        Zombie.maximum_zombies = 3

        this.wait_timer = 0
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
        for (let i = 0; i < 10; i++) {
            this.textures.get(`zombie${i}`).setFilter(
                Phaser.Textures.FilterMode.NEAREST
            );
        }
        for (let i = 0; i < 10; i++) {
            this.textures.get(`zombie_atack${i}`).setFilter(
                Phaser.Textures.FilterMode.NEAREST
            );
        }
        for (let i = 0; i < 10; i++) {
            this.textures.get(`zombie_body${i}`).setFilter(
                Phaser.Textures.FilterMode.NEAREST
            );
        }

        //Color map
        this.colorMap = {
            "white": 2,
            "blue": 5,
            "yellow": 1,
            "orange": 4,
            "green": 0,
            "red": 3,
            "any": 6
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
        this.key_input = {
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
        this.visible_rotates = []
        this.cube = new Cube(30, 45, 0)
        this.cube_default_y = 45
        this.cube_default_x = 30
        this.y_rotation_anim = 0

        //Player
        this.player = new Player(0, -50, 0, this.key_input, this.cube.general_cube)

        //Zombies
        let total_zombies = 3-(Zombie.all.size-Zombie.falling.size)
        for(let i = 0; i < total_zombies; i++){
            const avaible = Zombie.avaible_columns()
            const position = avaible[Math.floor(Math.random() * avaible.length)]
            new Zombie(position.face, position.column)
        }

        //Normal and separated 3d objects
        this.visible_objects = 
        [
            this.player.object
        ]
        //Rubik cube object
        this.visible_cubes = [this.cube]

        //Sign
        this.sign = this.add.sprite(200, 200, "sign_background")
        this.solve_background = this.add.sprite(200, 200, "solve_background")
        this.face_grid = this.make.tilemap(
            {
                tileHeight: 36,
                tileWidth: 36,
                width: 3,
                height: 3
            }
        )
        const tileset = this.face_grid.addTilesetImage("solve_colors","solve_colors",32,32);
        this.solve_face = this.face_grid.createBlankLayer("face", tileset)

        this.final_face = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ]

        //Generate Pattern
        let avaible_colors = [
            "white","white","white",
            "blue","blue","blue",
            "yellow","yellow","yellow",
            "orange","orange","orange",
            "green","green","green",
            "red","red","red"
        ]
        let use_colors = []
        for(let i = 0; i < 6; i++){
            let random = Math.floor(Math.random() * avaible_colors.length)
            use_colors.push(avaible_colors[random])
            avaible_colors.splice(random, 1)
        }
        use_colors.push("any")
        use_colors.push("any")
        use_colors.push("any")
        use_colors.sort(() => Math.random() - 0.5)
        let i = 0
        for(let x = 0; x < 3; x++){
            for(let z = 0; z < 3; z++){
                this.final_face[x][z] = use_colors[i]
                i++
            }
        }

        for(let x = 0; x < 3; x++){
            for(let z = 0; z < 3; z++){
                this.solve_face.putTileAt(this.colorMap[this.final_face[x][z]], x, z)
            }
        }

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

        //Pause button
        this.button_container = this.add.container(200,200)
        this.pause1 = this.add.rectangle(-40, 60, 15, 50, 0xFFFFFF)
        this.pause2 = this.add.rectangle(-70, 60, 15, 50, 0xFFFFFF)
        this.button_container.add(this.pause1)
        this.button_container.add(this.pause2)
        this.button_container.setInteractive(new Phaser.Geom.Rectangle(-80, 30, 55, 60), Phaser.Geom.Rectangle.Contains)
        //User interaction
        this.button_container.on('pointerdown', () => {
            this.scene.pause()
            this.blur = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height, 0x000000, 0.8)
            this.blur.setDepth(2)
            this.scene.launch("PauseMenu")
            this.input.setDefaultCursor('default')
        })
        this.button_container.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.pause1.setFillStyle(0xc4c4c4)
            this.pause2.setFillStyle(0xc4c4c4)
        })
        this.button_container.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.pause1.setFillStyle(0xffffff)
            this.pause2.setFillStyle(0xffffff)
        })
    }

    update(time, delta) {
        if(this.blur) this.blur.destroy()
        //Clear canvas
        this.canvas.clear()
        //Constant variables
        let width = this.scale.width
        let height = this.scale.height
        const fps = 1000 / delta
        const fps_ratio = Math.min(60 / fps, 2)
        //Clear Screen
        this.cube_graphics.clear()

        //button
        this.button_container.setPosition(width, 0)
        this.button_container.setScale(width/1037, width/1037)
        //background
        if(width/1.7 > height) this.sign.setScale(width / this.sign.width)
        else this.sign.setScale(height / this.sign.height)
        this.sign.setPosition(width/1.7 - this.sign.displayWidth/2, height/2)
        this.solve_background.setScale((width/3-100)/(this.solve_face.width*2))
        this.solve_background.setPosition(width/3 - this.solve_background.displayWidth/2 + 2*this.solve_face.scale, height/2)
        //face
        this.solve_face.setScale((width/3-100)/this.solve_face.width)
        this.solve_face.x = width/3 - this.solve_face.displayWidth
        this.solve_face.y = height/2 - this.solve_face.displayHeight/2 +33*this.solve_background.scale

        //Update Cube
        this.cube.update(fps_ratio)

        //Update Player
        this.player.update(fps_ratio, this.cube.rotation, this.cube.rubik_rotation, this.cube.actual_anim_rotations)

        //Update Zombies
        for(let zombie of Zombie.all){
            zombie.update(fps_ratio, this.cube.actual_anim_rotations, this.cube.rubik_rotation, this.cube.rotation, this.player)
        }

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
        if(this.player.can_slide || (this.player.state == "shift" && this.player.can_down && !this.cube.getActualRotationIndex().includes(Math.floor((this.player[this.cube.getActualRotationAxis()] + 90)/60)))){
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
                this.cube.last_moving_color.x = this.cube.moving_color.x
                this.cube.last_moving_color.z = this.cube.moving_color.z
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
                let user_x = this.key_input.d.isDown - this.key_input.a.isDown
                let user_y = this.key_input.w.isDown - this.key_input.s.isDown
                let radians = this.cube.rotation.y * Math.PI / 180
                tile_input.x = Math.round((user_x * Math.cos(radians) - user_y * Math.sin(radians)) * 1)
                tile_input.z = Math.round((user_x * Math.sin(radians) + user_y * Math.cos(radians)) * 1)
                if(this.player.shift_cooldown > 10){
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
            if(this.player.final_slide.finish){
                this.player.final_slide.finish = false;
                this.cube.moving_color.x += this.player.final_slide.x
                this.cube.moving_color.z += this.player.final_slide.z
            }
            
            if(Math.max(0, this.player.shift_timer) > 0){
                this.cube.setTileY(Math.max(0, this.player.shift_timer))
            }else{
                this.cube.setTileVisibility("")
                if(this.cube.moving_color.color != ""){
                    if(this.cube.moving_color.x != this.cube.last_moving_color.x || this.cube.moving_color.z != this.cube.last_moving_color.z){
                        for(let zombie of Zombie.all){
                            zombie.add_steps()
                        }
                    }
                    this.cube.face_colors[0][this.cube.moving_color.x][this.cube.moving_color.z] = this.cube.moving_color.color
                    this.cube.moving_color.x = -1
                    this.cube.moving_color.z = -1
                    this.cube.moving_color.color = ""
                    this.cube.update_colors()
                }
            }
        }

        //Object Rendering
        this.visible_objects = []
        if(!this.player.dead) this.visible_objects.push(this.player.object)

        this.visible_rotates = []
        for(let zombie of Zombie.all){
            this.visible_rotates.push({object: zombie.object, face: zombie.face, column: zombie.column, up: zombie.up, last_face: zombie.last_face})
            if(zombie.hand != undefined) this.visible_rotates.push({object: zombie.hand, face: zombie.face, column: zombie.column, up: zombie.up, last_face: zombie.last_face})
        }


        let draw_faces = []
        for(let object of this.visible_objects){
            for(let face of object.faces){
                draw_faces.push(face.transform(this.cube.rotation.x, 0, 0).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2))
            }
        }
        for(let zombie of this.visible_rotates){
            let object = zombie.object
            for(let face of object.faces){
                if(zombie.face == "z"){
                    if(zombie.up) draw_faces.push(face.transform(this.cube.rotation.x, 0, 0).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2))
                    else draw_faces.push(face.transform(0, 0, this.cube.rubik_rotation.z[zombie.column]).transform(this.cube.rotation.x, this.cube.rotation.y, this.cube.rotation.z).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2))
                }else if(zombie.face == "x"){
                    if(zombie.up) draw_faces.push(face.transform(this.cube.rotation.x, 0, 0).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2))
                    else draw_faces.push(face.transform(this.cube.rubik_rotation.x[zombie.column], 0, 0).transform(this.cube.rotation.x, this.cube.rotation.y, this.cube.rotation.z).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2))
                }else{
                    draw_faces.push(face.transform(0, 0, 0).transform(this.cube.rotation.x, this.cube.rotation.y, this.cube.rotation.z).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2))
                }
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
                if(draw_face.texture.startsWith("zombie")) avarageZ += Math.sign(avarageZ) * -5
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

        //Life
        /*
        let player_height = -120
        if(this.player.state == "shift") player_height = -110
        let new_face = new Face3d([new Point(this.player.final_x, this.player.final_y+player_height, this.player.final_z)])
        new_face = new_face.transform(this.cube.rotation.x, 0, 0).projection(Math.min(width*2/3, height)/350).translation(width*2/3, height/2)
        this.life.setPosition(new_face.points[0].x, new_face.points[0].y)
        */

        //check if player win
        if(this.win && !this.player.dead){
            this.player.active = false
            let rotation = (this.match().rotation+1) * 90
            this.cube.rotation.y = Math.min(this.cube.rotation.y +2, rotation)
            this.cube.rotation.x = Math.min(this.cube.rotation.x +2, 90)

            if(this.cube.rotation.x == 90){
                if(this.cube.rotation.y == (this.match().rotation+1) * 90){
                    this.wait_timer += 1 * fps_ratio
                    if(this.wait_timer > 30){
                        this.scene.launch("WinScene")
                        this.scene.pause()
                        this.blur = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height, 0x000000, 0.8)
                        this.blur.setDepth(2)
                    }
                }
            }
        }else if(this.player.dead){
            this.player.active = false
            let rotation = (this.match().rotation+1) * 90
            this.cube.rotation.y = Math.min(this.cube.rotation.y +2, rotation)
            this.cube.rotation.x = Math.min(this.cube.rotation.x +2, 90)

            if(this.cube.rotation.x == 90){
                if(this.cube.rotation.y == (this.match().rotation+1) * 90){
                    this.wait_timer += 1 * fps_ratio
                    if(this.wait_timer > 30){
                        this.scene.launch("DeadScene")
                        this.scene.pause()
                        this.blur = this.add.rectangle(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height, 0x000000, 0.8)
                        this.blur.setDepth(2)
                    }
                }
            }
        }else{
            if(this.match().done){
                this.win = true
            }

            //Cube rotation by player
            let y_input = this.key_input.cursors.right.isDown - this.key_input.cursors.left.isDown
            let x_input = this.key_input.cursors.down.isDown
            if(!this.player.active){
                y_input = 0
                x_input = 0
            }
            if(y_input == 0){
                if(this.y_rotation_anim != 0){
                    this.y_rotation_anim = Math.sign(this.y_rotation_anim) * Math.max(0, Math.abs(this.y_rotation_anim) - 4*fps_ratio)
                }
            }else{
                this.y_rotation_anim += (3.5*y_input*fps_ratio)
                this.y_rotation_anim = Math.sign(this.y_rotation_anim) * Math.min(100, Math.abs(this.y_rotation_anim))
            }
            if(x_input){
                this.cube.rotation.x = Math.max(-this.cube_default_x-10, this.cube.rotation.x - 4*fps_ratio)
            }else{
                this.cube.rotation.x = Math.min(this.cube_default_x, this.cube.rotation.x + 4*fps_ratio)
            }
            this.cube.rotation.y = this.cube_default_y + 90*(Math.floor(this.y_rotation_anim)/100)
            
            this.cube.rotation.y = this.cube.rotation.y % 360
            this.cube.rotation.x = this.cube.rotation.x % 360
        }
    }

    match(){
        let current_face = this.cube.face_colors[0]
        for(let i = 0; i < 4; i++){
            let result = 0
            comp_loop:
            for(let x = 0; x < 3; x++){
                for(let z = 0; z < 3; z++){
                    if(this.final_face[x][z] == "any"){
                        result++
                    }else if(this.final_face[x][z] == current_face[z][x]){
                        result++
                    }else{
                        break comp_loop
                    }
                }
            }
            if(result == 9) return {done: true, rotation: i}
            current_face = this.cube.rotate_new_face(current_face, 1)
        }
        return {done: false, rotation: 0}
    }
}

class WinScene extends Phaser.Scene {
    constructor(){
        super("WinScene")
    }
    create(){
        this.title = this.add.text(0, 0, "You win!!", {
            fontFamily:"Arial",
            fontSize:"64px",
            color:"#ffffff"
        })

        this.button = this.add.container(200,200)
        this.button_background = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text = this.add.text(0, 0, "Play Again", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text.setOrigin(0.5)
        this.button1 = this.add.container(200, 200)
        this.button_background1 = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text1 = this.add.text(0, 0, "Main Menu", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text1.setOrigin(0.5)
        this.button.add(this.button_background)
        this.button.add(this.button_text)
        this.button1.add(this.button_background1)
        this.button1.add(this.button_text1)

        //User interaction
        this.button_background.on('pointerdown', () => {
            this.button.setScale(0.9, 0.9)
            this.scene.stop()
            this.scene.launch("Transition")
        })
        this.button_background.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background.setFillStyle(0xc4c4c4)
        })
        this.button_background.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background.setFillStyle(0xffffff)
        })

        this.button_background1.on('pointerdown', () => {
            this.button1.setScale(0.9, 0.9)
            this.scene.stop()
            this.scene.start("MainMenu")
        })
        this.button_background1.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background1.setFillStyle(0xc4c4c4)
        })
        this.button_background1.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background1.setFillStyle(0xffffff)
        })

        this.cameras.main.fadeIn(500, 0, 0, 0);
    }
    update(){
        let width = this.scale.width
        let height = this.scale.height

        this.title.setPosition(width/2 - this.title.width/2, height/2 - height/3 + 30)
        this.button.setPosition(width/2, height/2 - this.title.y + this.title.height + 35)
        this.button_background.setSize(width/3-20, this.button_text.height+20)
        this.button1.setPosition(width/2, height/2 - this.title.y + this.title.height + 105)
        this.button_background1.setSize(width/3-20, this.button_text.height+20)
    }
}

class DeadScene extends Phaser.Scene {
    constructor(){
        super("DeadScene")
    }
    create(){
        this.title = this.add.text(0, 0, "You may have died :(", {
            fontFamily:"Arial",
            fontSize:"64px",
            color:"#ffffff"
        })

        this.button = this.add.container(200,200)
        this.button_background = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text = this.add.text(0, 0, "Play Again", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text.setOrigin(0.5)
        this.button1 = this.add.container(200, 200)
        this.button_background1 = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text1 = this.add.text(0, 0, "Main Menu", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text1.setOrigin(0.5)
        this.button.add(this.button_background)
        this.button.add(this.button_text)
        this.button1.add(this.button_background1)
        this.button1.add(this.button_text1)

        //User interaction
        this.button_background.on('pointerdown', () => {
            this.button.setScale(0.9, 0.9)
            this.scene.stop()
            this.scene.launch("Transition")
        })
        this.button_background.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background.setFillStyle(0xc4c4c4)
        })
        this.button_background.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background.setFillStyle(0xffffff)
        })

        this.button_background1.on('pointerdown', () => {
            this.button1.setScale(0.9, 0.9)
            this.scene.start("MainMenu")
        })
        this.button_background1.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background1.setFillStyle(0xc4c4c4)
        })
        this.button_background1.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background1.setFillStyle(0xffffff)
        })

        this.cameras.main.fadeIn(500, 0, 0, 0);
    }
    update(){
        let width = this.scale.width
        let height = this.scale.height

        this.title.setPosition(width/2 - this.title.width/2, height/2 - height/3 + 30)
        this.button.setPosition(width/2, height/2 - this.title.y + this.title.height + 35)
        this.button_background.setSize(width/3-20, this.button_text.height+20)
        this.button1.setPosition(width/2, height/2 - this.title.y + this.title.height + 105)
        this.button_background1.setSize(width/3-20, this.button_text.height+20)
    }
}

class PauseMenu extends Phaser.Scene {
    constructor(){
        super("PauseMenu")
    }
    create(){
        this.title = this.add.text(0, 0, "The game is paused", {
            fontFamily:"Arial",
            fontSize:"64px",
            color:"#ffffff"
        })

        this.button = this.add.container(200,200)
        this.button_background = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text = this.add.text(0, 0, "Resume", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text.setOrigin(0.5)
        this.button1 = this.add.container(200, 200)
        this.button_background1 = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text1 = this.add.text(0, 0, "Main Menu", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text1.setOrigin(0.5)
        this.button.add(this.button_background)
        this.button.add(this.button_text)
        this.button1.add(this.button_background1)
        this.button1.add(this.button_text1)

        //User interaction
        this.button_background.on('pointerdown', () => {
            this.button.setScale(0.9, 0.9)
            this.scene.stop()
            this.scene.resume("game-scene")
        })
        this.button_background.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background.setFillStyle(0xc4c4c4)
        })
        this.button_background.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background.setFillStyle(0xffffff)
        })

        this.button_background1.on('pointerdown', () => {
            this.button1.setScale(0.9, 0.9)
            this.scene.start("MainMenu")
        })
        this.button_background1.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background1.setFillStyle(0xc4c4c4)
        })
        this.button_background1.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background1.setFillStyle(0xffffff)
        })

        this.cameras.main.fadeIn(500, 0, 0, 0);
    }
    update(){
        let width = this.scale.width
        let height = this.scale.height

        this.title.setPosition(width/2 - this.title.width/2, height/2 - height/3 + 30)
        this.button.setPosition(width/2, height/2 - this.title.y + this.title.height + 35)
        this.button_background.setSize(width/3-20, this.button_text.height+20)
        this.button1.setPosition(width/2, height/2 - this.title.y + this.title.height + 105)
        this.button_background1.setSize(width/3-20, this.button_text.height+20)
    }
}

class MainMenu extends Phaser.Scene {
    constructor(){
        super("MainMenu")
    }
    create(){
        this.title = this.add.text(0, 0, "You may have died :(", {
            fontFamily:"Arial",
            fontSize:"64px",
            color:"#ffffff"
        })

        this.button = this.add.container(200,200)
        this.button_background = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text = this.add.text(0, 0, "Play Again", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text.setOrigin(0.5)
        this.button1 = this.add.container(200, 200)
        this.button_background1 = this.add.rectangle(0, 0, 100, 50, 0xffffff).setInteractive()
        this.button_text1 = this.add.text(0, 0, "Main Menu", {
            fontFamily:"Arial",
            fontSize:"32px",
            color:"#000000"
        })
        this.button_text1.setOrigin(0.5)
        this.button.add(this.button_background)
        this.button.add(this.button_text)
        this.button1.add(this.button_background1)
        this.button1.add(this.button_text1)

        //User interaction
        this.button_background.on('pointerdown', () => {
            this.button.setScale(0.9, 0.9)
            this.scene.launch("Transition", {scene: this.scene})
        })
        this.button_background.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background.setFillStyle(0xc4c4c4)
        })
        this.button_background.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background.setFillStyle(0xffffff)
        })

        this.button_background1.on('pointerdown', () => {
            this.button1.setScale(0.9, 0.9)
        })
        this.button_background1.on('pointerover', () => {
            this.input.setDefaultCursor('pointer')
            this.button_background1.setFillStyle(0xc4c4c4)
        })
        this.button_background1.on('pointerout', () => {
            this.input.setDefaultCursor('default')
            this.button_background1.setFillStyle(0xffffff)
        })

        this.cameras.main.fadeIn(500, 0, 0, 0);
    }
    update(){
        let width = this.scale.width
        let height = this.scale.height

        this.title.setPosition(width/2 - this.title.width/2, height/2 - height/3 + 30)
        this.button.setPosition(width/2, height/2 - this.title.y + this.title.height + 35)
        this.button_background.setSize(width/3-20, this.button_text.height+20)
        this.button1.setPosition(width/2, height/2 - this.title.y + this.title.height + 105)
        this.button_background1.setSize(width/3-20, this.button_text.height+20)
    }
}

class Transition extends Phaser.Scene {
    constructor(){
        super("Transition")
    }
    create(){
        this.background = this.add.rectangle(0, 0, 100, 50, 0x000000)
        this.x = 0
        this.speed = 0.1
        this.change_speed = false
    }
    init(data){
        this.other_scene = data.scene
    }
    update(){
        let width = this.scale.width
        let height = this.scale.height

        this.background.setSize(width, height)
        this.background.setPosition(this.x - width/2, height/2)

        this.speed += 0.75
        this.x += this.speed
        if(this.x > width){
            if(!this.change_speed){
                if(this.other_scene) this.other_scene.stop()
                const scene = this.scene.get("game-scene")
                if (scene) {
                    this.scene.stop("game-scene")
                }
                this.scene.launch("game-scene")
                this.speed = 0
            }
            this.change_speed = true
            if(this.x > width*2){
                this.scene.stop()
            }
        }
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
    scene: [
        MainMenu,
        MainScene,
        WinScene,
        DeadScene,
        Transition,
        PauseMenu
    ]
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