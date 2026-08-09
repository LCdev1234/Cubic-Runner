import {Point, Orientation, Face3d, Face2d, Object3d} from "./geometry"

export default class Cube {
    constructor(){
        let cube1 = new Object3d([
            new Face3d(
                [
                    new Point(-90, -90, -90),
                    new Point(-30, -90, -90),
                    new Point(-30, -30, -90),
                    new Point(-90, -30, -90)
                ],
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -90, -90),
                    new Point(-30, -90, -90),
                    new Point(-30, -90, -30),
                    new Point(-90, -90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -90, -90),
                    new Point(-90, -30, -90),
                    new Point(-90, -30, -30),
                    new Point(-90, -90, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-30, -90, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(30, -90, -90),
                    new Point(30, -90, -30),
                    new Point(-30, -90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-30, -90, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(30, -90, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(90, -90, -30),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(90, -90, -90),
                    new Point(90, -90, -30),
                    new Point(30, -90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(90, -30, -90),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(30, -90, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, -90, -90),
                    new Point(90, -30, -90),
                    new Point(90, -30, -30),
                    new Point(90, -90, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-30, -30, -90),
                    new Point(-30, -30, -30),
                    new Point(-90, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, -90),
                    new Point(-90, 30, -90),
                    new Point(-90, 30, -30),
                    new Point(-90, -30, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-30, -30, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(30, -30, -90),
                    new Point(30, -30, -30),
                    new Point(-30, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-30, -30, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(30, -30, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(90, -30, -90),
                    new Point(90, -30, -30),
                    new Point(30, -30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(30, -30, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, -30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 30, -30),
                    new Point(90, -30, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-90, 90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-30, 30, -90),
                    new Point(-30, 30, -30),
                    new Point(-90, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 90, -90),
                    new Point(-30, 90, -90),
                    new Point(-30, 90, -30),
                    new Point(-90, 90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, -90),
                    new Point(-90, 90, -90),
                    new Point(-90, 90, -30),
                    new Point(-90, 30, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(-30, 90, -90),
                    new Point(-30, 90, -30),
                    new Point(-30, 30, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(-30, 90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(30, 30, -90),
                    new Point(30, 30, -30),
                    new Point(-30, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 90, -90),
                    new Point(30, 90, -90),
                    new Point(30, 90, -30),
                    new Point(-30, 90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -90),
                    new Point(-30, 90, -90),
                    new Point(-30, 90, -30),
                    new Point(-30, 30, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(30, 90, -90),
                    new Point(30, 90, -30),
                    new Point(30, 30, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 90, -30),
                    new Point(30, 90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(90, 30, -90),
                    new Point(90, 30, -30),
                    new Point(30, 30, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 90, -90),
                    new Point(90, 90, -90),
                    new Point(90, 90, -30),
                    new Point(30, 90, -30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -90),
                    new Point(30, 90, -90),
                    new Point(30, 90, -30),
                    new Point(30, 30, -30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, 30, -90),
                    new Point(90, 90, -90),
                    new Point(90, 90, -30),
                    new Point(90, 30, -30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-30, -90, -30),
                    new Point(-30, -90, 30),
                    new Point(-90, -90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -90, -30),
                    new Point(-90, -30, -30),
                    new Point(-90, -30, 30),
                    new Point(-90, -90, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-30, -90, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(30, -90, -30),
                    new Point(30, -90, 30),
                    new Point(-30, -90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-30, -90, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(30, -90, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(90, -90, 30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(90, -90, -30),
                    new Point(90, -90, 30),
                    new Point(30, -90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(30, -90, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, -90, -30),
                    new Point(90, -30, -30),
                    new Point(90, -30, 30),
                    new Point(90, -90, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-30, -30, -30),
                    new Point(-30, -30, 30),
                    new Point(-90, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, -30),
                    new Point(-90, 30, -30),
                    new Point(-90, 30, 30),
                    new Point(-90, -30, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-30, -30, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(30, -30, -30),
                    new Point(30, -30, 30),
                    new Point(-30, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-30, -30, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(30, -30, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(90, -30, -30),
                    new Point(90, -30, 30),
                    new Point(30, -30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(30, -30, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, -30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 30, 30),
                    new Point(90, -30, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-90, 90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-30, 30, -30),
                    new Point(-30, 30, 30),
                    new Point(-90, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 90, -30),
                    new Point(-30, 90, -30),
                    new Point(-30, 90, 30),
                    new Point(-90, 90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, -30),
                    new Point(-90, 90, -30),
                    new Point(-90, 90, 30),
                    new Point(-90, 30, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-30, 90, 30),
                    new Point(-30, 30, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(-30, 90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(30, 30, -30),
                    new Point(30, 30, 30),
                    new Point(-30, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 90, -30),
                    new Point(30, 90, -30),
                    new Point(30, 90, 30),
                    new Point(-30, 90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, -30),
                    new Point(-30, 90, -30),
                    new Point(-30, 90, 30),
                    new Point(-30, 30, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(30, 90, 30),
                    new Point(30, 30, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 90, 30),
                    new Point(30, 90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(90, 30, -30),
                    new Point(90, 30, 30),
                    new Point(30, 30, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 90, -30),
                    new Point(90, 90, -30),
                    new Point(90, 90, 30),
                    new Point(30, 90, 30)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, -30),
                    new Point(30, 90, -30),
                    new Point(30, 90, 30),
                    new Point(30, 30, 30),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, 30, -30),
                    new Point(90, 90, -30),
                    new Point(90, 90, 30),
                    new Point(90, 30, 30),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, -90, 90),
                    new Point(-30, -90, 90),
                    new Point(-30, -30, 90),
                    new Point(-90, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-30, -90, 30),
                    new Point(-30, -90, 90),
                    new Point(-90, -90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-90, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -90, 30),
                    new Point(-90, -30, 30),
                    new Point(-90, -30, 90),
                    new Point(-90, -90, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-30, -90, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, -90, 90),
                    new Point(30, -90, 90),
                    new Point(30, -30, 90),
                    new Point(-30, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(30, -90, 30),
                    new Point(30, -90, 90),
                    new Point(-30, -90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(-30, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -90, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-30, -90, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(30, -90, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, -90, 90),
                    new Point(90, -90, 90),
                    new Point(90, -30, 90),
                    new Point(30, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(90, -90, 30),
                    new Point(90, -90, 90),
                    new Point(30, -90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, -30, 90),
                    new Point(30, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -90, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(30, -90, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, -90, 30),
                    new Point(90, -30, 30),
                    new Point(90, -30, 90),
                    new Point(90, -90, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, -30, 90),
                    new Point(-30, -30, 90),
                    new Point(-30, 30, 90),
                    new Point(-90, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-30, -30, 30),
                    new Point(-30, -30, 90),
                    new Point(-90, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-90, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, -30, 30),
                    new Point(-90, 30, 30),
                    new Point(-90, 30, 90),
                    new Point(-90, -30, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-30, -30, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, -30, 90),
                    new Point(30, -30, 90),
                    new Point(30, 30, 90),
                    new Point(-30, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(30, -30, 30),
                    new Point(30, -30, 90),
                    new Point(-30, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(-30, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, -30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-30, -30, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(30, -30, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, -30, 90),
                    new Point(90, -30, 90),
                    new Point(90, 30, 90),
                    new Point(30, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(90, -30, 30),
                    new Point(90, -30, 90),
                    new Point(30, -30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 30, 90),
                    new Point(30, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, -30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(30, -30, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, -30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 30, 90),
                    new Point(90, -30, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-90, 30, 90),
                    new Point(-30, 30, 90),
                    new Point(-30, 90, 90),
                    new Point(-90, 90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-30, 30, 30),
                    new Point(-30, 30, 90),
                    new Point(-90, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 90, 30),
                    new Point(-30, 90, 30),
                    new Point(-30, 90, 90),
                    new Point(-90, 90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-90, 30, 30),
                    new Point(-90, 90, 30),
                    new Point(-90, 90, 90),
                    new Point(-90, 30, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-30, 90, 90),
                    new Point(-30, 30, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(-30, 30, 90),
                    new Point(30, 30, 90),
                    new Point(30, 90, 90),
                    new Point(-30, 90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(30, 30, 30),
                    new Point(30, 30, 90),
                    new Point(-30, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 90, 30),
                    new Point(30, 90, 30),
                    new Point(30, 90, 90),
                    new Point(-30, 90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(-30, 30, 30),
                    new Point(-30, 90, 30),
                    new Point(-30, 90, 90),
                    new Point(-30, 30, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(30, 90, 90),
                    new Point(30, 30, 90),
                ],
                0xFFFFFF
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
                0xFFFFFF,
            ),
            new Face3d(
                [
                    new Point(30, 30, 90),
                    new Point(90, 30, 90),
                    new Point(90, 90, 90),
                    new Point(30, 90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(90, 30, 30),
                    new Point(90, 30, 90),
                    new Point(30, 30, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 90, 30),
                    new Point(90, 90, 30),
                    new Point(90, 90, 90),
                    new Point(30, 90, 90)
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(30, 30, 30),
                    new Point(30, 90, 30),
                    new Point(30, 90, 90),
                    new Point(30, 30, 90),
                ],
                0xFFFFFF
            ),
            new Face3d(
                [
                    new Point(90, 30, 30),
                    new Point(90, 90, 30),
                    new Point(90, 90, 90),
                    new Point(90, 30, 90),
                ],
                0xFFFFFF
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
    }
}