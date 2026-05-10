# 🚀 Star Collector

**Computer Graphics Final Project** | Spring 2026

---

## 👥 Team Members

| | Student ID | Full Name |
|---|---|---|
| Member 1 | 220303923 | Ahmed Mahmoud Bahagat Mohamed Abdelmoula |
| Member 2 | 220303904 | Mahamadou M. TRAORE |

🔗 **GitHub Pages:** [Play the game here](https://yourusername.github.io/star-collector)

---

## 🎮 Introduction

### What is the game?

**Star Collector** is a browser game made with **HTML**, **CSS**, **JavaScript**, and **HTML5 Canvas**.

The player controls a **spaceship** at the bottom of the screen.  
**Stars** and **asteroids** fall from the top of the screen.  
The player moves **left and right** to catch the stars and avoid the asteroids.  
All game objects are **PNG image files** drawn on the canvas.

### What is the objective?

- Collect as many **stars** ⭐ as possible to get the **highest score**.
- Every **6 collected stars**, the level increases and the game becomes **faster**.
- Avoid all **asteroids** ☄️. If the spaceship touches one, the **game is over**.
- The **best score** is saved automatically using `localStorage`.

---

## 🕹️ Game Description

### How does the game work?

1. The game starts with a **start screen**. Press any arrow key or click **Start** to begin.
2. Stars and asteroids **fall from the top** of the screen.
3. The player moves the spaceship **left and right** to collect stars and avoid asteroids.
4. Every **6 collected stars**, the level goes up and objects fall **faster**.
5. When the spaceship hits an asteroid, an **explosion** appears and the game ends.
6. The player can click **Play Again** to restart.

### Rules

| Rule | Description |
|---|---|
| ⬅️ ➡️ Move | Use **LEFT** and **RIGHT** arrow keys |
| ⭐ Collect | Touch yellow **stars** to earn **1 point** per star |
| ☄️ Avoid | Do not touch brown **asteroids** |
| 🆙 Level Up | Every **6 stars** collected, speed increases |
| 🏆 Best Score | Saved in the browser with **localStorage** |

---

## 🖥️ Graphics Concepts Used

1. **Canvas Rendering** : All objects are drawn using `ctx.drawImage()` every frame (each frame = one picture drawn very fast, about 60 times per second).

2. **2D Transformations** : `ctx.translate()` and `ctx.rotate()` are used to move and spin objects. Asteroids spin while falling. The spaceship tilts when moving. `ctx.save()` and `ctx.restore()` make sure each object rotates independently (without affecting the others).

3. **Animation** : `requestAnimationFrame` runs the game loop about **60 times per second**. Objects move a little each frame, creating smooth animation.

4. **Transparency** : `ctx.globalAlpha` fades the explosion image slowly from **1.0 to 0** (from fully visible to invisible).

5. **Collision Detection** : The distance formula checks if two circles overlap.
   ```
   distance = sqrt( (x1-x2)^2 + (y1-y2)^2 )
   ```
   If the distance is less than the combined radius, it is a **collision**.

6. **Interaction** : `keydown` and `keyup` events move and stop the spaceship. Canvas click events detect when the player clicks **Start** or **Play Again**.

7. **Local Storage** : Added after **teacher recommendation**. `localStorage` saves the best score in the browser so it stays even after the page is closed or refreshed.

---

## 📁 Project Structure

```
star-collector/
├── index.html        (main page, connects all files)
├── styles.css        (page style and canvas layout)
├── images/
│   ├── background.png
│   ├── spaceship.png
│   ├── star.png
│   ├── asteroid.png
│   └── explosion.png
└── js/
    ├── canvas.js     (gets the canvas and drawing context)
    ├── assets.js     (loads all images before game starts)
    ├── state.js      (stores score, level, player, timers)
    ├── spawn.js      (creates stars, asteroids, explosions)
    ├── collision.js  (checks if objects are touching)
    ├── update.js     (game logic, movement, level up)
    ├── render.js     (draws everything on the canvas)
    ├── input.js      (keyboard and mouse controls)
    └── main.js       (runs the game loop)
```

---

## 👨‍💻 Contributions

### Ahmed Mahmoud Bahagat (220303923)

**Files:** `index.html`, `styles.css`, `js/canvas.js`, `js/state.js`, `js/spawn.js`, `js/update.js`

- Created the page structure and connected all game files.
- Designed the page style and canvas layout.
- Set up the canvas and 2D drawing context.
- Managed the game state, player data, and all game variables.
- Built the spawn system for stars and asteroids.
- Implemented the full game logic: movement, **level up every 6 stars**, speed increase.

---

### Mahamadou M. TRAORE (220303904)

**Files:** `js/assets.js`, `js/collision.js`, `js/render.js`, `js/input.js`, `js/main.js`, `images/`

- Loaded all game **PNG images** before the game starts.
- Implemented **collision detection** using the distance formula.
- Drew the background, player, stars, asteroids, explosion, HUD, start screen, and game over screen.
- Added **keyboard and mouse** input controls.
- Connected the main **game loop** using `requestAnimationFrame`.

---

## 📚 Conclusion

### What we learned

- How to draw and animate images on **HTML5 Canvas** using `ctx.drawImage()`.
- How to use **transformations** (translate, rotate) to move and spin objects.
- How to separate **game logic** (update) from **rendering** (draw) in a game loop.
- How to detect **collisions** using the distance formula.
- How to save data with **localStorage** (added after teacher recommendation).
- How to split JavaScript into **multiple files** for better organization.

### What we would improve

- Add **sound effects** when collecting a star or hitting an asteroid.
- Add **power-ups** such as a shield or double points.
- Make some asteroids move in **diagonal or zigzag** patterns.
- Add a **pause button**.
- Make the game work on **mobile** with on-screen buttons.

---

## 🛠️ Technologies Used

`HTML` `CSS` `JavaScript` `HTML5 Canvas` `localStorage` `PNG`
