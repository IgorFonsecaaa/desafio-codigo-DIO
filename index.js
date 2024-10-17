let nomeHeroi = "Igao"
let pontosXP = 8500
let nivel

if(pontosXP < 1000) {
    nivel = "Ferro"
} else if(pontosXP <= 2000) {
    nivel = "Bronze"
} else if(pontosXP <=5000) {
    nivel = "Prata"
} else if(pontosXP <= 7000) {
    nivel = "Ouro"
} else if(pontosXP <= 8000) {
    nivel = "Platina"
} else if(pontosXP <= 9000) {
    nivel = "Ascendente"
} else if(pontosXP <= 10000) {
    nivel = "Imortal"
} else if(pontosXP >= 10001) {
    nivel = "Radiante"
}

console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel)
