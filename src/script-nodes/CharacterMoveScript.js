
// You can write more code here

/* START OF COMPILED CODE */

class CharacterMoveScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {number} */
	deltaX = 0;
	/** @type {number} */
	deltaY = 0;
	/** @type {number} */
	duration = 0;

	/* START-USER-CODE */

	awake() {

		this.scene.tweens.add({
			targets: this.gameObject,
			duration: this.duration,
			x: this.gameObject.x + this.deltaX,
			y: this.gameObject.y + this.deltaY,
			yoyo: true,
			repeat: -1
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
