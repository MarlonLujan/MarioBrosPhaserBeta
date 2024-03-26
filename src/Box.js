import Phaser from 'phaser'
export default class Box extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene,x,y)
    {
        super(scene,x,y,'box');
        this.scene = scene;
        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
        
        this.body.physicsType = 1; //lo marca como suelo
    }

    update(time,delta)
    {
    }
}