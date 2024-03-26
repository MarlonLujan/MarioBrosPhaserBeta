export default class Indice extends Phaser.Scene
{
	constructor()
	{
		super('Indice')
	}

	preload()
    {
        this.load.image('bg-2', 'portada.png'); //en la carpeta public


        this.load.image('button', 'boton.png');
    }

    create()
    {
        var bg_1 = this.add.tileSprite(400, 300, this.sys.game.canvas.width, this.sys.game.canvas.height, 'bg-2');
        bg_1.setScrollFactor(0);

        let buttonPlayVideo = this.add.image(350, 560, 'button');
        buttonPlayVideo.setInteractive({ useHandCursor: true });
        buttonPlayVideo.on('pointerover', () => { console.log('pointerover');
        buttonPlayVideo.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000); });
        buttonPlayVideo.on('pointerdown', () => { 
            this.scene.stop('Indice');
            this.scene.start("Video");
         });
         buttonPlayVideo.on('pointerout', () => { console.log('pointerout');
         buttonPlayVideo.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff); });


         let buttonPlaySound = this.add.image(350, 490, 'button');
         buttonPlaySound.setInteractive({ useHandCursor: true });
         buttonPlaySound.on('pointerover', () => { console.log('pointerover');
         buttonPlaySound.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000); });
         buttonPlaySound.on('pointerdown', () => { 
             this.scene.stop('Indice');
             this.scene.start("Sonido");
          });
          buttonPlaySound.on('pointerout', () => { console.log('pointerout');
          buttonPlaySound.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff); });

          let buttonPlayAnim = this.add.image(350, 420, 'button');
          buttonPlayAnim.setInteractive({ useHandCursor: true });
          buttonPlayAnim.on('pointerover', () => { console.log('pointerover');
          buttonPlayAnim.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000); });
          buttonPlayAnim.on('pointerdown', () => { 
              this.scene.stop('Indice');
              this.scene.start("MainScene");
           });
           buttonPlayAnim.on('pointerout', () => { console.log('pointerout');
           buttonPlayAnim.setTint(0xffffff, 0xffffff, 0xffffff, 0xffffff); });
 
          var buttonTextVideo  = this.add.text(306, 550, "Ver video");
          var buttonTextSound  = this.add.text(318, 480, "Musica");
          var buttonTextSound  = this.add.text(323, 410, "Jugar");
    }

    update()
    {

    }
}