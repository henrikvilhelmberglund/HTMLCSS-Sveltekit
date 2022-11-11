<script>
  import "../app.postcss";
  // your script goes here
  import { base } from "$app/paths";
</script>

<nav>
  <a href="{base}/">Home</a>
  <a href="{base}/lektion1">Lektion 1</a>
  <a href="{base}/lektion2">Lektion 2</a>
  <a href="{base}/lektion3">Lektion 3</a>
  <a href="{base}/lektion4">Lektion 4</a>
</nav>

<slot />
