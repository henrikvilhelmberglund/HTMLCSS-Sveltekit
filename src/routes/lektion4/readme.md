# CSS

- inline visas bara om innehåll finns
- inline-block kan ha t.ex width och height

- margin är utrymmet mellan elementet och andra element
- padding är utrymmet inuti elementet

- visibility:hidden - osynlig men tar upp utrymme
- display:none - osynlig och tar inte upp utrymme
- opacity: 0 - osynlig men tar upp utrymme

- padding: 30px 10px;
- 12 - 3 - 6 - 9
- 12 - 6 om man bara har 2 värden

```json
"flexbox center": {
    "prefix": "flex-center",
    "body": [
      "display: flex;",
      "justify-content: center;",
      "align-items: center;"
    ], 
    "description": "flexbox center aligned"
  }
```

- z-index: -1; om den ska hamna under
- default z-index är 0

- för position:absolute behöver man också position:relative i parent (om man vill ha den relativt parent istället för vy)
- bot:0 + right:0 t.ex ger position bottom right

## Flexbox

- kan flytta runt saker
- display:flex, placeras i en linje
- display:flex används på parent
- flex-direction: row; default
- justify-content: flex-start; default

```css
.parent {
  justify-content: flex-end;flex-direction: column;
}
```

för slutet av kolumnen

- align-items: flex-end; 

```css
parent {
   flex-direction: row;justify-content: center;align-items: center;
}
```

- flex:direction är huvudaxel
- justify-content är efter huvudaxel
- align-items är efter sekundära axeln

- space-evenly för att spria ut utan padding och margin
- space-around för att sprida ut på annat sätt
- space-between för att sprida ut

- align-self för att flytta på enskilda element

- flex-wrap: wrap för att wrappa

- flex:flow för att sätta flex-direction och flex-wrap samtidigt

-align:content för att bestämma mellanrummet mellan??