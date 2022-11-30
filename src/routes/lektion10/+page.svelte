<script>
</script>

<h1>HTML Forms</h1>
<aside>
  <article>
    <h2>
      Argentinas förlust mot Saudiarabien i VM
      <a href="http://" aria-label="Läs mer om Argentinas förlust i VM"
        >Läs mer</a>
    </h2>
  </article>
  <article>
    <h2 id="artikel">
      Argentinas förlust mot Saudiarabien i VM
      <a id="länk" href="http://" aria-labelledby="länk artikel">Läs mer</a>
    </h2>
  </article>
  <article>
    <h2>
      Argentinas förlust mot Saudiarabien i VM
      <a href="http://">Läs mer</a>
    </h2>
  </article>
</aside>
<form action="">
  <label for="formy">Random input field</label>
  <input type="text" name="" id="formy" />
  <button class="">Klicka här!</button>
  <div>
    <fieldset>
      <legend class="font-bold text-lg" for="color"
        >Välj färg för produkt</legend>
      <label>
        Röd
        <input type="radio" name="color" />
      </label>

      <label>
        Blå
        <input type="radio" name="color" />
      </label>

      <label>
        Grön
        <input type="radio" name="color" />
      </label>
    </fieldset>
    <label>
      I agree to terms and conditions
      <input type="checkbox" />
    </label>
  </div>
  <p class="text-xl" id="add-todo">Lägg till todos</p>
  <input type="text" placeholder="Add todo" aria-labelledby="add-todo" />
  <br />
  <input type="text" placeholder="Add todo" aria-labelledby="add-todo" />
  <br />
  <!-- eller -->
  <input type="text" placeholder="Add todo" aria-label="Lägg till todo" />
  <!-- Skriv in lösenord -->
  <br />
  <br />
  <label for="password-input">Lösenord</label>
  <input
    aria-describedby="pw-description"
    id="password-input"
    type="password"
    name="" />
  <p id="pw-description">Minst 1 siffra, en versal och ett specialtecken</p>
  <div>
    <label for="name">Namn:</label>
    <input type="text" id="name" autocomplete="given-name" />
    <label for="address">Address:</label>
    <input type="text" id="address" autocomplete="address-level1" />
    <label for="creditcard">Betalkort:</label>
    <input type="text" id="creditcard" autocomplete="cc-number" />
  </div>
</form>

<style>
  input[type="checkbox"] {
    /* accent-color: yellow; */
    appearance: none;
    display: inline-block;
    width: 25px;
    height: 25px;
    border: 1px solid black;
  }
  input[type="checkbox"]:checked {
    background-color: blue;
  }

  /* test tailwind for svelte root */
  :root {
    @apply flex flex-row items-center content-between bg-purple-200 p-4 w-full;
  }
</style>
