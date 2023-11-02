"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
// DIN UPPGIFT: Du ska fetcha från Pokemon API:et och validera med hjälp av valideringsbiblioteket Zod.
// Du ska ska skapa ett Zod-schema som validerar datan som kommer från API:et, där endast name, height och weight är datan som tas emot och valideras
// Den validerade datan  ska användas för att beräkna BMI för en Pokemon. BMI ska sedan loggas till konsolen för en Pokemon som du själv väljer.
// Obs! Detta ska vara en Node-applikation, så använd lämplig "fetch", axios eller liknande för att hämta data från API:et.
// Utifrån Zod-schemat ska du också skapa en typ för Pokemon (använd lämplig Zod-metod för detta). Du ska använda dig
// av den härlädda Pokemontypen i din kod. / Poäng: 8 poäng
// Endpoint: `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
/* FORMEL FÖR BMI. Tydligen är vikten i hectograms och höjden i decimeters för Pokemons :-)
const weightInKg = pokemon.weight / 10;
const heightInM = pokemon.height / 10;
const bmi = weightInKg / (heightInM * heightInM);


*/
const pokemonValidator = zod_1.z.object({
    name: zod_1.z.string().min(1),
    weight: zod_1.z.number().min(1),
    height: zod_1.z.number().min(1),
});
function getPokemenBmi(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        const data = yield response.json();
        try {
            const pokemonValidated = pokemonValidator.parse(data);
            const weightInKg = pokemonValidated.weight / 10;
            const heightInM = pokemonValidated.height / 10;
            const bmi = weightInKg / (heightInM * heightInM);
            console.log(bmi);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getPokemenBmi('ditto');
