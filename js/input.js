// ── RESTART ────────────────────────────────────────────────────────────
function restartGame() {
    resetGameState();
}

// ── INPUT ──────────────────────────────────────────────────────────────
function setupInput() {
    document.addEventListener("keydown", e => {
        if (e.repeat) return;

        if (e.key === "ArrowRight") {
            player.vx = player.speed;
        }

        if (e.key === "ArrowLeft") {
            player.vx = -player.speed;
        }

        if (!game.gameStarted && !game.gameOver) {
            game.gameStarted = true;
        }
    });

    document.addEventListener("keyup", e => {
        if (e.key === "ArrowRight" && player.vx > 0) {
            player.vx = 0;
        }

        if (e.key === "ArrowLeft" && player.vx < 0) {
            player.vx = 0;
        }
    });

    canvas.addEventListener("click", e => {
        let rect = canvas.getBoundingClientRect();
        let mx = (e.clientX - rect.left) * (canvas.width / rect.width);
        let my = (e.clientY - rect.top) * (canvas.height / rect.height);

        if (
            game.gameOver &&
            mx > canvas.width / 2 - 95 &&
            mx < canvas.width / 2 + 95 &&
            my > canvas.height / 2 + 41 &&
            my < canvas.height / 2 + 89
        ) {
            restartGame();
        }

        if (
            !game.gameStarted &&
            !game.gameOver &&
            mx > canvas.width / 2 - 95 &&
            mx < canvas.width / 2 + 95 &&
            my > canvas.height / 2 + 51 &&
            my < canvas.height / 2 + 99
        ) {
            game.gameStarted = true;
        }
    });
}