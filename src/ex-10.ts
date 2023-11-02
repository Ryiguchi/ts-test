// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng

interface Student1 {
  name: string;
  age: number;
  year: number;
}

interface Teacher {
  name: string;
  age: number;
  yearsEmployed: number;
}

// 1. Ge ett exempel på en funktion med en generiskt typ.
function hasBirthday<T extends { age: number }>(obj: T) {
  obj.age++;
}

const student1: Student1 = {
  name: 'Ryan',
  age: 35,
  year: 2,
};

const teacher: Teacher = {
  name: 'Mike',
  age: 40,
  yearsEmployed: 10,
};

hasBirthday(student1);

console.log(student1);

// 2. Ge ett exempel på en funktion med två generiska typer.

function addAges<T extends { age: number }, U extends { age: number }>(
  person1: T,
  person2: U
): number {
  return person1.age + person2.age;
}

const combinedAges = addAges(student1, teacher);

// 3. Ge ett exempel på ett interface med en generisk typ.

interface Person3<T> {
  name: string;
  favorites: T;
}

const person3: Person3<string> = {
  name: 'Ryan',
  favorites: 'typescript',
};

const person4: Person3<string[]> = {
  name: 'Mike',
  favorites: ['typescript', 'Javascript'],
};
