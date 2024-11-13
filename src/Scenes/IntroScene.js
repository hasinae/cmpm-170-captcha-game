export default class IntroScene extends Phaser.Scene {
    constructor() {
        super({ key: 'IntroScene' });
    }

    preload() {}

    create() {
        this.add.text(500, 200, 'Captcha Game', { fontSize: '64px', fill: '#ffffff', fontStyle: 'bold' }).setOrigin(0.5);

        // Play Button with a centered background
        const playButtonBg = this.add.rectangle(500, 400, 200, 60, 0x006400).setOrigin(0.5); // Dark green fill
        const playButton = this.add.text(500, 400, 'Play', { fontSize: '36px', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        
        playButton.on('pointerdown', () => {
            this.scene.start('CaptchaScene'); // Start the main game scene
        });
        playButton.on('pointerover', () => {
            playButton.setStyle({ fill: '#ff0000' });
            playButtonBg.setFillStyle(0x228B22); // Lighter green on hover
        });
        playButton.on('pointerout', () => {
            playButton.setStyle({ fill: '#00ff00' });
            playButtonBg.setFillStyle(0x006400); 
        });

        // Credits Button with a centered background
        const creditsButtonBg = this.add.rectangle(500, 500, 200, 60, 0x006400).setOrigin(0.5); 
        const creditsButton = this.add.text(500, 500, 'Credits', { fontSize: '36px', fill: '#00ff00' }).setOrigin(0.5).setInteractive();
        
        creditsButton.on('pointerdown', () => {
            this.showCredits();
        });
        creditsButton.on('pointerover', () => {
            creditsButton.setStyle({ fill: '#ff0000' });
            creditsButtonBg.setFillStyle(0x228B22);
        });
        creditsButton.on('pointerout', () => {
            creditsButton.setStyle({ fill: '#00ff00' });
            creditsButtonBg.setFillStyle(0x006400);
        });
    }

    showCredits() {
        const creditsOverlay = this.add.rectangle(500, 400, 400, 350, 0x000000, 0.8).setOrigin(0.5);
        
        const creditsText = this.add.text(500, 350, 'Hasina Esteqlal\n Samina Esteqlal\nPatrick James Alcantara\nRyo Safadi\n\nCMPM 170 Prototype 3\nThanks for Playing!', 
            { fontSize: '24px', fill: '#ffffff', align: 'center', lineSpacing: 10 })
            .setOrigin(0.5)
            .setWordWrapWidth(380);

        // Close Button for credits overlay
        const closeButtonBg = this.add.rectangle(500, 500, 100, 40, 0x006400).setOrigin(0.5);
        const closeButton = this.add.text(500, 500, 'Close', { fontSize: '24px', fill: '#ff0000' }).setOrigin(0.5).setInteractive();
        
        closeButton.on('pointerdown', () => {
            creditsOverlay.destroy();
            creditsText.destroy();
            closeButton.destroy();
            closeButtonBg.destroy();
        });
    }
}
