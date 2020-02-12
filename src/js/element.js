class Element {

	constructor(x,y,id) {
		this.coordX = x;
		this.coordY = y;
		this.sprite = document.getElementById(id);
		this.placer();
	}

	initialiser(x,y,str) {
		this.coordX = x;
		this.coordY = y;
		this.setSrc(str);
		this.placer();
	}

	setSrc(str) {
		this.sprite = str;
	}

	placer() {
		this.sprite.style.top = "" + (51 + 20 * (this.coordY-1)) + "px"
		this.sprite.style.left = "" + (51 + 20 * (this.coordX-1)) + "px";
	}

}
