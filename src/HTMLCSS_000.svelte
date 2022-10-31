<script>
  import { base } from "$app/paths";
</script>

<!-- <div style="height:50px;width:100px;border:1px solid black"> -->
<nav>
  <ul>
    <li>
      <a href="{base}/">Hem</a>
    </li>
    <li>
      <a href="{base}/about">Om oss</a>
    </li>
    <li>
      <a href="{base}/contact">Kontakta oss</a>
    </li>
  </ul>
</nav>

<div>
  <select name="" id="">
    <option disabled hidden selected>Välj språk</option>
    <option value="">Svenska</option>
    <option value="">Engelska</option>
    <option value="" disabled>Spanska</option>
    <option value="" hidden>Japanska</option>
    <option value="">Japanska</option>
  </select>
  <h1>HTML - Introduktion</h1>
  <h2>Javascript är kul!</h2>
  <a href="https://vitejs.dev" target="_blank">
    <div>
      <img src="vite.svg" width="100px" alt="Vite Logo" />
      <p>Click!</p>
    </div>
  </a>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet
    repellendus temporibus, eos expedita aperiam asperiores perspiciatis velit
    molestias debitis placeat consequuntur magni sequi explicabo. Quia, ipsa!
    Velit, magnam vel?
  </p>
  <h3>Fördelarna med JS</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quisquam?
  </p>
  <h2>Men CSS är roligare!</h2>
  <p>Lorem ipsum dolor sit amet.</p>
</div>

<style>
  /* 

CSS Selector {
  CSS Preporty: Value
}

*/

  div {
    border: 4px solid green;
  }

  a {
    color: red;
    /* text-decoration: none; */
  }

  a:hover {
    color: blue;
    background: darkcyan;
    cursor: grabbing;
  }

  div:hover {
    background: yellow;
    padding-top: 50px;
    /* position: fixed; */
    /* top: 10px; */
    transition: all 500ms;
  }
</style>
