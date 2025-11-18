import animals from "../dieren.json" with {type: 'json'};

let animalData = animals;

function getAnimalList(animalList){

    for(let i = 0; i < animalList.length; i++){
        console.log(`${i +1}. ${animalList[i].name}`);
    }
    
    let chosenAnimal = prompt("Kies een dier uit de lijst");

    while(chosenAnimal < 1 || chosenAnimal > 10){
        chosenAnimal = prompt("Dit was geen optie maak een nieuwe keuze");
    }
    

    console.log(`Hier is de info over je gekozen dier ${animalData[chosenAnimal -1].info}`);
}

getAnimalList(animalData);