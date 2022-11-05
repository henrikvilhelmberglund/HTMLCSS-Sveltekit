<script>
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
<svelte:head>
  <title>Lektion 1: Articles main</title>
</svelte:head>

<main>
  {#each articles as { }, i}
    <article class="article">
      <div class="inner-article">
        <Article articleNumber={i} />
      </div>
    </article>
  {/each}
</main>

<style>
  .article {
    width: 60%;
    padding-bottom: 120px;
  }
  .inner-article {
    border: 4px solid slateblue;
    border-radius: 10px;
  }
</style>
