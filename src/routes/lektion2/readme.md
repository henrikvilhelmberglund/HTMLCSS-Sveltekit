## Navigering

./ = samma mapp
../ = en mapp uppåt

## Nav

Kan valfritt ha lista för länkar i nav

## Formulär

```html
<form action="">
    <input
      type="tel"
      pattern="\d*"
      bind:value={number}
      name=""
      id="phonenumber"
    />
    <button>Give me your number!</button>
  </form>
```

- tel blir semantisk (skärmläsare)
- button i form blir type submit
- pattern="\d*" för att bara tillåta siffror

## title-attribut

title visar en liten rute när man hoverar (t.ex för alt)

## CSS

om man styler t.ex body med en färg och underliggande p-taggar inte har styling blir de samma färg

man kan hålla musen över en selector för att se selector specificity

#fff är samma sak som #ffffff
kan ha alphavärde (rgb(255,0,0,0.5))
finns också hsl 

border style solid, dotted, dashed, double

list-style för ul ol

text-decoration för länkunderline etc

kan ha svart färg med opacity i hover för att visa att saker är klickbara 

## Semantisk HTML

title i head är det som står i sökresultat

ex. ankademin

```html
<head>
  <title>Ankademins sida</title>
  </head>
<body>
<header>Ankademin</header>
<nav>Home, våra kurser, hitta oss</nav>
<main>

Våra utbildningar

<section>
På plats
<article>
Bild 1
</article>
<article>
Bild 2
</article>
</section>

<section>
På distans
<article>
Bild 1
</article>
<article>
Bild 2
</article>
</section>

<aside>
  Senaste nytt
  </aside>

</main>
<footer>
  Copyrighttext, sociala medier
  </footer>
  </body>
```

man kan ha header i main t.ex, man kan ha flera headers
bara en main
baserat från designen ska man kunna se vilka element som ska vara vart

## EM vs REM

### EM

- em är baserat på font-size i parent (eller parents parent etc)
- t.ex 2em är dubbla parents font-size
- kan sätta px på ett ställe och använda em på andra

### REM

- rem är baserat på font-size i html-taggen 
- rem är nice för att man kan ändra på font-size i html-taggen för att ändra all text på hela sidan (om man har använt rem överallt)
- single source of truth (behåller proportionerna och blir konsekvent)
- försök att sätta font-size med rem
- kan också användas för padding/margin etc

## body margin

sätt margin i body till 0 om man vill ha t.ex bakgrundsfärg längst ut i kanten

### random

wp-content = wordpress-site