
// You can write more code here

/* START OF COMPILED CODE */

class Eagle extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 95, y ?? 75, texture || "atlas", frame ?? "eagle/eagle-attack-1");

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setOffset(3, 9);
		this.body.setSize(32, 30, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "eagle/eagle-attack";

		/* START-USER-CTR-CODE */
		this.scene.tweens.add({
			targets: this,
			y: this.y + 50
		});
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	preUpdate(time, delta) {

		super.preUpdate(time, delta);

		/** @type {Level} */
		const level = this.scene;

		const player = level.player;

		this.flipX = this.x < player.x;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
