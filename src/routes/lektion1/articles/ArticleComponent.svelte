<script>
  import { base } from "$app/paths";
  export let articleNumber;
  import { page } from "$app/stores";
</script>

<a
  href="{base}/lektion1/articles/article{+articleNumber + 1}"
  target="_blank"
  rel="noreferrer"
>
  <article>
    <img
      src={$page.data.articles[articleNumber].img}
      alt={$page.data.articles[articleNumber].altimg}
      title={$page.data.articles[articleNumber].altimg}
      class="article-image"
    />
    <h2>{$page.data.articles[articleNumber].title}</h2>
    <h3>{$page.data.articles[articleNumber].subtitle}</h3>
    <p>{$page.data.articles[articleNumber].text}</p>
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
