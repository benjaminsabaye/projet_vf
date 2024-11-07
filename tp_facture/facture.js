function calculerTotal() {
    var prix1 = document.getElementById("prix1").value;
    var quantite1 = document.getElementById("quantite1").value;
    var prix2 = document.getElementById("prix2").value;
    var quantite2 = document.getElementById("quantite2").value;
    var prix3 = document.getElementById("prix3").value;
    var quantite3 = document.getElementById("quantite3").value;

    var resultat1 = prix1 * quantite1;
    document.getElementById('resultat1').value = resultat1;
    var resultat2 = prix2 * quantite2;
    document.getElementById('resultat2').value = resultat2;
    var resultat3 = prix3 * quantite3;
    document.getElementById('resultat3').value = resultat3;

    var total = resultat1 + resultat2 + resultat3;
    document.getElementById('total').value = total+'$';
}