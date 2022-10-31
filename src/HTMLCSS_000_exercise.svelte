<script>
  // your script goes here
  function buttonFunc() {
    alert("You pressed me!");
  }
</script>

Which HTML element defines.. a hyperlink = <a href="http://google.com">a link to google</a>

an article =
<article>This is an article tag</article>

content aside from the page content =
<aside>This is content aside from the page content</aside>

bold text =<b>This text is bold</b>

the document's body = <body> This is the document body </body>

a list item =
<li>This is a list item</li>

the document’s head =<head>This is the document head</head>

a single line break = <br />
also
<hr />

a clickable button =<button on:click={buttonFunc}>Click me</button>

a section in a document (OBS! Finns fler än ett rätt svar.) =
<div>This is a div</div>
<span>This is a span</span>
<section>This is a section</section>
<header>This is a header</header>
<footer>This is a footer</footer>
<nav>This is a navigation link</nav>
and all other semantic tags
<br />
an image =<img src="/src/assets/svelte.svg" alt="svelte logo" />

the main content of a document =
<main>This is the main content of a document</main>

an ordered list =
<ol type="I">
  <li>This is</li>
  <li>an ordered list</li>
</ol>

an option in a drop-down list =<select name="" id=""> <option value="">This is an option</option></select>

important text in a paragrapha= <strong>This text is important</strong>

a row in a table =
<table>
  <tr>This is a row in a table</tr>
  <tr><td>This is a cell</td></tr>
</table>

an unordered list =
<ul>
  <li>This is an</li>
  <li>Unordered list</li>
</ul>

a multiline input control (text area) =<textarea name="" id="" cols="30" rows="10">This is a text area</textarea>

a table =
<table>This is a table</table>
<table><th>This is a table header</th><tr>Row</tr><td>Cell</td></table>

a drop-down list =<select name="" id=""
  ><option value="" disabled hidden selected>This is a dropdown list</option>
  <option value="">option 1</option><option value="">option 2</option></select
>

a header for a document or section =
<header>This is a header</header>

a heading for a document or section =
<h1>This is a heading</h1>
<h2>This is a heading used after h1</h2>
<h3>This is a heading used after h2</h3>
<h4>This is a heading used after h3</h4>
<h5>This is a heading used after h4</h5>
<h6>This is a heading used after h5</h6>

an input control =<input type="button" value="This is a button input control" />
<input type="color" name="This is a color input control" id="" />
<input type="file" name="This is a file input control" id="" />

a cell in a table =
<table><tr><td>This is a cell in a table</td></tr></table>

<style>
  /* your styles go here */
  table {
    border: 1px solid black;
  }
  th {
    border: 1px solid red;
  }
  td {
    border: 1px solid green;
  }
</style>
