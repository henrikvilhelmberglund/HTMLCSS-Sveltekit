<script>
  // your script goes here
  import HTMLCSS_000 from "./HTMLCSS_000.svelte";
  import HTMLCSS_000Exercise from "./HTMLCSS_000_exercise.svelte";
  import HTMLCSS_000Exercise2 from "./HTMLCSS_000_exercise2.svelte";
  let visible = 0;

  function tabClick(e, pageNum) {
    visible = pageNum;
    //console.log(visible);
  }
</script>

<svelte:head>
  <title>Lektion 1</title>
</svelte:head>

<button on:click={() => tabClick(event, 1)}>Page 1</button>
<button on:click={() => tabClick(event, 2)}>Page 2</button>
<button on:click={() => tabClick(event, 3)}>Page 3</button>

<div class="tab">
  {#if visible === 1}
    <HTMLCSS_000 />
  {:else if visible === 2}
    <HTMLCSS_000Exercise />
  {:else if visible === 3}
    <HTMLCSS_000Exercise2 />
  {/if}
</div>
