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
:first-of-type
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


## CSS specificity