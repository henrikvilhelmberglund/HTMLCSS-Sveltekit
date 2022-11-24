<script>
</script>

<!-- <svelte:head>
  <link rel="stylesheet" href="../style2.css" />
</svelte:head> -->

<header>
  <h1>SASS Example Code</h1>
  <p>Lorem ipsum dolor sit amet.</p>
</header>
<main>
  <h2>Huvudinnehåll</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
</main>

<style lang="scss">
  // variables
  $font-stack: Helvetica, sans-serif;
  $primary-color: #aaa;
  $font-size: 40px;
  $p-font-size: 18px;
  $ankademin-green: green;
  $ankademin-coral: coral;

  // mixin
  @mixin border {
    border: 2px solid white;
    padding: 6px;
  }

  p {
    color: darkblue;
  }

  header {
    @include border;
    p {
      font-size: $p-font-size;
      color: $ankademin-green;
    }
    h1 {
      font: 100% $font-stack;
      color: $primary-color;
      font-size: $font-size;
    }
  }

  main {
    @include border;
    p {
      font-size: $p-font-size;
      color: $ankademin-coral;
    }
    h2 {
      color: #eee;
    }
  }

  :global(#svelte) {
    background-color: black;
    height: 100vh;
  }
</style>
