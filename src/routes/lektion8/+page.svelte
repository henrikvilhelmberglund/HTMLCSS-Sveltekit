<script>
</script>

<!-- <svelte:head>
  <link rel="stylesheet" href="../style2.css" />
</svelte:head> -->

<header>
  <nav>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Career</li>
      <li>SCSS</li>
    </ul>
  </nav>
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
  @mixin border($color: white) {
    border: 2px solid $color;
    padding: 6px;
  }

  @mixin flex($direction: row, $justify: flex-start, $align: flex-start) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: $align;
  }

  p {
    color: darkblue;
  }

  nav {
    ul {
      color: white;
      // display: flex;
      // gap: 30px;
      // @include flex();
      @include flex($direction: column);
    }
  }

  // Nestade selectors
  header {
    @include border($ankademin-green);
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
    @include border($ankademin-coral);
    p {
      font-size: $p-font-size;
      color: $ankademin-coral;
    }
    h2 {
      color: #eee;
    }
  }

  // :global(#svelte) {
  //   background-color: black;
  //   height: 100vh;
  // }
</style>
