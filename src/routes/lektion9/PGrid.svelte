<script>
  export let white;
</script>

{#if white}
<p class="font-serif selection:text-emerald-200 selection:bg-emerald-600 text-white">
  <slot />
</p>
  
{:else}
  
<p class="font-serif selection:text-emerald-200 selection:bg-emerald-600">
  <slot />
</p>
{/if}
