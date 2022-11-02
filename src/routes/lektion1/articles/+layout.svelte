<script>
  import { base } from "$app/paths";
  export let data;
</script>

<nav>
  <a href="{base}/lektion1/articles/article1">{data.articles[0].title}</a>
  <a href="{base}/lektion1/articles/article2">{data.articles[1].title}</a>
  <a href="{base}/lektion1/articles/article3">{data.articles[2].title}</a>
</nav>

<slot />

<style>
</style>
