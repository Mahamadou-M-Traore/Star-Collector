// ── GAME STATE ─────────────────────────────────────────────────────────
const game = {
    score: 0,
    level: 1,
    gameOver: false,
    gameStarted: false,

    starsCollected: 0,

    highScore: parseInt(localStorage.getItem("starCollectorHighScore")) || 0,

    fallSpeed: 3,
    starSpawnRate: 90,
    asteroidSpawnRate: 60,
    starTimer: 0,
    asteroidTimer: 0
};

// ── PLAYER ─────────────────────────────────────────────────────────────
const player = {
    x: canvas.width / 2,
    y: canvas.height - 70,
    w: 52,
    h: 64,
    vx: 0,
    speed: 5,
    tilt: 0
};

// ── ARRAYS ─────────────────────────────────────────────────────────────
let stars = [];
let asteroids = [];
let explosions = [];

function clearObjects() {
    stars = [];
    asteroids = [];
    explosions = [];
}

function resetGameState() {
    game.score = 0;
    game.level = 1;
    game.starsCollected = 0;

    game.fallSpeed = 3;
    game.starSpawnRate = 90;
    game.asteroidSpawnRate = 60;
    game.starTimer = 0;
    game.asteroidTimer = 0;

    clearObjects();

    player.x = canvas.width / 2;
    player.vx = 0;
    player.tilt = 0;

    game.gameOver = false;
    game.gameStarted = true;
}