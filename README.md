## COMPUTER GRAPHICS PROJECT REPORT

## SPRING 2026

```
Student ID: 220303904
```
```
Full Name: Mahamadou M. TRAORE
```
```
Student ID: 220303923
```
```
Full Name: Ahmed Mahmoud bahagat Mohamed Abdelmoula
```
```
Project Github
Link:
```
```
https://github.com/Mahamadou-M-Traore/Star-Collector
```
## INTRODUCTION

**What is your game?**

```
Our game is called Star Collector. It is a browser game made with HTML, CSS, and
JavaScript.
The player controls a spaceship at the bottom of the screen.
Stars and asteroids fall from the top of the screen.
The player moves left and right to catch the stars and avoid the asteroids.
The game uses the HTML Canvas API to draw everything on the screen.
There are no extra libraries. Everything is built from zero with plain JavaScript.
```
**What is the objective of the game?**


The objective is to collect as many stars as possible and get the highest score.
Each star gives the player 1 point per level (higher levels = more points per star).
The player must avoid all asteroids. If the player touches one, the game is over.
Every 10 stars, the game goes to a new level. Higher levels are faster and harder.
The player tries to survive as long as possible and reach the highest level.


## GAME DESCRIPTION

**How does the game work?**

```
The game starts with a start screen. The player presses any key or clicks Start to begin.
The spaceship appears at the bottom of the screen. Stars and asteroids fall from the top.
The player uses the LEFT and RIGHT arrow keys to move the spaceship.
When the spaceship touches a star, the star disappears and the score goes up.
When the player collects 10 stars, the level goes up by 1.
```
- Objects fall faster and appear more often in higher levels.
- The progress bar at the top shows how close you are to the next level.
The game ends when the spaceship touches an asteroid.
- An explosion animation plays (particles fly out).
- The game over screen shows the final score and level.
The player can click Play Again to restart from level 1.

**What are the rules?**

```
Rule 1: Use the LEFT and RIGHT arrow keys to move the spaceship.
Rule 2: Collect falling STARS (yellow) to earn points.
```
- Each star is worth 1 point at level 1, 2 points at level 2, and so on.
Rule 3: AVOID falling ASTEROIDS (brown). If you touch one, the game is over.
Rule 4: Every 10 stars collected = Level Up.
- Speed increases. More objects appear. The game gets harder.
Rule 5: There is no time limit. The game ends only when you hit an asteroid.
Rule 6: You can restart at any time after game over by clicking Play Again.


## GRAPHICS CONCEPTS USED

**What computer graphics concepts did you use? (e.g. Transformations, Collision**

**Detection, Animation, etc.) Explain how you used them.**

```
We used five computer graphics concepts:
```
1. TRANSFORMATION (ctx.save / ctx.translate / ctx.rotate):
We move the canvas origin to each object's center with ctx.translate().
Then we rotate with ctx.rotate(). This spins stars and asteroids as they fall.
The spaceship also tilts left or right when the player moves it.
We use ctx.save() before and ctx.restore() after, so one rotation
does not affect other objects. This is the standard transformation pattern.
2. ANIMATION (requestAnimationFrame):
We use requestAnimationFrame to run the game loop ~60 times per second.
Every frame, all objects move a little. This creates smooth animation.
The engine flame flickers because we use Math.random() for its height each frame.
Stars and asteroids rotate a little more each frame (rotation += 0.05 per frame).
3. RENDERING (HTML Canvas 2D API):
We draw different shapes: triangle (spaceship body), circles (cockpit, glow),
irregular polygons (asteroids), and 5-pointed star shapes (collectible stars).
We use createLinearGradient() for the background and createRadialGradient()
for the glow effect around each star. We also use ctx.globalAlpha for
particle transparency during the explosion animation.
4. INTERACTION (Event Listeners):
We use document.addEventListener("keydown") and ("keyup") to read the keyboard.
keydown: player presses arrow key -> spaceship starts moving (vx = speed).
keyup: player releases key -> spaceship stops (vx = 0).
We also use canvas.addEventListener("click") to detect button clicks.
5. COLLISION DETECTION (Distance Formula):
We treat each object as a circle with a radius.
We calculate the distance between two object centers:
distance = sqrt( (x1-x2)^2 + (y1-y2)^2 ) [Pythagorean theorem].
If distance < (radius1 + radius2) * 0.8, they are colliding.
The factor 0.8 makes the hit zone a little smaller (more fair for the player).


# SCREENSHOTS


# Team Member #

# CONTRIBUTIONS

```
Mahamadou M. TRAORE — Game Logic
```
```
I worked on the game logic (the update() function).
I wrote the code that moves all objects every frame (position += velocity).
I built the collision detection system using the distance formula.
I created the spawn system: new stars appear every 90 frames,
new asteroids appear every 60 frames, using frame counters.
I built the level up system: every 10 stars, the level increases,
fallSpeed increases, and spawn rates decrease (harder game).
I wrote the keyboard event listeners (keydown / keyup) for player control.
```
# I also worked on boundary checking to keep the player inside the canvas.

# Team Member #

```
Ahmed Bahgat — Graphics and Rendering
```
```
I worked on all the visual parts of the game (the draw() functions).
I drew the spaceship using a triangle shape and a circle for the cockpit.
I added the tilting effect using ctx.rotate() and smooth interpolation.
I drew the engine flame with a flickering effect using Math.random().
I drew the 5-pointed stars using a trigonometry formula (outer and inner points).
I drew the asteroids as irregular polygons with 5-7 sides.
I built the explosion particle system with 24 particles that fade and fall.
I designed the space background with a linear gradient and 100 twinkling dots.
I made the HUD (heads-up display) with score, level, and a progress bar.
```
# I designed the start screen and the game over screen.


# CONCLUSION

**What did you learn?**

```
We learned many things from this project:
```
- We learned how to use the HTML Canvas API to build a game from zero.
- We learned the game loop pattern: always update state first, then draw.
This keeps the code clean and easy to understand.
- We learned how to use ctx.save() and ctx.restore() for safe transformations.
Without these, one rotation would affect all objects on screen.
- We learned how to rotate and move objects independently using
ctx.translate() and ctx.rotate().
- We learned how to use JavaScript arrays to manage many objects at the same time.
We add objects with push() and remove them with splice().
- We learned how to detect collisions using the Pythagorean distance formula.
- We learned how to use keyboard event listeners (keydown / keyup).
- We learned how to increase difficulty over time by changing speed
and spawn rate values as the level increases.
- We learned how to split work between two team members and combine it.

**What would you improve if you had more time?**

```
If we had more time, we would improve the game in these ways:
```
1. Sound effects: add sounds when collecting a star or hitting an asteroid.
2. Enemy movement: make some asteroids move in zigzag patterns, not just straight down.
3. Power-ups: add a shield (protect the player for 3 seconds) or double points item.
4. Better graphics: use real image files for the spaceship and objects
instead of shapes drawn with code.
5. High score system: save the best score in localStorage so it stays
between games.
6. Mobile support: add on-screen buttons so the game works on phones and tablets.
7. More levels: add a boss at level 10 that moves side to side and shoots back.
8. Pause feature: let the player pause and resume the game at any time.


