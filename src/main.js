import './style.css'
import Phaser from 'phaser'
import {Point, Orientation, Face3d, Object3d} from "./geometry"
import Cube from "./cubes"


class MainScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    preload() {
        this.load.svg
        (
            "texture",
            "/assets/cave_texture.svg",
            {width: 500, height: 223}
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
            "texture",
            vertices,
            indices
        )
        this.face.setDepth(1)
        this.face.setVisible(false)

        //Rendering initialization
        this.cube = new Cube(30, 45, 0)

        //Normal and separated 3d objects
        this.visible_objects = []
        //Rubik cube object
        this.visible_cubes = [this.cube]
    }

    update() {
        this.canvas.clear()
        //Constant variables
        const width = this.scale.width
        const height = this.scale.height
        //Clear Screen
        this.cube_graphics.clear()



        //Object Rendering
        let draw_faces = []
        for(let object of this.visible_objects){
            for(let face of object.faces){
                draw_faces.push(face.transform(width, height, this.rx, this.ry, this.rz))
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
            drawFace(this.cube_graphics, face.points, face.color, depth, this.canvas, this.face)
        }

        this.cube.rotation.y += 0.1;
        //this.rx += 0.1;
        this.cube.rotation.y = this.cube.rotation.y % 360
        this.cube.rotation.x = this.cube.rotation.x % 360
    }
}


const config = {
    type: Phaser.AUTO,
    parent: "gameCanvas",
    backgroundColor: "#000000",
    scale: {
        type: Phaser.Scale.RESIZE,
        width: "100%",
        height: "100%",
    },
    scene: [MainScene]
}

const game = new Phaser.Game(config)

function drawFace(graphics, face, color, darkness, canvas, mesh){
    //Draw Solid
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
    
    /*
    //Draw Texture
    const vertices = [
            face[0].x, face[0].y, 0, 0,   // 0: top-left
            face[1].x, face[1].y, 0, 1,   // 1: bottom-left
            face[2].x, face[2].y, 1, 1,   // 2: bottom-right
            face[3].x, face[3].y, 1, 0    // 3: top-right
        ]
    mesh.vertices = vertices
    canvas.draw(mesh, 0, 0)
    canvas.render()
    */
}

function getAvarageZ(face){
    let sum = 0
    for(let point of face){
        sum += point.depth
    }

    return(sum / face.length)
}