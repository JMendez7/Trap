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
    var theme;
    var gameMusic;
    
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
        game.load.audio('gameMusic', 'assets/audio/Strangehold \(Remix\).mp3'); // Load Game Music
        
    }
    
    function introCreate()
    {
        title = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');  // Logo sprite created.
        title.anchor.setTo(0.5, 0.5); // Centers the logo.
        
        startButton = game.add.button(game.world.centerX, game.world.centerY + 100, 'startButton', startGame, this);   // Add Start Button
        startButton.anchor.setTo(0.5, 0.5);
        
        theme = game.add.audio('theme');
        theme.loop = true;
        theme.play();
    }
    
    function over()
    {
        console.log('button over');
    }
    
    function startGame()
    {
        theme.stop();
        createGame();
    }
    
    function createGame()
    {
        gameMusic = game.add.audio('gameMusic');
        gameMusic.loop = true;
        gameMusic.play();
    }
};
