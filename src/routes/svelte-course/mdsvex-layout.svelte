<script context="module">
  import { h1, blockquote, li, p } from "./components.js";
  import { h1 as H1, blockquote as Blockquote, li as Li, p as P} from "./components.js";
  export { h1, blockquote, li, p };
</script>

<script>
  export let title;
  export let author;
  export let date;
</script>

{#if title}
  <!-- <h1 class="title">{title}</h1> -->
  <H1>{title}</H1>
{/if}
{#if date}
  <P class="date">on: {date}</P>
{/if}
{#if author}
  <P class="author">by: {author}</P>
{/if}
<slot />
