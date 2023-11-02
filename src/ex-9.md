### DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

Beskriv vad generics är i TypeScript och varför de är användbara.
Hur skiljer sig generics från att använda "any" i TypeScript?

Generics are kind of like variables. They allow you to create flexible functions that allow for different types of arguments. You can use "any" instead of generics to get your code to work but you would't get the same type safely and the return value of the function would also be "any". If we use generics, we still can be flexible with the input but the return value will be inferred from the type of input that we use.
