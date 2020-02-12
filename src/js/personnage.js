class Personnage extends Element {

	constructor(x) {
		super(x,20,'personnage');
		this.score = 200;
	}

	initialiser(x) {
		super.initialiser(x,20,document.getElementById('personnage'));
		this.score = 200;
	}

	mouvement(dx,dy) {
		if(this.coordY + dy > 0 && this.coordY + dy <= 20 && this.coordX + dx > 0 && this.coordX + dx <=20){
			this.coordY += dy; 
			this.coordX += dx; 
			super.placer();
			this.score--;
		}
		
	}

	indiquer_situation(C) {
		let divaffichage = document.getElementById("affichage");
		let divmessage = document.getElementById("message");
		let nbmines = this.nbProxMines(C);
		divaffichage.innerHTML = "mines à proximité: " + nbmines;
		divmessage.innerHTML = "score: " + this.score;
		if (nbmines === 0) {
			let sprite = document.getElementById("personnage");
			sprite.src = "img/personnage.png";
			this.sprite = sprite;
		}else{
			let sprite = document.getElementById("personnage");
			sprite.src = "img/personnage2.png";
			this.sprite = sprite;
		}
	}

	trouve(T) {
		return this.coordX === T.coordX && this.coordY === T.coordY;
	}

	explose(C) {
		return C.carte[this.coordY-1][this.coordX-1] === 1;
	}

	nbProxMines(C) {
		let nbmines = 0;
		if(this.coordY-2 >= 0){
			if(C.carte[this.coordY-2][this.coordX-1] === 1){
				nbmines++;
			}
		}

		if(this.coordY < 20){
			if(C.carte[this.coordY][this.coordX-1] === 1){
				nbmines++;
			}
		}

		if(this.coordX-2 >= 0){
			if(C.carte[this.coordY-1][this.coordX-2] === 1){
				nbmines++;
			}
		}

		if(this.coordX < 20){
			if(C.carte[this.coordY-1][this.coordX] === 1){
				nbmines++;
			}
		}
		return nbmines;
	}


}
