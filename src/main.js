import IntroScene from './Scenes/IntroScene.js';
import CaptchaScene from './Scenes/CaptchaScene.js';

// Game configuration
const config = {
    parent: 'gameContainer',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true 
    },
    width: 1050,
    height: 800,
    backgroundColor: '#39FF14',
    scene: [IntroScene, CaptchaScene]
};

const game = new Phaser.Game(config);

