function degreC(tempF) {
    const tempC = (5 / 9) * (tempF - 32);
    const output = document.getElementById('output');
    output.innerHTML += `<div class="output">Cette température équivaut à ${tempC.toFixed(1)} degrés Celsius</div>`;
}

// Exemple d'utilisation
degreC(0.0);  // Affiche dans la page
degreC(60.0); // Affiche dans la page

function hjms(secondes) {
    const jours = Math.floor(secondes / 86400);
    secondes %= 86400;
    const heures = Math.floor(secondes / 3600);
    secondes %= 3600;
    const minutes = Math.floor(secondes / 60);
    secondes %= 60;

    const output = document.getElementById('output');
    output.innerHTML += `<div class="output">Cette durée équivaut à ${jours} jours ${heures} heures ${minutes} minutes ${secondes} secondes</div>`;
}

// Exemple d'utilisation
hjms(235789); // Affiche dans la page
hjms(567231); // Affiche dans la page
function troisNombres(a, b, c) {
    const sorted = [a, b, c].sort((x, y) => x - y);
    const output = document.getElementById('output');
    output.innerHTML += `<div class="output">Les nombres dans l'ordre croissant : ${sorted.join(' ')}</div>`;
}

// Exemple d'utilisation
troisNombres(14, 10, 17); // Affiche dans la page