<script>
  let links = ["sizedropdown", "phonenumber", "movies"];
</script>

<baseURL />

<nav>
  {#each links as link}
    <a href="./{link}">{link}</a>
  {/each}
</nav>

<slot />

<style>
  /* your styles go here */
</style>
