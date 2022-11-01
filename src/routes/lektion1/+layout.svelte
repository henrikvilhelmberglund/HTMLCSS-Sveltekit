<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  let links = ["size-dropdown", "phone-number", "movies"];
  //console.log("routeID: " + $page.routeId);
  //console.log("pathname: " + $page.url.pathname);

  function caps(input) {
    input = input.replaceAll("-", " ");
    return input[0].toUpperCase() + input.slice(1);
  }
</script>

<nav>
  {#each links as link}
    <a href="{base}/lektion1/{link}">{caps(link)}</a>
  {/each}
</nav>

<slot />

<style>
  /* your styles go here */
  a {
    margin-right: 30px;
  }
</style>
