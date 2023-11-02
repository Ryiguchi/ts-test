"use strict";
// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng
// 1. Ge ett exempel på en funktion med en generiskt typ.
function hasBirthday(obj) {
    obj.age++;
}
const student1 = {
    name: 'Ryan',
    age: 35,
    year: 2,
};
const teacher = {
    name: 'Mike',
    age: 40,
    yearsEmployed: 10,
};
hasBirthday(student1);
console.log(student1);
// 2. Ge ett exempel på en funktion med två generiska typer.
function addAges(person1, person2) {
    return person1.age + person2.age;
}
const combinedAges = addAges(student1, teacher);
const person3 = {
    name: 'Ryan',
    favorites: 'typescript',
};
const person4 = {
    name: 'Mike',
    favorites: ['typescript', 'Javascript'],
};
