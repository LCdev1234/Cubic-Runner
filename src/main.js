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
            //Face 1
            [
                0,
                1,
                2,
                3
            ],
            //Face 2
            [
                4,
                5,
                6,
                7
            ],
            //Face 3
            [
                0,
                1,
                5,
                4
            ],
            //Face 4
            [
                3,
                2,
                6,
                7
            ],
            //Face 5
            [
                0,
                3,
                7,
                4
            ],
            //Face 6
            [
                1,
                2,
                6,
                5
            ]
        ]

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
            let point3 = transformed_points[line[2]]
            let point4 = transformed_points[line[3]]
            this.cube_graphics.beginPath()
            this.cube_graphics.moveTo(point1.x, point1.y)
            this.cube_graphics.lineTo(point2.x, point2.y)
            this.cube_graphics.lineTo(point3.x, point3.y)
            this.cube_graphics.lineTo(point4.x, point4.y)
            this.cube_graphics.lineTo(point1.x, point1.y)
            this.cube_graphics.closePath()
            this.cube_graphics.fillPath()
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
    backgroundColor: "#000000",
    scale: {
        type: Phaser.Scale.RESIZE,
        width: "100%",
        height: "100%",
    },
    scene: [MainScene]
}

const game = new Phaser.Game(config)