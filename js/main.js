// ── GAME LOOP ──────────────────────────────────────────────────────────
function gameLoop() {
    if (game.gameStarted && !game.gameOver) {
        update();
    }

    draw();
    requestAnimationFrame(gameLoop);
}

setupInput();
loadImages(gameLoop);