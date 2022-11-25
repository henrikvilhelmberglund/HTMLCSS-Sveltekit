<script context="module">
  import H1 from "./components/H1.svelte";
  export { H1 as h1 };
  export let title;
  export let author;
  export let date;
</script>

{#if title}
  <h1>{title}</h1>
{/if}
{#if date}
  <p class="date">on: {date}</p>
{/if}
{#if author}
  <p class="date">by: {author}</p>
{/if}
<slot />
