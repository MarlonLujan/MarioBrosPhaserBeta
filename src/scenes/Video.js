import Phaser from 'phaser'
export default class Video extends Phaser.Scene
{
	constructor()
	{
		super('Video')
	}

	preload()
    {

        this.load.video('prueba', 'probar.mp4', 'loadeddata', false, true);
    }

    create()
    {
        var vid = this.add.video(200, 100, 'prueba');
        vid.play(true);
        vid.setPaused(false);

        this.input.keyboard.on('keydown-ESC', this.return, this);
    }

    update()
    {

    }

    return()
    {
        this.scene.stop('Video');
        this.scene.start('Indice');
    }
}