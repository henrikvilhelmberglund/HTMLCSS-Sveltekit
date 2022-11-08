<script>
  import Before from "./Before.svelte";
  import After from "./After.svelte";
  import { blur } from "svelte/transition";
  import { sineIn } from "svelte/easing";
  import { sineOut } from "svelte/easing";

  let changed = false;
  function toggle() {
    if (!changed) {
      changed = true;
    } else {
      changed = false;
    }
  }
</script>

<div class="sticky">
  <button on:click={toggle}>Toggle changes</button>
</div>

{#key changed}
  <div
    in:blur={{ duration: 150, easing: sineOut, delay: 100 }}
    out:blur={{ duration: 50, easing: sineIn }}
  >
    <svelte:component this={changed ? Before : After} />
  </div>
{/key}

<style>
  .sticky {
    display: inline;
    position: sticky;
    top: 10px;
    left: 500px;
  }
</style>
