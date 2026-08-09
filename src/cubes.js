import {Point, Orientation, Face3d, Object3d} from "./geometry"

export default class Cube {
    constructor(rx, ry, rz){
        let cube1 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -90, -90),
                    new Point(-30, -90, -90),
                    new Point(-30, -30, -90),
                    new Point(-90, -30, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -90, -90),
                    new Point(-30, -90, -90),
                    new Point(-30, -90, -30),
                    new Point(-90, -90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -90, -90),
                    new Point(-90, -30, -90),
                    new Point(-90, -30, -30),
                    new Point(-90, -90, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-30, -90, -30),
                ],
                0x000000
            )
        ])
        let cube2 = new Object3d([
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(30, -90, -90),
                    new Point(30, -30, -90),
                    new Point(-30, -30, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(30, -90, -90),
                    new Point(30, -90, -30),
                    new Point(-30, -90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-30, -90, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(30, -90, -30),
                ],
                0x000000
            )
        ])
        let cube3 = new Object3d([
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(90, -90, -90),
                    new Point(90, -30, -90),
                    new Point(30, -30, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(90, -90, -30),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(90, -90, -90),
                    new Point(90, -90, -30),
                    new Point(30, -90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(90, -30, -90),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(30, -90, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, -90, -90),
                    new Point(90, -30, -90),
                    new Point(90, -30, -30),
                    new Point(90, -90, -30),
                ],
                0x000000
            )
        ])
        let cube4 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, 30, -90),
                    new Point(-90, 30, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-90, 30, -90),
                    new Point(-90, 30, -30),
                    new Point(-90, -30, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-30, -30, -30),
                ],
                0x000000
            )
        ])
        let cube5 = new Object3d([
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(30, -30, -90),
                    new Point(30, 30, -90),
                    new Point(-30, 30, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-30, -30, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(30, -30, -30),
                ],
                0x000000
            )
        ])
        let cube6 = new Object3d([
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(90, -30, -90),
                    new Point(90, 30, -90),
                    new Point(30, 30, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(90, -30, -90),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(30, -30, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, -30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 30, -30),
                    new Point(90, -30, -30),
                ],
                0x000000
            )
        ])
        let cube7 = new Object3d([
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 90, -90),
                    new Point(-90, 90, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-90, 90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 90, -90),
                    new Point(-30, 90, -90),
                    new Point(-30, 90, -30),
                    new Point(-90, 90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-90, 90, -90),
                    new Point(-90, 90, -30),
                    new Point(-90, 30, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(-30, 90, -90),
                    new Point(-30, 90, -30),
                    new Point(-30, 30, -30),
                ],
                0x000000
            )
        ])
        let cube8 = new Object3d([
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 90, -90),
                    new Point(-30, 90, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(-30, 90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 90, -90),
                    new Point(30, 90, -90),
                    new Point(30, 90, -30),
                    new Point(-30, 90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(-30, 90, -90),
                    new Point(-30, 90, -30),
                    new Point(-30, 30, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(30, 90, -90),
                    new Point(30, 90, -30),
                    new Point(30, 30, -30),
                ],
                0x000000
            )
        ])
        let cube9 = new Object3d([
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 90, -90),
                    new Point(30, 90, -90)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 90, -30),
                    new Point(30, 90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 90, -90),
                    new Point(90, 90, -90),
                    new Point(90, 90, -30),
                    new Point(30, 90, -30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(30, 90, -90),
                    new Point(30, 90, -30),
                    new Point(30, 30, -30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, 30, -90),
                    new Point(90, 90, -90),
                    new Point(90, 90, -30),
                    new Point(90, 30, -30),
                ],
                0x000000
            )
        ])
        let cube10 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-30, -90, -30),
                    new Point(-30, -90, 30),
                    new Point(-90, -90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-90, -30, -30),
                    new Point(-90, -30, 30),
                    new Point(-90, -90, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-30, -90, 30),
                ],
                0x000000
            )
        ])
        let cube11 = new Object3d([
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(30, -90, -30),
                    new Point(30, -90, 30),
                    new Point(-30, -90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-30, -90, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(30, -90, 30),
                ],
                0x000000
            )
        ])
        let cube12 = new Object3d([
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(90, -90, -30),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(90, -90, 30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(90, -90, -30),
                    new Point(90, -90, 30),
                    new Point(30, -90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(30, -90, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, -90, -30),
                    new Point(90, -30, -30),
                    new Point(90, -30, 30),
                    new Point(90, -90, 30),
                ],
                0x000000
            )
        ])
        let cube13 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-90, 30, -30),
                    new Point(-90, 30, 30),
                    new Point(-90, -30, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-30, -30, 30),
                ],
                0x000000
            )
        ])
        let cube14 = new Object3d([
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-30, -30, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(30, -30, 30),
                ],
                0x000000
            )
        ])
        let cube15 = new Object3d([
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(30, -30, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, -30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 30, 30),
                    new Point(90, -30, 30),
                ],
                0x000000
            )
        ])
        let cube16 = new Object3d([
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-90, 90, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-90, 90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 90, -30),
                    new Point(-30, 90, -30),
                    new Point(-30, 90, 30),
                    new Point(-90, 90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-90, 90, -30),
                    new Point(-90, 90, 30),
                    new Point(-90, 30, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-30, 90, 30),
                    new Point(-30, 30, 30),
                ],
                0x000000
            )
        ])
        let cube17 = new Object3d([
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(-30, 90, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(-30, 90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 90, -30),
                    new Point(30, 90, -30),
                    new Point(30, 90, 30),
                    new Point(-30, 90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-30, 90, 30),
                    new Point(-30, 30, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(30, 90, 30),
                    new Point(30, 30, 30),
                ],
                0x000000
            )
        ])
        let cube18 = new Object3d([
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 90, -30),
                    new Point(30, 90, -30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 90, 30),
                    new Point(30, 90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 90, -30),
                    new Point(90, 90, -30),
                    new Point(90, 90, 30),
                    new Point(30, 90, 30)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(30, 90, 30),
                    new Point(30, 30, 30),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, 30, -30),
                    new Point(90, 90, -30),
                    new Point(90, 90, 30),
                    new Point(90, 30, 30),
                ],
                0x000000
            )
        ])
        let cube19 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, -90, 90),
                    new Point(-30, -90, 90),
                    new Point(-30, -30, 90),
                    new Point(-90, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-30, -90, 30),
                    new Point(-30, -90, 90),
                    new Point(-90, -90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-90, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-90, -30, 30),
                    new Point(-90, -30, 90),
                    new Point(-90, -90, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-30, -90, 90),
                ],
                0x000000
            )
        ])
        let cube20 = new Object3d([
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, -90, 90),
                    new Point(30, -90, 90),
                    new Point(30, -30, 90),
                    new Point(-30, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(30, -90, 30),
                    new Point(30, -90, 90),
                    new Point(-30, -90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(-30, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-30, -90, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(30, -90, 90),
                ],
                0x000000
            )
        ])
        let cube21 = new Object3d([
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(90, -90, 30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, -90, 90),
                    new Point(90, -90, 90),
                    new Point(90, -30, 90),
                    new Point(30, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(90, -90, 30),
                    new Point(90, -90, 90),
                    new Point(30, -90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, -30, 90),
                    new Point(30, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(30, -90, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, -90, 30),
                    new Point(90, -30, 30),
                    new Point(90, -30, 90),
                    new Point(90, -90, 90),
                ],
                0x000000
            )
        ])
        let cube22 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, -30, 90),
                    new Point(-30, -30, 90),
                    new Point(-30, 30, 90),
                    new Point(-90, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-90, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-90, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-90, 30, 30),
                    new Point(-90, 30, 90),
                    new Point(-90, -30, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-30, -30, 90),
                ],
                0x000000
            )
        ])
        let cube23 = new Object3d([
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, -30, 90),
                    new Point(30, -30, 90),
                    new Point(30, 30, 90),
                    new Point(-30, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(-30, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(-30, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-30, -30, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(30, -30, 90),
                ],
                0x000000
            )
        ])
        let cube24 = new Object3d([
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, -30, 90),
                    new Point(90, -30, 90),
                    new Point(90, 30, 90),
                    new Point(30, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, -30, 90),
                    new Point(30, -30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 30, 90),
                    new Point(30, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(30, -30, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, -30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 30, 90),
                    new Point(90, -30, 90),
                ],
                0x000000
            )
        ])
        let cube25 = new Object3d([
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-90, 90, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-90, 30, 90),
                    new Point(-30, 30, 90),
                    new Point(-30, 90, 90),
                    new Point(-90, 90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-90, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 90, 30),
                    new Point(-30, 90, 30),
                    new Point(-30, 90, 90),
                    new Point(-90, 90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-90, 90, 30),
                    new Point(-90, 90, 90),
                    new Point(-90, 30, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-30, 90, 90),
                    new Point(-30, 30, 90),
                ],
                0x000000
            )
        ])
        let cube26 = new Object3d([
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(-30, 90, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(-30, 30, 90),
                    new Point(30, 30, 90),
                    new Point(30, 90, 90),
                    new Point(-30, 90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(-30, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 90, 30),
                    new Point(30, 90, 30),
                    new Point(30, 90, 90),
                    new Point(-30, 90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-30, 90, 90),
                    new Point(-30, 30, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(30, 90, 90),
                    new Point(30, 30, 90),
                ],
                0x000000
            )
        ])
        let cube27 = new Object3d([
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 90, 30),
                    new Point(30, 90, 30)
                ],
                0x000000,
            ),
            new Face3d(
                [
                    new Point(30, 30, 90),
                    new Point(90, 30, 90),
                    new Point(90, 90, 90),
                    new Point(30, 90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 30, 90),
                    new Point(30, 30, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 90, 30),
                    new Point(90, 90, 30),
                    new Point(90, 90, 90),
                    new Point(30, 90, 90)
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(30, 90, 90),
                    new Point(30, 30, 90),
                ],
                0x000000
            ),
            new Face3d(
                [
                    new Point(90, 30, 30),
                    new Point(90, 90, 30),
                    new Point(90, 90, 90),
                    new Point(90, 30, 90),
                ],
                0x000000
            )
        ])
        this.cubes = [
            [
                [cube1, cube2, cube3],
                [cube4, cube5, cube6],
                [cube7, cube8, cube9]
            ],
            [
                [cube10, cube11, cube12],
                [cube13, cube14, cube15],
                [cube16, cube17, cube18]
            ],
            [
                [cube19, cube20, cube21],
                [cube22, cube23, cube24],
                [cube25, cube26, cube27]
            ]
        ]
        this.rotation = new Orientation(rx, ry, rz)
        this.rubik_rotation = 
        {
            x: [0, 0, 0],
            y: [0, 0, 0],
            z: [0, 0, 0]
        }
    }

    calculate(width, height){
        let draw_faces = []
        for(let z = 0; z < this.cubes.length; z++){
            for(let y = 0; y < this.cubes[z].length; y++){
                for(let x = 0; x < this.cubes[z][y].length; x++){
                    for(let face of this.cubes[z][y][x].faces){
                        let new_face = face.transform(this.rubik_rotation.x[x], this.rubik_rotation.y[y], this.rubik_rotation.z[z])
                        .transform(this.rotation.x, this.rotation.y, this.rotation.z)
                        .projection()
                        .translation(width/2, height/2, 0)
                        draw_faces.push(new_face)
                    }
                }
            }
        }
        return(draw_faces)
    }
}