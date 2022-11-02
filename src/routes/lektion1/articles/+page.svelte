<script>
  import { base } from "$app/paths";
  export let data;
  import Article from "./Article.svelte";
  let articles = Array.from(Array(3));
</script>

<!-- Huvudinnehållet på sidan ska innehålla tre nyhetsartiklar. Dessa ska innehålla en bild, en huvudrubrik, underrubrik och brödtext.
  Lägg en länk runt varje nyhetsartikel som gör artiklarna klickbara. Få dessa att öppnas i en ny flik.
  Blir du klar: Testa använda och experimentera med CSS för att styla dessa! Se om du kan lista ut hur du t.ex kan lägga en ram runt varje artikel, färga och ändra storlek på texterna, och skapa mer mellanrum mellan element.
 -->

<!-- 

   <main>
     {#each data.articles as article, i}
     <article>
       <a href="{base}/lektion1/articles/article{+i + 1}"
       ><img src={article.img} alt={article.altimg} class="article-image" /></a
       >
       <h2>{article.title}</h2>
       <h3>{article.subtitle}</h3>
       <p>{article.text}</p>
      </article>
      {/each}
    </main>
  -->

<main>
  {#each articles as whatever, i}
    <article>
      <Article articleNumber={i} />
    </article>
  {/each}
</main>

<style>
  /* 
  .article-image {
    width: 20%;
  }
  h2 {
    text-transform: uppercase;
  }
  h3 {
    font-style: oblique;
  }
  */
</style>
