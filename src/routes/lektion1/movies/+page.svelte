<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
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

  /*

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

  function hideImage(name, img, type) {
    if (type === "movie") {
      displayImage = "";
    } else if (type === "anime") {
      displayImageAnime = "";
    }
  }
*/

  const opacity = tweened(1, {
    duration: 1,
    easing: cubicOut,
  });

  const animeOpacity = tweened(1, {
    duration: 1,
    easing: cubicOut,
  });

  let currentMovie = "";
  let currentAnime = "";
</script>

<!-- 
  Skapa en numrerad lista över namnen på dina topp 5 filmer.
  Skapa en onumrerad lista där du skriver upp fem alternativa.
-->

<div>
  <ol>
    {#each movies as movie}
      <li
        class={movie.name}
        on:mouseenter={() => {
          opacity.set(1);
          currentMovie = movie.name;
        }}
        on:mouseleave={() => {
          opacity.set(0);
        }}
      >
        {movie.name}
      </li>
      <div class="absolute-pos">
        {#if currentMovie === movie.name}
          <img
            src={movie.img}
            alt="Poster for {movie.img}"
            class="smaller-image"
            style="opacity:{$opacity}"
          />
        {/if}
      </div>
    {/each}
  </ol>
</div>

<div>
  <ul>
    {#each otherMovies as otherMovie}
      <li
        class={otherMovie.name}
        on:mouseenter={() => {
          animeOpacity.set(1);
          currentAnime = otherMovie.name;
        }}
        on:mouseleave={() => {
          animeOpacity.set(0);
        }}
      >
        {otherMovie.name}
      </li>
      <div class="absolute-pos">
        {#if currentAnime === otherMovie.name}
          <img
            src={otherMovie.img}
            alt="Poster for {otherMovie.img}"
            class="smaller-image"
            style="opacity:{$animeOpacity}"
          />
        {/if}
      </div>
    {/each}
  </ul>
</div>

<style>
  .smaller-image {
    width: 50%;
    transition: opacity 1s;
  }
  .absolute-pos {
    position: absolute;
    top: 50px;
    right: 50%;
  }
  li:hover {
    color: slateblue;
    font-weight: 700;
  }
</style>
