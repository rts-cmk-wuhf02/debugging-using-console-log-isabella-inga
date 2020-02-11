1. Dan man console logger for eksempel en array kan man ikke se navnet på den, man kan kun se indholdet i den, det kan være irreterende hvis du har mange console logs.

2. _console.log()_ kræver at man ved hvad man skal bruge til debugging. Når man får uventede resultater, hvorhenne startede problemet? Og selv hvis du logger den rigtig variabel, logger du den på det rigtige tidspunkt? Hvis det kan ændres (f.eks. en variabel definered med let), måske er den problematiske information allerede væk når du når til console loggen.

3. Når man console logger, peger man faktisk på noget data som er gemt i hukommelsen. I en browser, der ofte venter med at hente ind mere information fra, f.eks. en array eller object, er den information der kan hentes kun gengivet når brugeren klikker. Så den information der bliver vist til mig i console.loggen er faktisk IKKE hele nøjagtig.

4. Det kan være super svært at ser forskellen mellem data typer i en console log. Så unanset om jeg logger min data, kan jeg ikke altid se hvorfor der er et problem i det.

5. Det er mulig at give mere end et argument til en console log. Det ville så print til consollen alle argumenter. MEN, det kan være svært at se hvor en variabel slutter og den anden starter. 

6. Det er alt for nemt at log for meget information, som gør det svært at finde det man virkelig har bruge for.