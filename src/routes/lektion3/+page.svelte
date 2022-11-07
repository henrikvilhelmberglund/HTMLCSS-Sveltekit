<script>
  import { base } from "$app/paths";
</script>

<article>
  <section>
    <p>in article section 1</p>
  </section>
  <section>
    <p>in article section 2</p>
  </section>
</article>
<ul>
  <li>
    <p>in list 1</p>
  </li>
  <li id="unique-list-element">
    <p>in list 2</p>
  </li>
</ul>
<section>
  <span>
    <p>in span 1</p>
  </span>
  <span>
    <p>in span 2</p>
  </span>
</section>
<aside>
  <p>in aside 1</p>
  <p>in aside 2</p>
</aside>

<div id="main-header">
  <p>inside main header</p>
  <p>also inside main header</p>
</div>

<button>press me</button><button>press me too</button><button
  >press me three</button
>

<p class="orange">class orange</p>
<p id="box-id">box-id</p>
<span class="startpage-large-fonts">
  <p>in span</p>
</span>

<ul>
  <li>in li</li>
  <li class="shop-item">in li with class shop item</li>
</ul>

<h2>h2</h2>
<h3>h3</h3>

<span id="article-3">
  <h2 class="section-heading">in span with class section heading</h2>
  <h2>in span</h2>
  <h2 class="section-heading">in span with class section heading</h2>
</span>

<a href="http://">link</a>

<ul class="clothing-list">
  <li>in clothing-list</li>
  <li>in clothing-list</li>
  <li>last child in clothing-list</li>
</ul>

<input type="button" value="" />
<input type="checkbox" name="" id="" />
<input type="radio" name="" id="" value="a" />
<input type="radio" name="" id="" value="all" />
<input type="radio" name="" id="" value="b" />

<style>
  /* 1. Alla div-taggar =  */
  div {
    background-color: antiquewhite;
  }

  /* 2. Första section-taggen inuti en article =  */
  article section:first-of-type {
    color: slateblue;
  }

  /* 3. Alla li-taggar som inte har id “unique-list-element” =  */
  li:not(#unique-list-element) {
    color: aquamarine;
  }

  /* 4. Första span inuti en section =  */
  section span:first-of-type {
    color: violet;
  }

  /* 5. Alla element inuti en aside-tagg =  */
  aside * {
    color: bisque;
  }

  /* 6. Alla element inuti en div med id=”main-header” =  */
  div#main-header * {
    color: blue;
  }

  /* 7. Alla buttons =  */
  button {
    color: burlywood;
  }

  /* 8. Alla element med klassen “orange” =  */
  .orange {
    color: orange;
  }

  /* 9. Alla element med id “box-id” =  */
  #box-id {
    color: turquoise;
  }

  /* 10. Alla span-taggar med klassen “startpage-large-fonts”=  */
  span.startpage-large-fonts {
    color: chocolate;
  }

  /* 11. Alla li-taggar med klassen “shop-item” inuti en div =  */
  /* not specific enough */
  div li.shop-item {
    color: tomato;
  }

  /* 12. Alla h2-taggar och alla h3-taggar = */
  h2,
  h3 {
    color: crimson;
  }

  /* 13. Alla h2-taggar med klassen “section-heading” inuti en span med id “article-3” = */
  span#article-3 h2.section-heading {
    color: darkgoldenrod;
  }

  /* 14. När du lägger musen på en a-tagg =  */
  a:hover {
    color: seagreen;
  }

  /* 15. Sista li-taggen inuti ul som har klassen “clothing-list” =  */
  ul.clothing-list :last-child {
    color: springgreen;
  }

  /* 16. Alla checkboxar =  */
  input[type="checkbox"] {
    margin: 30px;
    /* below doesn-t work */
    accent-color: blueviolet;
  }

  /* 17. Alla radiobuttons med value=“all”  = */
  input[type="radio"][value="all"] {
    accent-color: darkmagenta;
    margin: 30px;
  }
</style>
