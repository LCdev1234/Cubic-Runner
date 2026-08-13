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
            "./assets/player_idle/player_idle0000.png"
        )
        this.load.image
        (
            "player1",
            "./assets/player_idle/player_idle0001.png"
        )
        this.load.image
        (
            "player2",
            "./assets/player_idle/player_idle0002.png"
        )
        this.load.image
        (
            "player3",
            "./assets/player_idle/player_idle0003.png"
        )
        this.load.image
        (
            "player4",
            "./assets/player_idle/player_idle0004.png"
        )
        this.load.image
        (
            "player5",
            "./assets/player_idle/player_idle0005.png"
        )
        this.load.image
        (
            "player6",
            "./assets/player_idle/player_idle0006.png"
        )
        this.load.image
        (
            "player7",
            "./assets/player_idle/player_idle0007.png"
        )
        this.load.image
        (
            "player8",
            "./assets/player_idle/player_idle0008.png"
        )
        this.load.image
        (
            "player9",
            "./assets/player_idle/player_idle0009.png"
        )
        this.load.image
        (
            "player10",
            "./assets/player_idle/player_idle0010.png"
        )
        this.load.image
        (
            "player11",
            "./assets/player_idle/player_idle0011.png"
        )
    }

    create() {
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
        
        //Player
        this.player = new Player(0, 0, 0)

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

        //Normal and separated 3d objects
        this.visible_objects = 
        [
            this.player.object
        ]
        //Rubik cube object
        this.visible_cubes = [this.cube]

        //Keys
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(time, delta) {
        if (this.cursors.left.isDown) {
            this.player.x += -1
        }
        if (this.cursors.right.isDown) {
            this.player.x += 1
        }
        if (this.cursors.up.isDown) {
            this.player.z += 1
        }
        if (this.cursors.down.isDown) {
            this.player.z += -1
        }
        if (this.cursors.space.isDown) {
            this.player.y += 1
        }
        this.canvas.clear()
        //Constant variables
        const width = this.scale.width
        const height = this.scale.height
        const fps = 1000 / delta
        const fps_ratio = 60 / fps
        //Clear Screen
        this.cube_graphics.clear()

        //Update Objects
        this.player.update(fps_ratio)

        //Object Rendering
        let draw_faces = []
        for(let object of this.visible_objects){
            for(let face of object.faces){
                draw_faces.push(face.transform(30, 0, 0).selfTransform(this.player.x, this.player.y, this.player.z, -30, 0, 0).projection().translation(width/2, height/2))
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
            drawFace(this.cube_graphics, face.points, face.color, depth, this.canvas, this.face, face.texture)
        }

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
        type: Phaser.Scale.RESIZE,
        width: "100%",
        height: "100%",
    },
    scene: [MainScene]
}

const game = new Phaser.Game(config)

function drawFace(graphics, face, color, darkness, canvas, mesh, texture){
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
        mesh.vertices = vertices
        mesh.setTexture(texture)
        canvas.draw(mesh, 0, 0)
        canvas.render()
    }
}

function getAvarageZ(face){
    let sum = 0
    for(let point of face){
        sum += point.depth
    }

    return(sum / face.length)
}