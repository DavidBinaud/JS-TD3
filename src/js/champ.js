class Champ {

	constructor(xP,xT,proba) {
		this.carte = new Array();
		for (var i = 0; i < 20; i++) {
			this.carte.push(new Array());
			for (var j = 0; j < 20; j++) {
				this.carte[i].push((Math.random() < proba? 1 : 0));
			}
		}
		this.carte[0][xT-1] = 0;
		this.carte[1][xT-1] = 0;
		if (xT-2 >= 0) {
			this.carte[0][xT-2] = 0;
		}
		if (xT < 20) {
			this.carte[0][xT] = 0; 
		}


		this.carte[19][xP-1] = 0;
		this.carte[18][xP-1] = 0;
		if (xP-2 >= 0) {
			this.carte[19][xP-2] = 0;
		}
		if (xP < 20) {
			this.carte[19][xP] = 0;
		}

		this.balise_div = document.getElementById("carte");
	}

	afficher() {
		for (var i = 0; i < 20; i++) {
			for (var j = 0; j < 20; j++) {
				let imgToInsert = document.createElement("img");
				imgToInsert.style.top = "" + (51 + 20 * i) + "px";
				imgToInsert.style.left = "" + (51 + 20 * j) + "px";
				imgToInsert.src = "img/croix.png";

				if (this.carte[i][j] === 1) {
					imgToInsert.className = "visible";
				}else{
					imgToInsert.className = "cachee";
				}
				this.balise_div.appendChild(imgToInsert);
			}
		}
	}

	cacher() {
		for (var i = 0; i < 400; i++) {
			this.balise_div.removeChild(this.balise_div.children[0]);
		}
	}
}
