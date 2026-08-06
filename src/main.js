import './style.css'
import Phaser from 'phaser'

class MainScene extends Phaser.Scene {
    constructor() {
        super('game-scene')
    }

    preload() {}

    create() {
        this.cube_graphics = this.add.graphics();
    }

    update() {
        this.cube_graphics.clear();
        this.cube_graphics.fillStyle(0x00ff00, 1);
        this.cube_graphics.fillRect(0, 100, 200, 200);
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