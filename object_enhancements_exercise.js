function createInstructor(firstName, lastName) {
    return {
        firstName,
        lastName
    }    
}

let favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}

const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi";
    }
    sayBye() {
        return this.firstName + " says bye!";
    }
}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    }
}
// Need to go over this, had a hard time figuring it out. Don't understand what the const d and const s are doing there. Why are there brackets around [verb]?