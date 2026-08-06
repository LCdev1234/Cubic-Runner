import './style.css'
import Phaser from 'phaser'

//Point class (x, y, z coordinates)
class Point {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

/*
rx = 0;
ry = 0;
rz = 0;

const R_Matrix_x = [
    [1, 0, 0],
    [0, Math.cos(rx * Math.PI / 180), -Math.sin(rx * Math.PI / 180)],
    [0, Math.sin(rx * Math.PI / 180), Math.cos(rx * Math.PI / 180)]
]

const R_Matrix_y = [
    [Math.cos(ry * Math.PI / 180), 0, Math.sin(ry * Math.PI / 180)],
    [0, 1, 0],
    [-Math.sin(ry * Math.PI / 180), 0, Math.cos(ry * Math.PI / 180)]
]

const R_Matrix_z = [
    [Math.cos(rz * Math.PI / 180), -Math.sin(rz * Math.PI / 180), 0],
    [Math.sin(rz * Math.PI / 180), Math.cos(rz * Math.PI / 180), 0],
    [0, 0, 1]
]
    */

class MainScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    preload() {}

    create() {
        //Define points
        this.points = [
            new Point(-100, -100, -100),
            new Point(100, -100, -100),
            new Point(100, 100, -100),
            new Point(-100, 100, -100),
            new Point(-100, -100, 100),
            new Point(100, -100, 100),
            new Point(100, 100, 100),
            new Point(-100, 100, 100)
        ]

        //Graphic canvas
        this.cube_graphics = this.add.graphics()
    }

    update() {
        //Constant variables
        const width = this.scale.width
        const height = this.scale.height

        //Clear Screen
        this.cube_graphics.clear()

        //Cube Rendering
        let rx = 45
        let ry = 45
        let rz = 0

        for(let point of this.points){
            let x = point.x
            let y = point.y
            let z = point.z

            //Point Rotation
            let last_x = x;
            let last_y = y;
            let last_z = z;
            [
                [1, 0, 0],
                [0, Math.cos(rx * Math.PI / 180), -Math.sin(rx * Math.PI / 180)],
                [0, Math.sin(rx * Math.PI / 180), Math.cos(rx * Math.PI / 180)]
            ]
            x = last_x
            y = 0 + last_y*Math.cos(rx * Math.PI / 180) - last_z*Math.sin(rx * Math.PI / 180)
            z = 0 + last_y*Math.sin(rx * Math.PI / 180) + last_z*Math.cos(rx * Math.PI / 180)

            last_x = x;
            last_y = y;
            last_z = z;
            [
                [Math.cos(ry * Math.PI / 180), 0, Math.sin(ry * Math.PI / 180)],
                [0, 1, 0],
                [-Math.sin(ry * Math.PI / 180), 0, Math.cos(ry * Math.PI / 180)]
            ]
            x = last_x*Math.cos(ry * Math.PI / 180) + 0 + last_z*Math.sin(ry * Math.PI / 180)
            y = last_y
            z = -last_x*Math.sin(ry * Math.PI / 180) + 0 + last_z*Math.cos(ry * Math.PI / 180)

            last_x = x;
            last_y = y;
            last_z = z;
            [
                [Math.cos(rz * Math.PI / 180), -Math.sin(rz * Math.PI / 180), 0],
                [Math.sin(rz * Math.PI / 180), Math.cos(rz * Math.PI / 180), 0],
                [0, 0, 1]
            ]
            x = last_x*Math.cos(rz * Math.PI / 180) - last_y*Math.sin(rz * Math.PI / 180) + 0
            y = last_x*Math.sin(rz * Math.PI / 180) + last_y*Math.cos(rz * Math.PI / 180) + 0
            z = last_z
            

            //Point Translation
            x += 200
            y += 299

            //Point Draw
            this.cube_graphics.fillStyle(0x00ff00, 1)
            this.cube_graphics.fillPoint(x, y, 10)
        }
    }
}


const config = {
    type: Phaser.AUTO,
    parent: "gameCanvas",
    backgroundColor: "#a12222",
    scale: {
        type: Phaser.Scale.RESIZE,
        width: "100%",
        height: "100%",
    },
    scene: [MainScene]
}

const game = new Phaser.Game(config)