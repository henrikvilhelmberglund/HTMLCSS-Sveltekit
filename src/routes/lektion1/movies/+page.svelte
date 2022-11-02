<script>
  let movies = [
    {
      name: "LOTR",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
      name: "The Hobbit",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    },
    {
      name: "Primer",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xEoq2WmDzpzxhkHEsmOYOg6BPg6.jpg",
    },
    {
      name: "攻殻機動隊",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gC88zYUBARRSThcG93MvW14sqx.jpg",
    },
    {
      name: "Pirates of the Carribean",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    },
  ];

  let otherMovies = [
    // actually let's do anime
    {
      name: "One Piece",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dum1wnm6kJOUos0XJqjB8s2UWi9.jpg",
    },
    {
      name: "Naruto",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vauCEnR7CiyBDzRCeElKkCaXIYu.jpg",
    },
    {
      name: "Dragonball",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tZ0jXOeYBWPZ0OWzUhTlYvMF7YR.jpg",
    },
    {
      name: "Hunter x Hunter",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ucpgmUR1h5Te1BYegKItoPjOeF7.jpg",
    },
    {
      name: "Jojo's Bizarre Adventure",
      img: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ogAWwbh3frWtiTyyXrZaVFtqCgp.jpg",
    },
  ];

  let displayImage;
  let displayName;
  let displayImageAnime;
  let displayNameAnime;

  function showImage(name, img, type) {
    if (type === "movie") {
      displayName = name;
      displayImage = img;
      //console.log(img);
    } else if (type === "anime") {
      displayNameAnime = name;
      displayImageAnime = img;
    }
  }
</script>

<!-- 
  Skapa en numrerad lista över namnen på dina topp 5 filmer.
  Skapa en onumrerad lista där du skriver upp fem alternativa.
-->

<div>
  <ol>
    {#each movies as movie}
      <li
        on:mouseenter={() => showImage(movie.name, movie.img, "movie")}
        on:mouseleave={() => (displayImage = "")}
      >
        {movie.name}
      </li>
    {/each}
  </ol>
</div>

{#if displayImage}
  <div class="absolute-pos">
    <img
      src={displayImage}
      alt="Poster for {displayName}"
      class="smaller-image"
    />
  </div>
{/if}

<div>
  <ul>
    {#each otherMovies as otherMovie}
      <li
        on:mouseenter={() =>
          showImage(otherMovie.name, otherMovie.img, "anime")}
        on:mouseleave={() => (displayImageAnime = "")}
      >
        {otherMovie.name}
      </li>
    {/each}
  </ul>
</div>

{#if displayImageAnime}
  <div class="absolute-pos">
    <img
      src={displayImageAnime}
      alt="Poster for {displayNameAnime}"
      class="smaller-image"
    />
  </div>
{/if}

<style>
  .smaller-image {
    width: 50%;
  }
  .absolute-pos {
    position: absolute;
    top: 50px;
    right: 150px;
  }
  li:hover {
    color: slateblue;
    font-weight: 700;
  }
</style>
