<script>
  // your script goes here
  import HTMLCSS_000 from "./HTMLCSS_000.svelte";
  import HTMLCSS_000Exercise from "./HTMLCSS_000_exercise.svelte";
  let visible = 0;

  function tabClick(_event, pageNum) {
    visible = pageNum;
    //console.log(visible);
  }
</script>

<svelte:head>
  <title>Lektion 1</title>
</svelte:head>

<button on:click={(event) => tabClick(event, 1)}>Page 1</button>
<button on:click={(event) => tabClick(event, 2)}>Page 2</button>

<div class="tab">
  {#if visible === 1}
    <HTMLCSS_000 />
  {:else if visible === 2}
    <HTMLCSS_000Exercise />
  {/if}
</div>
