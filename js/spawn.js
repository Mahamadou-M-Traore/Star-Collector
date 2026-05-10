// ── SPAWN ──────────────────────────────────────────────────────────────
function spawnStar() {
    stars.push({
        x: Math.random() * (canvas.width - 60) + 30,
        y: -40,
        w: 44,
        h: 44,
        radius: 20,
        points: game.level
    });
}

function spawnAsteroid() {
    let size = 44 + Math.random() * 24;

    asteroids.push({
        x: Math.random() * (canvas.width - size) + size / 2,
        y: -size,
        w: size,
        h: size,
        radius: size / 2,

        speedMultiplier: 0.8 + Math.random() * 0.5,

        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.05
    });
}

function spawnExplosion(x, y) {
    explosions.push({
        x,
        y,
        size: 120,
        life: 1.0
    });
}