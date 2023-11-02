### DIN UPPGIFT: Besvara fråga 1 och 2 i denna md-fil. Fråga 3 behöver du inte besvara, utan den utför du.

1. Vad är Typescript och och hur skiljer det sig från Javascript? / 2 poäng

Typescript is a superset of JS, meaning that it just builds on to of jS and all JS code is valid TS. TS adds a strong type system to JS.

2. Vad är fördelen att använda sig av Typescript? Finns det nackdelar? / 2 poäng

TS and it's type system add many benefits which make both development and mainataining easier. First, with TS, all of your variables, objects, functions (parameters and return types) are typed. This helps avoid errors in development such as passing in the wrong type of arguments to a function or trying to access a property on a variable that doesn't exist. Although JS would also catch these errors, it would be at runtime instead of compile time, which immediately alert us when there is a mistake. TS alaso makes maintaining your code easier for other developers since it cna help others understand your code better. Perhaps the nicest advantage that TS provides, is autocompletion. TS gives you autocompletion on your object's properties as well as the built-in methods on JS data types such as strings, numbers, arrays, etc.

There are a couple of disadvantages that TS can bring. First, it does require you to write more code in develpment which could take more time. This is debateable, however, because having a strong type system can also save you some time with bugs. Also, TS code is removed by the bundler or build tool so the final JS file isn't any bigger. THe other possible disadvantage is that it is another skill to learn so if you use it on your project, others must also know and understand it. The advantages, though, far outweight the benefits, in my opinion.

1. Initiera ett vanilla TS-projekt så att du kan kompilera
   Typescript i alla ts-filer i en och samma mapp (src). De kompilerade filerna ska hamna i en dist-mapp. / 2 poäng
