let Produit = function(type, prixHt) {
    this.type = type;
    this.prixHt = prixHt;
    this.prix = (prixHt * 1.055);

};
var baguette = new Produit('Baguette', 0.85);
var croissant = new Produit('croissant', 1.10);


console.log(baguette);
console.log(croissant);


let Panier = function() {
    this.totalHt = 0;
    this.totalTt = 0;
    this.add = function(objet) {
        panier.totalHt = this.totalHt + objet.prixHt;
        panier.totalTt = this.totalTt + objet.prix;
    };
};

var panier = new Panier();
panier.add(baguette);
panier.add(croissant);

console.log(panier.totalHt);
console.log(panier.totalTt);