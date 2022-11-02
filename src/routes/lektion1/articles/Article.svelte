<script>
  import { base } from "$app/paths";
  export let articleNumber;
  import { page } from "$app/stores";
</script>

<main>
  <article>
    <a href="{base}/lektion1/articles/article{+articleNumber + 1}"
      ><img
        src={$page.data.articles[articleNumber].img}
        alt={$page.data.articles[articleNumber].altimg}
        class="article-image"
      /></a
    >
    <h2>{$page.data.articles[articleNumber].title}</h2>
    <h3>{$page.data.articles[articleNumber].subtitle}</h3>
    <p>{$page.data.articles[articleNumber].text}</p>
  </article>
</main>

<style>
  .article-image {
    width: 35%;
  }
  h2 {
    text-transform: uppercase;
  }
  h3 {
    font-style: oblique;
  }
</style>
