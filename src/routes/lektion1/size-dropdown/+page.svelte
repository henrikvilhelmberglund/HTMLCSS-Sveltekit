<script>
  let sizes = ["XS", "S", "M", "L", "XL"];
  let size;
</script>

<svelte:head>
  <title>Lektion 1: Size dropdown</title>
</svelte:head>

<div>
  <select bind:value={size} name="size" id="size-dropdown">
    <option value="" disabled hidden selected>Select size</option>
    {#each sizes as size}
      <option>{size}</option>
    {/each}
  </select>
</div>

<span class="is-inline">
  {#if size}
    <p>You picked {size}!</p>
  {:else}
    <p>Pick a size.</p>
  {/if}
  {#if size === "XS"}
    <p>You must be tiny.</p>
  {:else if size === "S"}
    <p>No need to diet.</p>
  {:else if size === "M"}
    <p>Average size!</p>
  {:else if size === "L"}
    <p>Big boi!</p>
  {:else if size === "XL"}
    <p>You can do it!</p>
  {/if}
</span>

<style>
  div {
    padding: 40px;
  }
  .is-inline * {
    display: inline;
  }
</style>
