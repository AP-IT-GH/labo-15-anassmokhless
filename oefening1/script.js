let spaghetti = {
    name: "Bolognaise",
    beschrijving: "pasta met tomatensaus en gehakt",
    personen: 4,
    ingredienten: [
        {
            naam: "spaghetti",
            hoeveelheid: "600g",
            prijs: 150,
        },
        {
            naam: "gehakt",
            hoeveelheid: "600g",
            prijs: 450,
        },
        {
            naam: "tomatensaus",
            hoeveelheid: "2blikken",
            prijs: 500,
        }
    ]
};

let sum = 0;

for(let index = 0; index < spaghetti.ingredienten.length; index++){
    sum = sum + spaghetti.ingredienten[index].prijs;
}

sum = sum /100;

console.log(`${spaghetti.name} kost ${sum} euro.`)