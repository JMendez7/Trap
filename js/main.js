window.onload = function()
{
    "use strict";
    
    var game = new Phaser.Game( 800, 600, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload()
    {
        introPreload();
    }
    
    var startButton;
    var title;
    var theme
    
    function create()
    {
        introCreate();
    }
    
    function update()
    {
    }
    
    function introPreload()
    {
        game.load.image('introBG', 'assets/Background Intro.png');       // Load Opening Background
        game.load.image('logo', 'assets/pics/Logo.png');                 // Load Logo
        game.load.image('startButton', 'assets/pics/Demo Button.png');   // Load Demo Button
        game.load.audio('theme', 'assets/audio/Strangehold.mp3');        // Load Theme 
        
    }
    
    function introCreate()
    {
        title = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');  // Logo sprite created.
        title.anchor.setTo(0.5, 0.5); // Centers the logo.
        
        startButton = game.add.button(game.world.centerX, game.world.centerY, 'starButton', startGame, this, 2, 1, 0);   // Add Start Button
        
        theme = game.add.audio('theme');
        theme.play();
    }
    
    function startGame(startButton)
    {
        
    }
};
