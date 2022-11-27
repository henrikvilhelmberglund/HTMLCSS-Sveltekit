<!-- src/lib/Example.svelte -->
<script>
  // the source of the example, if you want it
  export let src;

  // all meta tags of the code block
  export let meta;
</script>

<div class="example flex flex-col">
  <slot name="example" />
</div>
<div class="code">
  <pre class="language-svelte"><slot name="code" /></pre>
</div>
