// Ajouter une nouvelle ligne de facture
function ajouterLigne() {
    let table = document.getElementById("facture").getElementsByTagName('tbody')[0];
    let nouvelleLigne = document.createElement("tr");

    nouvelleLigne.innerHTML = `
        <td><input type="text" class="desc"></td>
        <td><input type="number" class="qte" min="1" value="1" oninput="calculate()"></td>
        <td><input type="number" class="prix" min="1" value="1" oninput="calculate()"></td>
        <td class="total-ligne">0.00</td>
    `;

    table.appendChild(nouvelleLigne);
}

// Remplissage automatique avec des valeurs aléatoires
function remplir() {
    let descriptions = ["Produit A", "Produit B", "Produit C", "Produit D"];
    let lignes = document.querySelectorAll("#facture tbody tr");

    lignes.forEach(ligne => {
        ligne.querySelector(".desc").value = descriptions[Math.floor(Math.random() * descriptions.length)];
        ligne.querySelector(".qte").value = Math.floor(Math.random() * 10) + 1;
        ligne.querySelector(".prix").value = (Math.random() * 99 + 1).toFixed(2);
    });

    calculate();
}

// Calcul des montants
function calculate() {
    let lignes = document.querySelectorAll("#facture tbody tr");
    let sousTotal = 0;

    lignes.forEach(ligne => {
        let qte = parseInt(ligne.querySelector(".qte").value) || 0;
        let prix = parseFloat(ligne.querySelector(".prix").value) || 0;
        let totalLigne = qte * prix;
        ligne.querySelector(".total-ligne").textContent = totalLigne.toFixed(2);
        sousTotal += totalLigne;
    });

    document.getElementById("sousTotal").textContent = sousTotal.toFixed(2);

    // Calcul du total avec remise, taxe et frais
    let remise = parseFloat(document.getElementById("remise").value) || 0;
    let taxe = parseFloat(document.getElementById("taxe").value) || 0;
    let frais = parseFloat(document.getElementById("frais").value) || 0;

    let sousTotalMoinsRemise = sousTotal - (sousTotal * remise / 100);
    let taxeTotale = sousTotalMoinsRemise * (taxe / 100);
    let totalFinal = sousTotalMoinsRemise + taxeTotale + frais;

    document.getElementById("total").textContent = totalFinal.toFixed(2);
}

function imprimerFacture() {
    window.print();
}

