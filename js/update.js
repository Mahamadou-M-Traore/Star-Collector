// ── UPDATE (GAME LOGIC) ────────────────────────────────────────────────
function update() {
    player.x += player.vx;
    player.tilt += ((player.vx > 0 ? 0.25 : player.vx < 0 ? -0.25 : 0) - player.tilt) * 0.12;

    if (player.x - player.w / 2 < 0) {
        player.x = player.w / 2;
    }

    if (player.x + player.w / 2 > canvas.width) {
        player.x = canvas.width - player.w / 2;
    }

    if (++game.starTimer >= game.starSpawnRate) {
        spawnStar();
        game.starTimer = 0;
    }

    if (++game.asteroidTimer >= game.asteroidSpawnRate) {
        spawnAsteroid();
        game.asteroidTimer = 0;
    }

    for (let i = stars.length - 1; i >= 0; i--) {
        let s = stars[i];

        s.y += game.fallSpeed;

        if (isColliding(player, 22, s, s.radius)) {
            game.score += s.points;
            game.starsCollected++;

            stars.splice(i, 1);

            let newLevel = Math.floor(game.starsCollected / 6) + 1;

            if (newLevel > game.level) {
                game.level = newLevel;

                game.fallSpeed = 3 + (game.level - 1) * 0.6;

                game.starSpawnRate = Math.max(40, 90 - (game.level - 1) * 5);
                game.asteroidSpawnRate = Math.max(28, 60 - (game.level - 1) * 4);
            }

            continue;
        }

        if (s.y > canvas.height + 50) {
            stars.splice(i, 1);
        }
    }

    for (let i = asteroids.length - 1; i >= 0; i--) {
        let a = asteroids[i];

        a.y += game.fallSpeed * a.speedMultiplier;
        a.rotation += a.rotationSpeed;

        if (isColliding(player, 22, a, a.radius - 8)) {
            spawnExplosion(player.x, player.y);

            if (game.score > game.highScore) {
                game.highScore = game.score;
                localStorage.setItem("starCollectorHighScore", game.highScore);
            }

            game.gameOver = true;
        }

        if (a.y > canvas.height + 60) {
            asteroids.splice(i, 1);
        }
    }

    for (let i = explosions.length - 1; i >= 0; i--) {
        explosions[i].life -= 0.03;

        if (explosions[i].life <= 0) {
            explosions.splice(i, 1);
        }
    }
}