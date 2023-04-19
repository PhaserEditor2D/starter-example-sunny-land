
// You can write more code here

/* START OF COMPILED CODE */

class ControllerButtonScript extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */

		this.gameObject.setInteractive();

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	isDown = false;

	update() {

		this.isDown = false;

		for (const pointer of this.scene.game.input.pointers) {

			if (pointer.isDown) {

				const [obj] = this.scene.input.hitTestPointer(pointer);

				if (obj === this.gameObject) {

					this.isDown = true;

					return;
				}
			}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
