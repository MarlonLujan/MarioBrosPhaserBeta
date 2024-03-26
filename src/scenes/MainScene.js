import Phaser from 'phaser'
import Player from '../Player.js'
import Seta from '../Seta.js'
import Box from '../Box.js'
export default class MainScene extends Phaser.Scene
{
    constructor()
	{
		super('MainScene')
	}

	preload()
    {
        this.load.image('bg-1', 'sky.png'); //en la carpeta public
        this.load.tilemapTiledJSON('map','MainScene.json');
        this.load.image('tiles','Tileset.png');
        this.load.image('player', 'idle-1.png');
        this.load.atlas('sprites_jugador','player_anim/player_anim.png',
        'player_anim/player_anim_atlas.json');
        this.load.image('sea', 'res/sea.png');
        this.load.image('seta', 'Seta.png');
        this.load.image('box', 'box.png');

        this.load.audio('theme', 'theme.mp3');


    }

    create()
    {




        this.music = this.sound.add('theme',{loop : true});
        //https://newdocs.phaser.io/docs/3.55.0/Phaser.Types.Sound.SoundConfig

        this.music.play();


        var bg_1 = this.add.tileSprite(400, 300, this.sys.game.canvas.width, this.sys.game.canvas.height, 'bg-1');
        bg_1.setScrollFactor(0);
        var sea = this.add.tileSprite(0, -this.sys.game.canvas.height, this.sys.game.canvas.width*2, this.sys.game.canvas.height*2, 'sea');
        sea.fixedToCamera = true;

        var map = this.make.tilemap({ key: 'map' });
        var tiles = map.addTilesetImage('Plataformas', 'tiles');
        var layer = map.createLayer('Suelo', tiles, 0, 0);
        var fondo = map.createLayer('Fondo', tiles, 0, 0);



        layer.setCollisionByExclusion([-1],true);//-1 array con los indices que excluimos de la colision
        //true: si la colisión se activa o no.
        this.player = new Player(this,50,100);
        this.physics.add.collider(this.player,layer);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

        //Semana 8
        this.createMushroom(map);
        this.createBoxes(layer);
        this.cameras.main.startFollow(this.player);

        this.input.keyboard.on('keydown-ESC', this.return, this);
        //https://flaviocopes.com/phaser-keyboard-events/



    }

    //Semana 8
    createBoxes(layer)
    {
        var group = this.physics.add.group({
            collideWorldBounds: true,
            immovable : true
        });

        this.box = new Box(this,150,200);
        group.add(this.box);
        this.physics.add.collider(group, layer);
        this.physics.add.collider(group, this.player);
    }

    //Semana 8
    createMushroom(map)
    {
        var objectsArr = map.getObjectLayer('objets')['objects'];

        this.setas=[];
        for(var i = 0; i < objectsArr.length; i++)
        {
             var obj = objectsArr[i];
             if(obj.gid == 115) //identificador de la seta
             {
                let seta = new Seta(this,obj.x+16,obj.y-16);
                this.setas.push(seta); //añadir en el array
                this.physics.add.overlap(seta, this.player, this.spriteHit,null,this);
                //El segundo callback debe devolver T o F y si devuelve T es que ya ha sido procesado y se deja de llamar
                //al callback 1.
             }
        }

    }

    spriteHit (sprite1, sprite2) {

        sprite1.destroy();

    }



    update (time, delta)
    {
        this.player.update(time,delta);

    }




    return()
    {        this.music.stop();

        this.scene.stop('MainScene');
        this.scene.start('Indice');
    }
}