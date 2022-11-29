<script>
  import "@fontsource/elsie";
  export let newClass = undefined;
</script>

{#if newClass}
  <p class={newClass}>
    <slot />
  </p>
{:else}
  <p
    class="text-4xl font-duckName m-0  transition-all group-hover:underline group-hover:decoration-emerald-400 group-hover:decoration-4 group-hover:underline-offset-4 underline decoration-emerald-400/0 decoration-4 underline-offset-4 ">
    <slot />
  </p>
{/if}

<style>
</style>
