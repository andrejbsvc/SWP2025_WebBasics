interface Person {
    firstname: string;
    lastname: string;
    age: number;
    isMale? : boolean;

};


const person: Person = {
    firstname: "Andrej",
    lastname: "Barosevcic",
    age: 17,
    
};

function printName(person: Person) {
    console.log(person.isMale);

}

printName(person);