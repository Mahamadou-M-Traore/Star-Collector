// ── DRAW IMAGE HELPER ──────────────────────────────────────────────────
function drawImg(img, x, y, w, h, rotation = 0, alpha = 1) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.drawImage(img, -w / 2, -h / 2, w, h);
    ctx.restore();
}

// ── DRAW: HUD ──────────────────────────────────────────────────────────
function drawHUD() {
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, canvas.width, 50);

    ctx.fillStyle = "#FFD700";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "left";
    ctx.fillText("⭐ " + game.score, 15, 33);

    ctx.fillStyle = "#aaaaaa";
    ctx.font = "12px Arial";
    ctx.fillText("BEST: " + game.highScore, 15, 47);

    ctx.fillStyle = "#88ccff";
    ctx.font = "bold 20px Arial";
    ctx.textAlign = "right";
    ctx.fillText("LVL " + game.level, canvas.width - 15, 33);

    let progress = (game.starsCollected % 6) / 6;

    ctx.fillStyle = "#222244";
    ctx.fillRect(canvas.width / 2 - 70, 17, 140, 10);

    let bar = ctx.createLinearGradient(canvas.width / 2 - 70, 0, canvas.width / 2 + 70, 0);
    bar.addColorStop(0, "#0099ff");
    bar.addColorStop(1, "#00ffcc");

    ctx.fillStyle = bar;
    ctx.fillRect(canvas.width / 2 - 70, 17, 140 * progress, 10);

    ctx.strokeStyle = "#445";
    ctx.lineWidth = 1;
    ctx.strokeRect(canvas.width / 2 - 70, 17, 140, 10);

    ctx.fillStyle = "#667";
    ctx.font = "10px Arial";
    ctx.textAlign = "center";
    ctx.fillText("NEXT LEVEL", canvas.width / 2, 40);
}

// ── DRAW: BUTTON ───────────────────────────────────────────────────────
function drawButton(cx, cy, label) {
    ctx.fillStyle = "#0099cc";
    ctx.beginPath();
    ctx.roundRect(cx - 95, cy - 24, 190, 48, 10);
    ctx.fill();

    ctx.fillStyle = "#e0f8ff";
    ctx.font = "bold 21px Arial";
    ctx.textAlign = "center";
    ctx.fillText(label, cx, cy + 7);
}

// ── DRAW (RENDERING) ───────────────────────────────────────────────────
function draw() {
    ctx.drawImage(images.background, 0, 0, canvas.width, canvas.height);

    for (let s of stars) {
        drawImg(images.star, s.x, s.y, s.w, s.h);
    }

    for (let a of asteroids) {
        drawImg(images.asteroid, a.x, a.y, a.w, a.h, a.rotation);
    }

    if (!game.gameOver) {
        drawImg(images.player, player.x, player.y, player.w, player.h, player.tilt);
    }

    for (let e of explosions) {
        drawImg(images.explosion, e.x, e.y, e.size, e.size, 0, e.life);
    }

    drawHUD();

    if (game.gameOver) {
        ctx.fillStyle = "rgba(0,0,0,0.65)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.textAlign = "center";
        ctx.fillStyle = "#ff4455";
        ctx.font = "bold 54px Arial";
        ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 90);

        ctx.fillStyle = "white";
        ctx.font = "24px Arial";
        ctx.fillText("Score: " + game.score + "  |  Level: " + game.level, canvas.width / 2, canvas.height / 2 - 40);

        if (game.score >= game.highScore && game.score > 0) {
            ctx.fillStyle = "#FFD700";
            ctx.font = "bold 22px Arial";
            ctx.fillText("🏆 NEW BEST: " + game.highScore + " 🏆", canvas.width / 2, canvas.height / 2 + 2);
        } else {
            ctx.fillStyle = "#aaaaaa";
            ctx.font = "18px Arial";
            ctx.fillText("Best score: " + game.highScore, canvas.width / 2, canvas.height / 2 + 2);
        }

        drawButton(canvas.width / 2, canvas.height / 2 + 65, "▶  Play Again");
    }

    if (!game.gameStarted && !game.gameOver) {
        ctx.fillStyle = "rgba(0,0,0,0.55)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.textAlign = "center";
        ctx.fillStyle = "#00ccff";
        ctx.font = "bold 46px Arial";
        ctx.fillText("STAR COLLECTOR", canvas.width / 2, canvas.height / 2 - 110);

        ctx.fillStyle = "white";
        ctx.font = "18px Arial";
        ctx.fillText("Collect ⭐  stars — avoid ☄️  asteroids", canvas.width / 2, canvas.height / 2 - 62);
        ctx.fillText("Use ← → Arrow Keys to move", canvas.width / 2, canvas.height / 2 - 34);

        ctx.fillStyle = "#FFD700";
        ctx.font = "16px Arial";
        ctx.fillText("Every 6 stars = Level Up!", canvas.width / 2, canvas.height / 2);

        ctx.fillStyle = "#aaaaaa";
        ctx.font = "15px Arial";
        ctx.fillText("🏆 Best score: " + game.highScore, canvas.width / 2, canvas.height / 2 + 28);

        drawButton(canvas.width / 2, canvas.height / 2 + 75, "▶  Start Game");
    }
}