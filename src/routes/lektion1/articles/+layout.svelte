<script>
  import { base } from "$app/paths";
  import { articles } from './stores.js';
</script>

<nav>
  <a href="{base}/lektion1/articles/article1">{$articles[0].title}</a>
  <a href="{base}/lektion1/articles/article2">{$articles[1].title}</a>
  <a href="{base}/lektion1/articles/article3">{$articles[2].title}</a>
</nav>

<slot />

<style>
</style>
