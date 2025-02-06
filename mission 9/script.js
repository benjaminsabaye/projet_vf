function corriger() {
    let score = 0;
    let correctAnswers = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    
    for (let i = 1; i <= 10; i++) {
        let selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === correctAnswers[i - 1]) {
            score++;
        }
    }
    document.getElementById("score").textContent = `Votre score est : ${score}/10`;
}

function afficherCorrige() {
    let correctionWindow = window.open("", "_blank", "width=400,height=400");
    correctionWindow.document.write("<html><head><title>Corrigé</title>");
    correctionWindow.document.write("<style>");
    
    // Définir la police personnalisée
    correctionWindow.document.write("@font-face {");
    correctionWindow.document.write("font-family: 'Arial';");
    correctionWindow.document.write("src: url('../fonts/arial.ttf');");
    correctionWindow.document.write("}");
    
    // Style du texte et du fond
    correctionWindow.document.write("body {");
    correctionWindow.document.write("font-family: 'Arial', sans-serif;");
    correctionWindow.document.write("color:rgb(189, 1, 241);"); // Couleur du texte (gris foncé)
    correctionWindow.document.write("background-color:rgb(0, 0, 0);"); // Couleur du fond (gris clair)
    correctionWindow.document.write("}");
    
    // Style des titres
    correctionWindow.document.write("h1 {");
    correctionWindow.document.write("color: rgb(189, 1, 241);"); // Couleur du titre (gris foncé)
    correctionWindow.document.write("}");
    
    correctionWindow.document.write("</style>");
    correctionWindow.document.write("</head><body>");
    correctionWindow.document.write("<h1>Corrigé du Quiz</h1>");
    correctionWindow.document.write("<p>1. L Lawliet</p>");
    correctionWindow.document.write("<p>2. Pikachu</p>");
    correctionWindow.document.write("<p>3. Devenir Roi des Pirates</p>");
    correctionWindow.document.write("<p>4. CoMix Wave Films</p>");
    correctionWindow.document.write("<p>5. Renforcement</p>");
    correctionWindow.document.write("<p>6. Orochimaru</p>");
    correctionWindow.document.write("<p>7. Akira Toriyama</p>");
    correctionWindow.document.write("<p>8. Ken Kaneki</p>");
    correctionWindow.document.write("<p>9. Titan Assaillant</p>");
    correctionWindow.document.write("<p>10. Namakura Gatana</p>");
    correctionWindow.document.write("<button onclick='window.close()'>Fermer</button>");
    correctionWindow.document.write("</body></html>");
}


function resetQuiz() {
    document.getElementById("quiz-form").reset();
    document.getElementById("score").textContent = "";
}
