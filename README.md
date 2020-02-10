links:
https://medium.com/datadriveninvestor/stopping-using-console-log-and-start-using-your-browsers-debugger-62bc893d93ff
https://dev.to/songthamtung/stop-console-logging-this-is-how-to-use-chrome-to-debug-javascript-48nm
https://hackernoon.com/please-stop-using-console-log-its-broken-b5d7d396cf15

console.log() requires developer to _know_ what needs to be logged. a lot of time can be wasted trying to find the right thing.

i.e. console.log( function() ) vs console.log( function )

console.log() will reference an object, and async actions like expanding an object's details in browser will show information that isn't actually available yet at the time of console.log()! e.g. console.log an empty array, then perform an action on the array, and console.log again. both should have the same details!

debug tools already exist in browsers! why use those?
- breakpoints. breakpoints pause the execution of the script when the requirement is met, allowing you to see the program as it is at that exact moment.
  - with event listeners
  - with dom mutation (adding an element, changing element, etc.)

--------------------------------------------------------------------------------------------------------------------------------------------
Et problem med console log er at man skal enten nogenlunde vide hvorhen fejlen er, eller man kan gætte sig frem til det. Det betyder at man bruger ofte alt for lang tid på at prøve at finde fejlen. Det sker fordi man kan ikke rigtig se sammenhængen som fortæller dig hvorfor der kommer en fejl, du kan kun se at der er en fejl med lige præcis hvad du har console logget. 

Dan man console logger for eksempel en array kan man ikke se navnet på den, man kan kun se indholdet i den, det kan være irreterende hvis du har mange console logs.  (vis eksemplet)

Du kan ikke altid ståle på de informationer du får fra console.log fordi der er ingen standardiseret opførsel på console.log.


