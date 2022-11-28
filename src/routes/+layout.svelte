<script>
  import "../app.postcss";
  // your script goes here
  import { base } from "$app/paths";
  import "@fontsource/inter/400.css";
  import "@fontsource/inter/200.css";
  import "@fontsource/inter/600.css";
  import "@fontsource/raleway/400.css";
  import "@fontsource/raleway/200.css";
  import "@fontsource/raleway/600.css";
  import "@fontsource/raleway/800.css";
  // import "@fontsource/inter";
  import { page } from "$app/stores";
</script>

{#if $page.url.pathname === "/lektion9/hemsida"}
  <slot />
{:else}
  <nav>
    <a href="{base}/">Home</a>
    <a href="{base}/lektion1">Lektion 1</a>
    <a href="{base}/lektion2">Lektion 2</a>
    <a href="{base}/lektion3">Lektion 3</a>
    <a href="{base}/lektion4">Lektion 4</a>
    <a href="{base}/lektion5">Lektion 5</a>
    <a href="{base}/lektion6">Lektion 6</a>
    <a href="{base}/lektion7">Lektion 7</a>
    <a href="{base}/lektion8">Lektion 8</a>
    <a href="{base}/lektion9">Lektion 9</a>
    <a href="{base}/threlte">Threlte test</a>
    <a href="{base}/svelte-course">Svelte course notes</a>
  </nav>

  <slot />
{/if}

<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>
