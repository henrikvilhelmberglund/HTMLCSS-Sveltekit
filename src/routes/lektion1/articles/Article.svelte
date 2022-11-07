<script>
  import { base } from "$app/paths";
  export let articleNumber;
  import { page } from "$app/stores";
  import { articles } from "./stores.js";
</script>

<a
  href="{base}/lektion1/articles/article{+articleNumber + 1}"
  target="_blank"
  rel="noreferrer"
>
  <article>
    <img
      src={$articles[articleNumber].img}
      alt={$articles[articleNumber].altimg}
      title={$articles[articleNumber].altimg}
      class="article-image"
    />
    <h2>{$articles[articleNumber].title}</h2>
    <h3>{$articles[articleNumber].subtitle}</h3>
    <p>{$articles[articleNumber].text}</p>
  </article>
</a>

<style>
  .article-image {
    width: 35%;
    border-radius: 1%;
  }
  h2 {
    text-transform: uppercase;
  }
  h3 {
    font-style: oblique;
  }
</style>
