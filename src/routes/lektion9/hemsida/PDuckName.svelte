<script>
  import "@fontsource/elsie";
  export let newClass;
</script>

{#if newClass}
<p class={newClass}>
  <slot />
</p>
{:else}  
<p class="text-4xl font-duckName m-0">
  <slot />
</p>
{/if}

<style>
</style>
