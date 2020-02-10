1. Dan man console logger for eksempel en array kan man ikke se navnet på den, man kan kun se indholdet i den, det kan være irreterende hvis du har mange console logs.

2. _console.log()_ kræver at man vide hvad man skal bruge til debugging. Når man får uventede resultater, hvorhenne startede probleme? Og selv hvis du logger den rigtig variable, logger du den på det rigtige tidspunkt? Hvis det kan ændres (f.eks. en variable definerede med let), måske er den problematiske information allerede væk når du nåede console loggen.

3. Når man console logger, man faktisk peger til noget data gemt i hukommelsen. I en browser, der ofte venter med at hente ind mere information fra, f.eks. en array eller object, er den information det kan hentes gengives kun når brugeren klikker. Så den information vist til mig i console.loggen er faktisk IKKE hele nøjagtig.

4. Det kan være super svært at ser forskellen mellem data typer i en console log. Så unanset om jeg logger min data, måske kan jeg ikke ser hvorfor der er problem i det.

5. Det er mulig at give mere end et argument til en console log. Det ville så print til consollen alle argumenter. MEN, det kan være svært at ser hvor en variable slutter og den anden starter. 

6. Det er alt for nem at log for meget information, der gøre det svært at finde det man virkelig har bruge for.
