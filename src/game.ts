import * as Phaser from "phaser";

class TestScene extends Phaser.Scene{
    constructor(config:string|Phaser.Scenes.Settings.Config){
        super(config);
    }
    preload() : void{
        this.load.image("sky", "/assets/sky.png");
        this.load.image("ground", "/assets/platform.png");
        this.load.image("star", "/assets/star.png");
        this.load.image("bomb", "/assets/bomb.png");
        this.load.spritesheet("dude", "/assets/dude.png", {
            frameWidth: 32,
            frameHeight: 48
        });
    }
    create() {
        this.add.image(400, 300, "sky");

        var bomb = this.physics.add.image(400, 100, 'bomb');

        bomb.setVelocity(100, 200);
        bomb.setBounce(1, 1);
        bomb.setCollideWorldBounds(true);

    }
    update(){
        
    }
}
const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: TestScene
});