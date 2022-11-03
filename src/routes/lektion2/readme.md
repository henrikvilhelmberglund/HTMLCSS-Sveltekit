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