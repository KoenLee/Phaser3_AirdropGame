import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 }
    }
  },
  scene: {
    preload: preload,
    create: create
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.setBaseURL("http://labs.phaser.io");

  this.load.image("sky", "assets/skies/space3.png");
  this.load.image("logo", "assets/sprites/phaser3-logo.png");
  this.load.image("red", "assets/particles/red.png");
}

function create() {
  this.add.image(0, 0, "sky");

  var particles = this.add.particles("red");

  var emitter = particles.createEmitter({
    speed: 200,
    scale: { start: 1, end: 0 },
    blendMode: "ADD"
  });

  var logo = this.physics.add.image(400, 100, "logo");

  logo.setVelocity(200, 200);
  logo.setBounce(1, 1);
  logo.setCollideWorldBounds(true);

  emitter.startFollow(logo);
}
