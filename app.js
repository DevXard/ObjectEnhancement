let createInstructor = (firstName, lastName) => ({firstName, lastName});

const favoriteNumber = 42;

let inststructor = {
    firstName: 'Colt',
    [favoriteNumber]: 'That is my favorite'
};

let inststructor1 = {
    firstName: 'Colt',
    sayHi(){
        return 'HI'
    },
    sayBy(){
        return this.firstName + ' says bye'
    }
}

let addAnimal = (species, sound, typeOfSound) => ({species, [sound](){return typeOfSound}})

