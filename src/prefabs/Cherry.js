
// You can write more code here

/* START OF COMPILED CODE */

class Cherry extends Phaser.GameObjects.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 76, y ?? 31, texture || "atlas", frame ?? "cherry/cherry-1");

		scene.physics.add.existing(this, true);
		this.body.setOffset(0, 2);
		this.body.setSize(17, 17, false);

		// startAnimationScript
		const startAnimationScript = new StartAnimationScript(this);

		// startAnimationScript (prefab fields)
		startAnimationScript.animationKey = "cherry/cherry";

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
