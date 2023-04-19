
// You can write more code here

/* START OF COMPILED CODE */

class StartAnimationScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {string} */
	animationKey = "";
	/** @type {boolean} */
	killOnComplete = false;

	/* START-USER-CODE */

	start() {

		this.gameObject.play(this.animationKey);

		if (this.killOnComplete) {

			this.gameObject.once(
				`animationcomplete-${this.animationKey}`,
				() => this.gameObject.destroy());
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
