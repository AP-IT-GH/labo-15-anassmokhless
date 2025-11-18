import person from "../oefening2/person.json" with { type: "json" };

function PrintFullName(p) {
    console.log(`${p.firstname} ${p.lastname}`);
}

PrintFullName(person);

function printHobbies(p){
    for(let i = 0; i < p.hobbies.length; i++){
        console.log(`${p.hobbies[i]}`)
    }
}

printHobbies(person);