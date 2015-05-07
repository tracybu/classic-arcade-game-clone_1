// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.random() * 384;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x +=this.speed*dt;
    if (this.x >=505) {
        this.x=0;
    }
    checkCollision(this);
};

var checkCollision = function(anEnemy) {
// check for collision between enemy and player
if (
player.y + 131 >= anEnemy.y + 90
&& player.x + 25 <= anEnemy.x + 88
&& player.y + 73 <= anEnemy.y + 135
&& player.x + 76 >= anEnemy.x + 11) {
console.log('collided');
player.x = 202.5;
player.y = 383;
}
// check for player reaching top of canvas 
if (player.y + 63 <= 0) {
player.x = 202.5;
player.y = 383;

}
// check if player reaching to canvas borders

if (player.y > 383 ) {
player.y = 383;
}
if (player.x > 402.5) {
player.x = 402.5;
}
if (player.x < 2.5) {
player.x = 2.5;
}
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-cat-girl.png';
}


Player.prototype.update = function() {

}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(click) {
    if (click == 'up'){player.y -= player.speed;}
    if (click == 'down'){player.y += player.speed;}
    if (click == 'left'){player.x -= player.speed;}
    if (click == 'right'){player.x += player.speed;}
    console.log('click is: ' + click);

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player(252.5, 383, 50);
for (var i = 1; i<4; i++) {
    var enemy = new Enemy(0,i * 84 - 20, Math.random()*250);
    allEnemies.push(enemy);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
