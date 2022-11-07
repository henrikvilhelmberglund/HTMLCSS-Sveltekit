# CSS 

## CSS selectors

- selectors för vi har mycket html vi vill träffa
- CMS (t.ex wordpress), kanske inte har makt över html
- hur kan vi träffa olika delar i siten?
- /# pound/hashtag

div.text h2 {}
div.text > section  {}

A + B adjacent sibling selector (träffar ett)
A ~ B general sibling selector (träffar alla)
A > B child selector (träffar direct children)
:first-child first child pseudo-selector
:only-child only child pseudo-selector
:last-child last child pseudo-selector
:nth-child(A)
:nth-last-child(A) som ovan fast baklänges
:first-of-type  kollar bara siblings
:nth-of-type(A)   kan också skriva even och odd
:nth-of-type(An+b) som ovan fast med offset b
:only-of-type
:last-of-type
:empty
:not(X)
[attribute]
[attribute="name"]
[attribute^="value"]   börjar med
[attribute$="value"]   slutar med
[attribute*="value"]   wildcard
[attribute="name"][otherattribute="othername"] combined

## CSS specificity

- kan ha flera klasser i HTMLen

- ok med generella klassnamn för man kan i CSSen ha t.ex .box.big istället för bara .big

- :first-of-type är för siblings, inte parent

- (1, 1, 1)

- id, klass, typ

- 100 kr, 10kr, 1kr

- !important efter value för att ge max specificity

- inline style ger högst specificity men borde inte använda

## mer CSS

- padding skapar utrymme inuti elementet (sätter i parent)

padding: 20px;

är egentligen

    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px
    padding-left: 20px;

kan också skriva 

padding: 40px 20px 20px 20px;

och 

padding 20px 80px; för top/bottom , left/right

- margin skapar utrymme mellan siblings

- display 

display: inline är span default
display: block är div default
display: inline-block om man vill ha inline men vill också ha bredd

block tar alltid upp hela bredden

inline-bredden baseras på innehållet


- position

position:static är default

- position:relative unlockar 4 nya properties

relative fungerar bara visuellt, tar fortfarande upp tidigare platsen

top, right, bottom, left

- position: absolute

absolute friar upp tidigare platsen

förhåller sig till toppen av html-dokumentet

kan även ställa in parent med position relative om den ska förhålla sig till den parent istället

- position: fixed 

fixed på sidan (som postit på skärm)

- position: sticky

inte fixed först men kan inte scrolla förbi

- % 

kan skriva % för värden så ändras de enligt bredd etc på skärmen

- min-height för att se till att parent anpassar sig efter children

- box-sizing: border-box om man inte villa att padding ska ändra dimensioner