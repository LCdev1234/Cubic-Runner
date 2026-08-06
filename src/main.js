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
this.rx = 0;
this.ry = 0;
this.rz = 0;

const R_Matrix_x = [
    [1, 0, 0],
    [0, Math.cos(this.rx * Math.PI / 180), -Math.sin(this.rx * Math.PI / 180)],
    [0, Math.sin(this.rx * Math.PI / 180), Math.cos(this.rx * Math.PI / 180)]
]

const R_Matrix_y = [
    [Math.cos(this.ry * Math.PI / 180), 0, Math.sin(this.ry * Math.PI / 180)],
    [0, 1, 0],
    [-Math.sin(this.ry * Math.PI / 180), 0, Math.cos(this.ry * Math.PI / 180)]
]

const R_Matrix_z = [
    [Math.cos(this.rz * Math.PI / 180), -Math.sin(this.rz * Math.PI / 180), 0],
    [Math.sin(this.rz * Math.PI / 180), Math.cos(this.rz * Math.PI / 180), 0],
    [0, 0, 1]
]
    */

class MainScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    preload() {}

    create() {
        //Orientation variables
        this.rx = 0
        this.ry = 45
        this.rz = 0
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
        this.points_connect = [
            //Front face
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 0],
            //Back face
            [4, 5],
            [5, 6],
            [6, 7],
            [7, 4],
            //Connect faces
            [0, 4],
            [1, 5],
            [2, 6],
            [3, 7]
        ]

        //Graphic canvas
        this.cube_graphics = this.add.graphics()
        this.cube_graphics.setDefaultStyles({
            lineStyle: {
                width: 2,
                color: 0x00ff00,
                alpha: 1,
            },
            fillStyle: {
                color: 0x00ff00,
                alpha: 1,
            },
        });
    }

    update() {
        //Constant variables
        const width = this.scale.width
        const height = this.scale.height
        

        //Clear Screen
        this.cube_graphics.clear()

        //Cube Rendering
        let transformed_points = []

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
                [0, Math.cos(this.rx * Math.PI / 180), -Math.sin(this.rx * Math.PI / 180)],
                [0, Math.sin(this.rx * Math.PI / 180), Math.cos(this.rx * Math.PI / 180)]
            ]
            x = last_x
            y = 0 + last_y*Math.cos(this.rx * Math.PI / 180) - last_z*Math.sin(this.rx * Math.PI / 180)
            z = 0 + last_y*Math.sin(this.rx * Math.PI / 180) + last_z*Math.cos(this.rx * Math.PI / 180)

            last_x = x;
            last_y = y;
            last_z = z;
            [
                [Math.cos(this.ry * Math.PI / 180), 0, Math.sin(this.ry * Math.PI / 180)],
                [0, 1, 0],
                [-Math.sin(this.ry * Math.PI / 180), 0, Math.cos(this.ry * Math.PI / 180)]
            ]
            x = last_x*Math.cos(this.ry * Math.PI / 180) + 0 + last_z*Math.sin(this.ry * Math.PI / 180)
            y = last_y
            z = -last_x*Math.sin(this.ry * Math.PI / 180) + 0 + last_z*Math.cos(this.ry * Math.PI / 180)

            last_x = x;
            last_y = y;
            last_z = z;
            [
                [Math.cos(this.rz * Math.PI / 180), -Math.sin(this.rz * Math.PI / 180), 0],
                [Math.sin(this.rz * Math.PI / 180), Math.cos(this.rz * Math.PI / 180), 0],
                [0, 0, 1]
            ]
            x = last_x*Math.cos(this.rz * Math.PI / 180) - last_y*Math.sin(this.rz * Math.PI / 180) + 0
            y = last_x*Math.sin(this.rz * Math.PI / 180) + last_y*Math.cos(this.rz * Math.PI / 180) + 0
            z = last_z
            

            //Point Translation
            x += width/2
            y += height/2

            //Add points
            transformed_points.push(new Point(x, y, z))

            //Point Draw
            this.cube_graphics.fillPoint(x, y, 5)
        }


        for(let line of this.points_connect){
            let point1 = transformed_points[line[0]]
            let point2 = transformed_points[line[1]]
            this.cube_graphics.lineBetween(point1.x, point1.y, point2.x, point2.y)
        }

        this.ry += 0.1;
        this.rx += 0.1;
        this.ry = this.ry % 360
        this.rx = this.rx % 360
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