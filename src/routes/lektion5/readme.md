# Layout som behöver ändras
## Media queries

- flex-basis - blir width med row, height med column
- @media(max-width:600px) { }
- kan ha and
- @media (max-width: 900px) and (min-width: 600px) { }
- kallas breakpoint
- max-width tar prioritet över vanlig width, om width inte ändras kan man kolla om max-width är 100% eller något annat
- media queries har alltid prioritet (ignorerar specificity) när de träder i kraft, men ärver annars tidigare
- när man jobbar med media etc, vid mindre viewports gör vi specialregler, vi gjorde alltså desktop first med den här sidan
- 70% mobilanvändare, alltså borde vi göra mobile first istället