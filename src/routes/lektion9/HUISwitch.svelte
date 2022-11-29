<script>
  import { Switch } from "@rgossiaux/svelte-headlessui";

  export let enabled = false;
</script>

<Switch
  checked={enabled}
  on:change={(e) => (enabled = e.detail)}
  class={enabled
    ? "bg-slate-800 w-16 h-16 rounded-full hover:bg-slate-600"
    : "bg-slate-200 w-16 h-16 rounded-full hover:bg-slate-300"}>
  <span class="sr-only">Enable notifications</span>
  <span class={enabled ? "text-white" : ""}>{enabled}</span>
  <span class="toggle" class:toggle-on={enabled} class:toggle-off={!enabled} />
</Switch>
