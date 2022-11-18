<script>
  import { base } from "$app/paths";
  let recipes = [
    {
      title: "Egg fried rice",
      img: "https://img.koket.se/standard-mega/eggs-fried-rice.jpg.webp",
      ingredients: [
        "3 msk rapsolja",
        "3 ägg, uppvispade (stora)",
        "450 g jasminris, kokt kallt",
        "2 msk soja (ljus)",
        "3 salladslökar, tunt skivade",
      ],
      cookingSteps: [
        "Hetta upp en wok och tillsätt oljan. Rör woken från sida till sida så alla sidor täcks av olja.",
        "När oljan är het men inte ryker så tillsätt äggmixen och låt den friteras. Lossa försiktigt från botten av woken med en spatel när kanterna ”stannat”, vänd över på hälften och fös upp omeletten på wokens sida.",
        "Tillsätt riset och vänd omeletten över riset.",
        "Hacka ner omeletten i riset och snabbstek tills riset är varmt och börjar få färg.",
        "Tillsätt sojan och rör runt. Tillsätt sedan salladslöken och rör runt igen.",
        "Servera.",
      ],
      trivia: `Den perfekta frukosten! Överblivet ris och några ägg så har du perfekt ”Comfort Food” på två minuter." /Erik Videgård"`,
      externalLink:
        "https://www.ica.se/recept/fried-rice-med-gronsaker-och-agg-712897/",
    },
    {
      title: "Spaghetti aglio",
      img: "https://img.koket.se/standard-mega/spaghetti-aglio.jpg.webp",
      ingredients: [
        "ca 70 g färsk persilja",
        "6 klyftor vitlök (stora)",
        "1 dl extra virgin olivolja",
        "3 chiliflakes",
        "400 g spaghetti",
        "salt (så mycket som behövs)",
      ],
      cookingSteps: [
        "Ta fram en kastrull, koka 3 liter vatten med ungefär 1,5 matskedar salt.",
        "Finhacka persiljan.",
        "Skala och dela vitlöksklyftorna i mitten på längden. Skär sen vitlöken i tunna skivor, så tunt som du kan.",
        "Värm en halv deciliter olivolja i en stekpanna på medelhög värme. Häll i chiliflakes.",
        "När chilin börjar bubbla, häll i vitlöken. Vitlöken ska fräsa men den ska inte ta färg, då blir den besk. Om det börjar fräsa för mycket, häll i lite av kokvattnet.",
        "När vitlöken börjar bli mjuk är det dags att hälla i hälften av persiljan. Sänk till låg värme.",
        "Koka spaghettin enligt anvisningarna på förpackningen. När spaghettin är 1 minut från att nå perfekt al dente-nivå (det är en smaksak), lyft över den i stekpannan (se till att inte hälla ut pastavattnet).",
        "Höj värmen till hög och koka pastan tillsammans med såsen. Tillsätt en halv deciliter pastavatten.",
        "Fortsätt slunga pastan i stekpannan och rör runt den i den kokande såsen tills såsen bildar en emulsion, där fettet och pastavattnet tillsammans skapar den krämiga konsistensen. Häll i ett par matskedar olivolja och resten av persiljan.",
        "Smaka av med salt. Servera.",
      ],
      trivia: `Spaghetti med vitlök, kallpressad olivolja och chili är en av de klassiska, snabba italienska vardagsrätterna. Med bra råvaror är det lätt att förstå varför de återvänder till den gång på gång.`,
      externalLink:
        "https://www.ica.se/recept/pasta-aglio-e-olio-spaghetti-med-vitlok-persilja-och-chili-727988/",
    },
    {
      title: "Spaghetti Napolitan (Japansk Ketchup Pasta)",
      img: "https://idata.hiloved.com/imgs/254e4c6b37f93431-1024x681.jpg",
      ingredients: [
        "        7 ounces torkade spaghetti nudlar",
        "1/2 matsked salt",
        "För Napolitanska sås:",
        "2 tsk vegetabilisk olja",
        "1 grön paprika (tunt skivad)",
        "1/2 liten lök (tunt skivad)",
        "1/4 pund korv (eller skinka, skivad)",
        "1/3 kopp ketchup",
        "2 tsk smör",
        "Salt att smaka",
        "Svartpeppar efter smak",
        "Valfri garnering: hackad persilja",
        "Valfri garnering: varm sås (t.ex. Tabasco eller Tapatio varumärken)",
      ],
      cookingSteps: [
        "Lägg ca 8 koppar vatten i en stor kruka och tillsätt 1/2 matsked salt. Koka på hög värme och koka spaghetti enligt förpackningsanvisningar tills ad dente, ca 7 minuter. Obs! Pastan kommer att kokas en gång till med såsen. Töm nudlarna väl och lägg åt sidan.",
        "Under tiden värm vegetabilisk olja i en stor stekpanna och rörlöklök, paprika och korv på medium värme tills det mjukas. Smaka med salt och peppar.",
        "Tillsätt dränerad spaghetti i stekpannan med grönsaker och korv och kasta försiktigt.",
        "Tillsätt ketchup och rör-stek spagetti, belägg alla ingredienserna.",
        "Blanda smör med pastaen, tillsätt salt och peppar, om det behövs, efter smak. Avlägsna från värme.",
        "Eventuellt garnera med hackad persilja och servera med varm sås.",
      ],
      trivia: `Det serveras ofta hemma, men det är också ett vanligt "wafu pasta" menyalternativ på kaféer i Japan.`,
      externalLink:
        "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwip49rQ-ZH7AhXrQ_EDHdmuDbEQFnoECBIQAQ&url=https%3A%2F%2Fcookingwithdog.com%2Frecipe%2Fspaghetti-napolitan%2F&usg=AOvVaw173euIDfkTZh0P7qD9UEZh",
    },
  ];
</script>

<!-- 

  Övningsuppgift - Receptsida
Din uppgift är att skapa en receptsida innehållandes tre recept på olika maträtter. För att åstadkomma detta bör du använda följande:
 
HTML
Varje recept ska innehålla följande:
Sidan ska använda sig utav semantiska HTML-taggar (t.ex. nav, header, footer, main, article, section etc istället för endast <div>).
Använd minst tre nivåer av rubriker.
Det ska finnas minst en bild för varje maträtt.
En onumrerad lista för ingredienser.
En numrerad lista för vilka steg man tar för att tillaga rätten.
En faktaruta med en intressant/rolig fakta om maträtten.
En extern länk till ett alternativt recept på maträtten (om ni har gjort ett recept för korvstroganoff kan ni t.ex länka till ICA:s recept också: ​​https://www.ica.se/recept/korvstroganoff-med-ris-533512/). Länken ska öppnas i en ny flik/fönster.
CSS
Använd minst tre olika färger på sidan. Dessa färger kan vara bakgrundsfärger, textfärger, inramningsfärger etc.
Använd minst två bakgrundsfärger/bakgrundsbilder på sidan.
Extra: Använd dig utav minst två olika typsnitt - Rubriker och brödtext ska ej använda samma typsnitt.
Javascript (Extra - Om ni vill testa applicera JS)
Extra: Skapa en knapp för att ändra stylingen på hela sidan till dark-mode med Javascript.


 -->

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;1,800&family=Roboto+Condensed:wght@300&family=Roboto:wght@300;400&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<nav>
  {#each recipes as recipe}
    <section class="links">
      <a href="#ingredienser-{recipe.title.replaceAll(' ', '-')}"
        >Ingredienser: {recipe.title.replaceAll(" ", "-")}</a
      >
      <a href="#tillagning-{recipe.title.replaceAll(' ', '-')}"
        >Tillagning: {recipe.title}</a
      >
      <a href="#faktaruta-{recipe.title.replaceAll(' ', '-')}"
        >Faktaruta: {recipe.title}</a
      >
    </section>
  {/each}
</nav>

<main>
  {#each recipes as recipe}
    <article class="recipe">
      <section class="recipe-section">
        <h2>{recipe.title}</h2>
        <img src={recipe.img} alt={recipe.title} />
      </section>
      <section class="recipe-section">
        <h3>Ingredienser:</h3>
        <ul>
          {#if recipe.ingredients}
            <a id="ingredienser-{recipe.title.replaceAll(' ', '-')}" />
            {#each recipe.ingredients as ingredient}
              <li>
                <p>{ingredient}</p>
              </li>
            {/each}
          {/if}
        </ul>
      </section>
      <section class="recipe-section">
        <h3>Tillagning:</h3>
        <a id="tillagning-{recipe.title.replaceAll(' ', '-')}" />
        <ol>
          {#if recipe.cookingSteps}
            {#each recipe.cookingSteps as cookingStep}
              <li>
                <p>{cookingStep}</p>
              </li>
            {/each}
          {/if}
        </ol>
      </section>
      <section class="recipe-section">
        <a id="faktaruta-{recipe.title.replaceAll(' ', '-')}" />
        <div class="trivia">
          <h4>{recipe.trivia}</h4>
        </div>
      </section>
      <section class="recipe-section">
        <a href={recipe.externalLink}>Alternativt recept för {recipe.title}</a>
      </section>
    </article>
  {/each}
</main>

<style>
  main {
    background-color: black;
  }
  img {
    width: 130%;
  }
  .links {
    padding: 30px;
    background-color: skyblue;
    display: grid;
  }

  h2 {
    font-family: "Roboto";
    color: firebrick;
    font-size: 4rem;
  }
  h3 {
    font-family: "Roboto";
    color: firebrick;
  }

  li {
    font-weight: 800;
  }
  li p {
    font-weight: 500;
  }

  .recipe {
    background-color: wheat;
    border: 8px solid aquamarine;
    padding: 60px;
    margin: 20px;
    display: flex;
    font-family: "Raleway", sans-serif;
  }
  /* 
font-family: 'Roboto', sans-serif;
*/

  .recipe-section {
    padding: 50px;
  }

  .trivia {
    background-color: cornflowerblue;
    margin: 50px;
    padding: 50px;
    border-radius: 40px;
    font-family: "Roboto Condensed", sans-serif;
  }

  h4 {
    font-size: 30px;
  }
</style>
