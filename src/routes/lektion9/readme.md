# CSS-ramverk

väljer ett ramverk i slutet av lektionen och gör en uppgift

## Bootstrap

- väldigt populärt
- vill slippa uppfinna hjulet
- bibliotek för komponenter
- löste responsivitet väldigt tidigt
- var svårt med layouts tidigare, för 10 år sedan hade man table för layouts
- idag bygger bootstrap på flexbox
- bra stöd för SCSS

### CDN

- länk som vi placerar i head

[CDN](https://getbootstrap.com/docs/5.2/getting-started/introduction/#cdn-links)

- behöver inte vara läsbar, ska vara snabb att ladda, därför tar de bort all whitespace (mellanslag etc), kan gå in på länken i browser för att se

- [livekodning](https://codesandbox.io/live/a1d53aec228)

### Dokumentation

t.ex

[docs](https://getbootstrap.com/docs/5.2/components/buttons/)

- använder klass för att få CSSn man vill ha t.ex `btn btn-success`, `btn lg`, `btn sm`

### Accordion

- har olika val där man togglar visa/visa inte
- har mycket text men vill inte visa allt på en gång, kan ha accordion så user själv kan visa
- behöver javascript för att den ska fungera
- kopierar in javascriptfilen från CDN så fungerar den! (glöm inte defer när man har i head)
- kan ta bort .min i länken om man vill se inte-minifierad version men man använder minifierad för mindre filstorlek
- bootstrap använder bara klasser för komponenter, inte id
- accordion är ett exempel på hur vi kan använda färdiga komponenter
- vill ha kvar aria-taggar etc men kan ta bort mycket annat om man vill
- finns SASS variables i docs

### När man jobbar med CSS-ramverk

- vill kunna ha egen CSS också
- hur gör vi det? lägger till en styletagg
- om vi t.ex lägger background: red på \* blir inte all bakgrund röd, det är för att knapparna har klasser och därmed högre specificity
- .btn-primary skulle heller inte fungera för att vi länkar vår CSS innan Bootstraps, kan lägga den **längst ner efter alla ramverks CSS**
- framework vs library: library kan man bara kasta in, framework använder man deras funktionalitet
- rekommendation: **styla inte existerande klasser**, lägg till ny .my-btn istället
- när vi inte har design kan vi ha bootstrap för att jobba snabbt
- även när vi har design kan vi använda för att hjälpa med t.ex responsivitet

### [Breakpoints](https://getbootstrap.com/docs/5.2/layout/breakpoints/)

- kan förhålla sig till dessa (vanligt förekommande), sm, md, lg, xl, xxl och deras pixlar

### Gridsystem i Bootstrap

- div är perfekt för att göra wrapper/container
- div med klass container, div med klass row, divs med klass col-6
- 12kolumnssystem, delar upp hela bredden i sidan i 12 kolumner

