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

class Orientation {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

class MainScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    preload() {}

    create() {
        //Orientation variables
        this.rx = 30
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
                3,
                0xFFFFFF
            ],
            //Face 2
            [
                4,
                5,
                6,
                7,
                0xFFFFFF
            ],
            //Face 3
            [
                0,
                1,
                5,
                4,
                0xFFFFFF
            ],
            //Face 4
            [
                3,
                2,
                6,
                7,
                0xFFFFFF
            ],
            //Face 5
            [
                0,
                3,
                7,
                4,
                0xFFFFFF
            ],
            //Face 6
            [
                1,
                2,
                6,
                5,
                0xFFFFFF
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
            let rx = this.rx * Math.PI / 180
            let ry = this.ry * Math.PI / 180
            let rz = this.rz * Math.PI / 180
            let last_x = x;
            let last_y = y;
            let last_z = z;
            x = last_x*Math.cos(rz) - last_y*Math.sin(rz) + 0
            y = last_x*Math.sin(rz) + last_y*Math.cos(rz) + 0
            z = last_z

            last_x = x;
            last_y = y;
            last_z = z;
            x = last_x*Math.cos(ry) + 0 + last_z*Math.sin(ry)
            y = last_y
            z = -last_x*Math.sin(ry) + 0 + last_z*Math.cos(ry)

            last_x = x;
            last_y = y;
            last_z = z;
            x = x
            y = 0 + last_y*Math.cos(rx) - last_z*Math.sin(rx)
            z = 0 + last_y*Math.sin(rx) + last_z*Math.cos(rx)

            //Perspective Projection
            last_x = x
            last_y = y
            last_z = z
            const distance = 500
            const fov = 1000
            const depth = last_z + distance
            x = last_x * fov / depth
            y = last_y * fov / depth

            //Point Translation
            x += width/2
            y += height/2

            //Add points
            transformed_points.push(new Point(x, y, depth))

            //Point Draw
            this.cube_graphics.fillPoint(x, y, 5)
        }

        let faces = []
        {
            let n = 0;
            for(let line of this.points_connect){
                let avarageZ = getAvarageZ(transformed_points, line[0], line[1], line[2], line[3])
                faces.push({index: n, z: avarageZ})
                n++
            }
        }
        faces.sort((a, b) => b.z - a.z)
        for(let face of faces){
            let line = this.points_connect[face.index]

            let depth = (face.z - 350) / (600 - 350)
            depth *= 0.5
            drawFace(this.cube_graphics, transformed_points, line[0], line[1], line[2], line[3], line[4], depth)
        }

        this.ry += 0.1;
        //this.rx += 0.1;
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

function drawFace(graphics, transformed_points, v1, v2, v3, v4, color, darkness){
    graphics.fillStyle(color, 1)
    let point1 = transformed_points[v1]
    let point2 = transformed_points[v2]
    let point3 = transformed_points[v3]
    let point4 = transformed_points[v4]
    graphics.beginPath()
    graphics.moveTo(point1.x, point1.y)
    graphics.lineTo(point2.x, point2.y)
    graphics.lineTo(point3.x, point3.y)
    graphics.lineTo(point4.x, point4.y)
    graphics.lineTo(point1.x, point1.y)
    graphics.closePath()
    graphics.fillPath()

    graphics.fillStyle(0x000000, darkness)
    graphics.beginPath()
    graphics.moveTo(point1.x, point1.y)
    graphics.lineTo(point2.x, point2.y)
    graphics.lineTo(point3.x, point3.y)
    graphics.lineTo(point4.x, point4.y)
    graphics.lineTo(point1.x, point1.y)
    graphics.closePath()
    graphics.fillPath()
}

function getAvarageZ(transformed_points, v1, v2, v3, v4){
    let point1 = transformed_points[v1]
    let point2 = transformed_points[v2]
    let point3 = transformed_points[v3]
    let point4 = transformed_points[v4]

    return((point1.z + point2.z + point3.z + point4.z)/4)
}