// ── LOAD ALL IMAGES ────────────────────────────────────────────────────
const images = {};

const sources = {
    background: "images/background.png",
    player: "images/spaceship.png",
    star: "images/star.png",
    asteroid: "images/asteroid.png",
    explosion: "images/explosion.png"
};

// Count loaded images — start game only when ALL 5 are ready
function loadImages(startGame) {
    let loaded = 0;

    for (let key in sources) {
        images[key] = new Image();
        images[key].src = sources[key];
        images[key].onload = () => {
            if (++loaded === 5) startGame();
        };
    }
}