<script context="module">
  import { H1, Blockquote, Li, P } from "./components.js";
  // import { h1 as H1, blockquote as Blockquote, li as Li, p as P} from "./components.js";
  export { H1 as h1, Blockquote as blockquote, Li as li, P as p };
</script>

<script>
  export let title;
  export let author;
  export let date;
</script>

{#if title}
  <!-- <h1 class="title">{title}</h1> -->
  <!-- <H1>{title}</H1> -->
  <svelte:component this={H1}>{title}</svelte:component>
{/if}
{#if date}
  <!-- <P class="date">on: {date}</P> -->
  <svelte:component this={P}>{date}</svelte:component>
{/if}
{#if author}
  <!-- <P class="author">by: {author}</P> -->
  <svelte:component this={P}>{author}</svelte:component>
{/if}
<slot />
