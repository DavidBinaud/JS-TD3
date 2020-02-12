function gererClavier(event) {
  var k = event.keyCode;                // event est ici un keydown, et keyCode est le code de la touche pressée
  switch(k) {
    case 37 : // touche gauche
      P.mouvement(-1,0);
      break;
    case 38 : // touche haut
      P.mouvement(0,-1);
      break;
    case 39 : // touche droite
      P.mouvement(1,0);
      break;
    case 40 : // touche bas
      P.mouvement(0,1);
      break;
    case 65 : // touche a
      P.score -= 50;
      C.afficher();
      setTimeout(suiteA,1000);
      break;
    default :
  }
  P.indiquer_situation(C);
  if (P.explose(C)) {
    document.body.removeEventListener("keydown",gererClavier);
    C.afficher();
    document.getElementById("affichage").innerHTML = "perdu !!!";
  }
  if (P.trouve(T)) {
    document.body.removeEventListener("keydown",gererClavier);
    document.getElementById("affichage").innerHTML = "gagné !!!";
  }
}

function suiteA(){
  C.cacher();
}

function go() {
  C.cacher();
  T = new Tresor(xT);
  P = new Personnage(xP);
  P.indiquer_situation(C);

  document.body.addEventListener("keydown",gererClavier);
}

// variables
let xP = Math.floor(Math.random() * 20 + 1);
let xT = Math.floor(Math.random() * 20 + 1);
let P = new Personnage(xP);
let T = new Tresor(xT);
let proba = 0.15;
let C = new Champ(xP,xT,proba);
document.getElementById("rec").onclick = go;


// lancement
go();
