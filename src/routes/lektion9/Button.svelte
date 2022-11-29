<script>
  import Span from "./Span.svelte";
  let active = false;
  export let type;

  function enter() {
    active = true;
  }

  function leave() {
    active = false;
  }
</script>

<div>
  {#if type === "warning"}
    <button
      on:mousedown={enter}
      on:mouseup={leave}
      class="w-32 h-12 font-bold text-xl bg-red-700 transition-all hover:bg-red-500 active:bg-red-400 rounded border-none m-2 shadow-xl shadow-red-800">
      <slot />
    </button>
  {:else}
    <button
      on:mousedown={enter}
      on:mouseup={leave}
      class="w-32 h-12 bg-green-600 transition-all hover:bg-green-400 active:bg-green-300 rounded border-none m-2 shadow-xl shadow-green-600/50">
      <slot />
    </button>
  {/if}

  {#if active}
    {#if type === "warning"}
      <Span>You're clicking the red button??</Span>
    {:else}
      <Span>You're clicking me!</Span>
    {/if}
  {/if}
</div>

<style>
</style>
