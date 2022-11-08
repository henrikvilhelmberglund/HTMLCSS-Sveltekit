<script>
</script>

<h3>Divs and Spans</h3>

<!-- Question 1 -->
<p>1. Turn one word in this sentence to a color.</p>

<!-- Question 2 -->
<p>2. Make this word rainbow colored: Magic</p>

<!-- Question 3 -->
<p>3. Highlight the following text by giving it a yellow background:</p>

<div class="highlight-me">Highlight me!</div>

<!-- Question 4 -->
<p>
  4. Did your work in question 3 alter the following text? If so, why did it get
  altered? What's different about it?
</p>

<span class="highlight-me">Highlight me!</span>

<h3>Display Properties</h3>

<!-- Question 5 -->
<p>
  5. Make these divs appear side-by-side by adding one line in css. Why is there
  space between them?
</p>

<div class="side-by-side" />
<div class="side-by-side" />
<div class="side-by-side" />
<div class="side-by-side" />

<!-- Question 6 -->
<p>6. Make this div disappear. Don't delete it though.</p>

<div class="gone">Poof! I'm gone.</div>

<h3>Margins and Padding</h3>

<!-- Question 7 -->
<p>
  7. Increase the amount of orange all around in this div by adding one line of
  css.
</p>
<div class="increase-orange">Hello World</div>

<!-- Question 8 -->
<p>8. Separate these divs so they don't look like one big block.</p>

<div class="separate-me" />
<div class="separate-me" />
<div class="separate-me" />
<div class="separate-me" />

<!-- Question 9 -->
<p>
  9. Make these buttons more user-friendly by giving them some shape and space.
</p>

<a href="#" class="user-friendly">Link 1</a>
<a href="#" class="user-friendly">Another Link</a>
<a href="#" class="user-friendly">Third Link</a>

<!-- Question 10 -->
<p>10. Vertically center the text inside the square.</p>

<div class="static" href="#">
  <span class="center-me">Center me</span>
</div>

<h3>Positioning</h3>

<!-- Question 11 -->
<p>11. Move this div 50px to the left and 50px upward.</p>
<div class="left-upward" />

<!-- Question 12 -->
<p>
  12. Add three lines of CSS to have this div 10px from the top of the window,
  and 10px from the right so that it stays there even if you scroll.
</p>

<a href="#">
  <div class="fixed-btn">Fixed button</div>
</a>

<!-- Question 13 -->
<p>
  13. Set the "top" property of this div to "20px" and the "left" property to
  "40px" Did it change? Why or why not?
</p>

<div class="position-20-40" />

<!-- Question 14 -->
<p>
  14. Move the blue div 30px to the left and 30 pixels upward, without moving
  the other divs from their current positions.
</p>
<p />

<div class="dont-move" />
<div class="dont-move" />
<div class="move-me" />
<div class="dont-move" />

<!-- Question 15 -->
<p>
  15 For the question above, set the display of all of those elements to
  "inline-block". How does the blue div behave?
</p>

<!-- Question 16 -->
<p>
  16. Position the smaller square so that it is both horizontally and vertically
  centered over the larger square. Only use position, and the
  top/left/right/bottom properties.
</p>

<div class="larger-div" />
<div class="smaller-div" />

<!-- Question 17 -->
<p>
  17 a. Change one number below to move the blue div to the bottom left corner
  of the parent div. <br />b. Do it again, but move it to the top right corner.
  <br />c. Using only top/left/bottom/right, can you center the blue div inside
  the grey div?
</p>

<div class="parent-div">
  <div class="child-div" />
</div>

<h3>Freehand Drawing (Bonus)</h3>

<!-- Question 18 -->
<p>18. Draw horizontal stripes.</p>

<!-- Question 19 -->
<p>19. Turn the horizontal stripes into vertical stripes.</p>

<!-- Question 20 -->
<p>
  20. Replicate this sketch by positioning the squares in the grey box below:
</p>

<img
  src="https://i.ibb.co/Db2WkJh/Screen-Shot-2019-09-11-at-10-42-33-PM.png"
  class="img-ref"
/>

<div class="replicate-me">
  <div class="red-square" />
  <div class="pink-square" />
  <div class="yellow-square" />
  <div class="green-square" />
  <div class="blue-square" />
</div>

<!-- Question 21 -->
<p>
  21. In the example above, what was the "position" for the grey box? What was
  the position for the colored squares? What happens if you take out
  "position:relative" from the grey box?
</p>

<!-- Question 22 -->
<p>22. Draw the Empire state building below.</p>

<style>
  /* Add Question 1 CSS below: */
  .color-word {
    color: red;
  }

  /* Add Question 2 CSS below: */

  /* Question 3/4 */
  .highlight-me {
    color: black;
    font-size: 16px;
  }

  /* Question 5 */
  .side-by-side {
    width: 120px;
    height: 70px;
    background-color: black;
    margin: 10px;
  }

  /* Question 6 */
  .gone {
    background-color: lightgrey;
    color: grey;
    font-size: 30px;
    width: 100px;
  }

  /* Question 7 */
  .increase-orange {
    background-color: orange;
    display: inline-block;
  }

  /* Question 8 */
  .separate-me {
    background-color: green;
    width: 200px;
    height: 20px;
  }

  /* Question 9 */
  .user-friendly {
    background-color: black;
    color: white;
    text-decoration: none;
  }

  /* Question 10 */
  .static {
    background-color: #00ffff;
    text-align: center;
    width: 100px;
    height: 100px;
  }

  .center-me {
    display: inline-block;
  }

  /* Question 11 */
  .left-upward {
    width: 200px;
    height: 60px;
    background-color: green;
  }

  /* Question 12 */
  .fixed-btn {
    background-color: pink;
    width: 130px;
    padding: 20px;
    text-align: center;
    text-decoration: none;
    color: black;
  }

  /* Question 13 */
  .position-20-40 {
    background-color: #bb00ff;
    width: 200px;
    height: 100px;
  }

  /* Question 14 */
  .dont-move {
    width: 200px;
    height: 50px;
    background-color: grey;
  }

  .move-me {
    width: 220px;
    height: 60px;
    background-color: blue;
  }

  /* Question 15 */

  /* Question 16 */
  .larger-div {
    background-color: red;
    width: 260px;
    height: 260px;
  }

  .smaller-div {
    background-color: purple;
    width: 200px;
    height: 200px;
  }

  /* Question 17 */
  .parent-div {
    width: 300px;
    height: 300px;
    position: relative;
    background-color: lightgrey;
  }

  .child-div {
    background-color: #4287f5;
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  /* Question 20 */
  .replicate-me {
    background-color: lightgrey;
    width: 400px;
    height: 300px;
    position: relative;
  }

  .replicate-me div {
    width: 120px;
    height: 120px;
    position: absolute;
  }

  .red-square {
    background-color: #f0002c;
  }

  .pink-square {
    background-color: #e0abd8;
  }

  .yellow-square {
    background-color: #f0c800;
  }

  .green-square {
    background-color: #32a852;
  }

  .blue-square {
    background-color: #0486d6;
  }

  /* Default Styles */

  p {
    color: grey;
    font-size: 14px;
    max-width: 460px;
  }

  body {
    padding-bottom: 200px;
  }

  .img-ref {
    width: 400px;
  }

  h3 {
    text-decoration: underline;
  }
</style>
