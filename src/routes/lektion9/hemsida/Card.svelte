<script>
  import { base } from "$app/paths";
  import PDuckName from "./PDuckName.svelte";
  import PDuckDesc from "./PDuckDesc.svelte";
  export let duck;
  let { type, src, alt, desc, price } = duck;
</script>

<div class="flex flex-col text-center">
  <img
    {src}
    {alt}
    srcset=""
    class="h-64 border-2 border-solid transition-all border-yellow-300 hover:h-80" />
  <div class="flex flex-col justify-center align-center h-20">
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
