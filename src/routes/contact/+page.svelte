<script>
  // your script goes here
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Lektion 1: Contact</title>
</svelte:head>

<nav>
  <ul>
    <li>
      <!-- /../ = gå tillbaka en mapp  -->
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

This is the contact us page

<style>
  /* your styles go here */
</style>
