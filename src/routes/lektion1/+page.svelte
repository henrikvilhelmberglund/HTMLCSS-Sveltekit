<script>
  // your script goes here
  import HTMLCSS_000 from "./HTMLCSS_000.svelte";
  import HTMLCSS_000Exercise from "./HTMLCSS_000_exercise.svelte";
  import HTMLCSS_000Exercise2 from "./HTMLCSS_000_exercise2.svelte";
</script>

<div class="tab">
  <a href="#page1">Page 1</a>
  <a href="#page2">Page 2</a>
  <a href="#page3">Page 3</a>

  <div id="page1">
    <HTMLCSS_000 />
  </div>

  <div id="page2">
    <HTMLCSS_000Exercise />
  </div>

  <div id="page3">
    <HTMLCSS_000Exercise2 />
  </div>
</div>
