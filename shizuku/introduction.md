j# Introduction

Shizuku can help normal apps uses system APIs directly with adb/root privileges with a Java process started with app_process.

The name Shizuku comes from [a character](https://danbooru.donmai.us/posts/3553474).
<!DOCTYPE html>
<html>
<head>
  <title>Baahubali Warrior Game</title>
  <style>
    canvas {
      background: url('https://images.unsplash.com/photo-1523982342177-5d1dcd10d111') no-repeat center/cover;
      border: 3px solid gold;
      display: block;
      margin: 20px auto;
    }
  </style>
</head>
<body>
<canvas id="game" width="900" height="450"></canvas>

<script>
const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

let player = { x: 100, y: 300, w: 80, h: 120, hp: 100, color: 'blue' };
let enemy = { x: 700, y: 300, w: 80, h: 120, hp: 100, color: 'red' };
let playerAttack = false;

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  // Player
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.w, player.h);
  ctx.fillText('Baahubali HP: '+player.hp, player.x, player.y-10);

  // Enemy (Bhallaladeva)
  ctx.fillStyle = enemy.color;
  ctx.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);
  ctx.fillText('Enemy HP: '+enemy.hp, enemy.x, enemy.y-10);

  // Attack effect
  if(playerAttack) {
    ctx.fillStyle = 'yellow';
    ctx.fillRect(player.x+player.w, player.y+40, 60, 20);
  }
}

function update() {
  if(playerAttack &&
     player.x + player.w + 60 >= enemy.x) {
    enemy.hp -= 1;
  }
  if(enemy.hp <= 0) {
    alert('Baahubali Jeet Gaya!');
    enemy.hp = 100;
  }
}

document.addEventListener('keydown', (e) => {
  if(e.code === 'ArrowRight') player.x += 20;
  if(e.code === 'ArrowLeft') player.x -= 20;
  if(e.code === 'Space') {
    playerAttack = true;
    setTimeout(()=> playerAttack=false, 150);
  }
});

function loop() {
  draw();
  update();
  requestAnimationFrame(loop);
}
loop();
</script>
</body>
</html>
