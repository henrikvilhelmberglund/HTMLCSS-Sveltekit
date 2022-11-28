<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
</script>

{#if $page.url.pathname === "/lektion9/hemsida"}
  <slot />
{:else}
  <nav>
    <a href="{base}/">Home</a>
    <a href="{base}/lektion9/hemsida">Hemsida</a>
  </nav>
  <slot />
{/if}

<style>
</style>
