<script context="module">
  import { h1, blockquote, li, p } from "./components.js";
  export { h1, blockquote, li, p };
  export let title;
  export let author;
  export let date;
</script>

<h1 class="title">{title}</h1>
<p class="date">on: {date}</p>
<p class="author">by: {author}</p>
<slot />
