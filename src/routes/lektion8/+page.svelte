<script>
</script>

<svelte:head>
  <link rel="stylesheet" href="./styles/style.css" />
</svelte:head>

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
  // // variables
  // $font-stack: Helvetica, sans-serif;
  // $primary-color: #777;
  // $font-size: 40px;
  // $p-font-size: 18px;
  // $ankademin-green: green;
  // $ankademin-coral: coral;
  // $mobile: 600px;

  // @mixin mobile {
  //   @media (max-width: $mobile) {
  //     @content;
  //   }
  // }

  // // mixin
  // @mixin border($color: white) {
  //   border: 2px solid $color;
  //   padding: 6px;
  // }

  // @mixin flex($direction: row, $justify: flex-start, $align: flex-start) {
  //   display: flex;
  //   flex-direction: $direction;
  //   justify-content: $justify;
  //   align-items: $align;
  // }

  // p {
  //   color: darkblue;
  // }

  // nav {
  //   ul {
  //     // display: flex;
  //     // gap: 30px;
  //     // @include flex();
  //     @include flex($direction: column);
  //     @include mobile {
  //       flex-direction: column;
  //       align-items: center;
  //     }
  //   }
  // }

  // // Nestade selectors
  // header {
  //   @include border($ankademin-green);
  //   &:hover {
  //     background-color: lightblue;
  //     * {
  //       background-color: lightcoral;
  //     }
  //   }
  //   p {
  //     font-size: $p-font-size;
  //     color: $ankademin-green;
  //   }
  //   h1 {
  //     font: 100% $font-stack;
  //     color: $primary-color;
  //     font-size: $font-size;
  //   }
  // }

  // main {
  //   @include border($ankademin-coral);
  //   &:hover {
  //     background-color: antiquewhite;
  //   }
  //   p {
  //     font-size: $p-font-size;
  //     color: $ankademin-coral;
  //   }
  //   h2 {
  //     color: #444;
  //   }
  // }
</style>
