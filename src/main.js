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

class Face3d {
    constructor(points, color){
        this.points = points
        this.color = color
    }

    transform(width, height, tx, ty, tz){
        let transformed_face = []
        for(let point of this.points){
            let x = point.x
            let y = point.y
            let z = point.z

            //Point Rotation
            let rx = tx * Math.PI / 180
            let ry = ty * Math.PI / 180
            let rz = tz * Math.PI / 180
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
            transformed_face.push(new Point(x, y, depth))
        }
        return(new Face2d(transformed_face, this.color))
    }
}

class Face2d {
    constructor(points, color){
        this.points = points
        this.color = color
    }
}

class Object3d {
    constructor(faces){
        this.faces = faces
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
        //Define Faces
        let cube = new Object3d([
            new Face3d(
                [
                    new Point(-100, -100, -100),
                    new Point(100, -100, -100),
                    new Point(100, 100, -100),
                    new Point(-100, 100, -100)
                ],
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-100, -100, 100),
                    new Point(100, -100, 100),
                    new Point(100, 100, 100),
                    new Point(-100, 100, 100)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-100, -100, -100),
                    new Point(100, -100, -100),
                    new Point(100, -100, 100),
                    new Point(-100, -100, 100)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-100, 100, -100),
                    new Point(100, 100, -100),
                    new Point(100, 100, 100),
                    new Point(-100, 100, 100)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-100, -100, -100),
                    new Point(-100, 100, -100),
                    new Point(-100, 100, 100),
                    new Point(-100, -100, 100),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(100, -100, -100),
                    new Point(100, 100, -100),
                    new Point(100, 100, 100),
                    new Point(100, -100, 100),
                ],
                0xFFFFFF
            )
        ])

        this.objects = {
            cube: cube
        }

        this.visible_objects = [
            cube
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
        let draw_faces = []

        for(let object of this.visible_objects){
            for(let face of object.faces){
                draw_faces.push(face.transform(width, height, this.rx, this.ry, this.rz))
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
            depth *= 0.5
            drawFace(this.cube_graphics, face.points, face.color, depth)
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

function drawFace(graphics, face, color, darkness){
    graphics.fillStyle(color, 1)
    let point1 = face[0]
    let point2 = face[1]
    let point3 = face[2]
    let point4 = face[3]
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

function getAvarageZ(face){
    let sum = 0
    for(let point of face){
        sum += point.z
    }

    return(sum / face.length)
}