### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel.

ONe of the biggest differences between types and interfaces is that you can add properties to interfaces. For example:

interface Student {
name: string;
}

interface Student {
class: string;
}

// This is valid and the "Student" interface will contain 2 properties "name" and "class"

type StudentType = {
name: string;
};

type StudentType = {
class: string;
};

// this is invalid and TS will give you an error for the duplicate identifier "StudentType"

Another difference is that interfaces can be extended

interface Person {
name: string;
}

interface Student extends Person {
class: string
}

// interface "Student" will have 2 properties, "name" and "class"

with types, you can only combine types to create new types

type Person = {
name: string;
}

type Class = {
class: string;
}

type Student = Person & Class

// type "Student" will have 2 properties, "name" and "class"
