
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class StartAnimation extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__StartAnimation"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {StartAnimation} */
	static getComponent(gameObject) {
		return gameObject["__StartAnimation"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
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
