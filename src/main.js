import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import MainScene from './scenes/MainScene'
import Sonido from './scenes/Sonido'
import Video from './scenes/Video'
import Indice from './scenes/Indice'
const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Indice,Sonido,Video,MainScene]
}

export default new Phaser.Game(config)
