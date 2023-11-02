// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

interface Measurement {
  day: string;
  price: number;
}

type StockMeasurements = Measurement[];

const getRisingStockDays = (
  stockMeasurements: StockMeasurements
): StockMeasurements =>
  stockMeasurements.filter((data: Measurement) => data.price > 100);

const stockMeasurements: StockMeasurements = [
  {
    day: 'Monday',
    price: 105,
  },
  {
    day: 'Tuesday',
    price: 98,
  },
  {
    day: 'Wednesday',
    price: 110,
  },
];

const profitableDays: StockMeasurements = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
