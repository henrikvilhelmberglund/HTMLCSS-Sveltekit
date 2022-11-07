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
