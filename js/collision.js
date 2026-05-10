// ── COLLISION DETECTION ────────────────────────────────────────────────
function isColliding(a, ra, b, rb) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy) < (ra + rb) * 0.8;
}