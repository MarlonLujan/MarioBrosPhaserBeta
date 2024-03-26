export default class Sonido extends Phaser.Scene
{
	constructor()
	{
		super('Sonido')
	}

	preload()
    {

        this.load.audio('flas', 'flash.mp3');
    }

    create()
    {
        this.music = this.sound.add('flas',{loop : true});
        //https://newdocs.phaser.io/docs/3.55.0/Phaser.Types.Sound.SoundConfig
        
        this.music.play();

        this.input.keyboard.on('keydown-ESC', this.return, this);
        //https://flaviocopes.com/phaser-keyboard-events/
    }

    update()
    {

    }

    return()
    {
        this.music.stop();
        this.scene.stop('Sonido');
        this.scene.start('Indice');
    }
}