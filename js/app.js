// Enemies our player must avoid
let Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < 500) {
        this.x = this.x + this.speed*dt;
    }
    else {
        this.x = -100;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//me

// starting position of the player
const playerX0 = 200;
const playerY0 = 320;
// Player class
let Player = function() {
    this.x = playerX0;
    this.y = playerY0;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {
    if (this.y === -8) {
        console.log("win");
        //this.y = this.y - 1;

    }
    dist();
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(keys) {

    //moves the player's position after clicking an arrow key
    switch (keys) {
        case 'up':
            if (this.y > -8) {
                this.y -= 82;
            }
            break;
        case 'down':
            if (this.y < 402) {
                this.y += 82;
            }
            break;
        case 'left':
            if (this.x > 0) {
                this.x -= 100;
            }
            break;
        case 'right':
            if (this.x < 400) {
                this.x += 100;
            }
            break;
        default:

    }
    console.log("Player - x : "+this.x+" y: "+this.y);
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//me
let allEnemies = [];
allEnemies.push(new Enemy(000, 60, 400));
allEnemies.push(new Enemy(000, 145, 330));
allEnemies.push(new Enemy(000, 225, 250));

let player = new Player();

let distance = [0,0,0];
function shock() {
    player.x = playerX0;
    player.y = playerY0;
    return console.log("SHOCK");
}

function dist() {
    if (player.y === 74) {
        distance[0] = player.x - (allEnemies[0].x);
        if (distance[0] > -30 && distance[0] < 30){
            shock();
        }
    }
    if (player.y === 156) {
        distance[1] = player.x - (allEnemies[1].x);
        if (distance[1] > -30 && distance[1] < 30){
            shock();
        }
    }
    if (player.y === 238) {
        console.log("T1");
        distance[2] = player.x - (allEnemies[2].x);
        if (distance[2] > -30 && distance[2] < 30){
            shock();
        }
    }
    //return console.log("enemy: "+allEnemies[2].x + "player: "+player.x);
}

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
