
// You can write more code here

/* START OF COMPILED CODE */

class Gem extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 127, y ?? 45, texture || "atlas", frame ?? "gem/gem-1");

		scene.physics.add.existing(this, true);
		this.body.pushable = false;
		this.body.immovable = true;
		this.body.setSize(15, 13, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "gem/gem";

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
