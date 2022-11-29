<script>
  import { base } from "$app/paths";
  import PDuckName from "./PDuckName.svelte";
  import PDuckDesc from "./PDuckDesc.svelte";
  export let duck;
  let { type, src, alt, desc, price } = duck;
  let audio;
  let focused = 0;
  let clicked = 0;
  function makeSound() {
    audio.play();
    clicked = 1;
  }
</script>

{#if focused && clicked}
  <img {src} {alt} srcset="" class="absolute top-10 h-[50vh]" />
{/if}
<audio src="../ankor/sounds/gräsand.mp3" bind:this={audio} />
<div
  class="flex group flex-col text-center transition-all sm:w-[15vw] w-[80vw] justify-center sm:justify-center">
  <img
    {src}
    {alt}
    on:click={makeSound}
    on:mouseover={() => (focused = 1)}
    on:focus={() => (focused = 1)}
    on:mouseleave={() => {
      focused = 0;
      clicked = 0;
    }}
    on:keyup={() => {
      focused = 0;
      clicked = 0;
    }}
    srcset=""
    class="flex hover:border-solid transition-all hover:border-3 hover:rounded-2xl hover:border-emerald-200" />
  <div class="flex flex-col justify-center h-30">
    <PDuckName>
      {type}
    </PDuckName>
    <PDuckName newClass="h-1 text-1xl font-duckName">
      {price}sek
    </PDuckName>
  </div>
  <PDuckDesc>
    {desc}
  </PDuckDesc>
</div>

<style>
</style>
