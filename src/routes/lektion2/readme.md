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

## body margin

sätt margin i body till 0 om man vill ha t.ex bakgrundsfärg längst ut i kanten

### random

wp-content = wordpress-site