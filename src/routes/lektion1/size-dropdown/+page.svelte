<script>
  let sizes = ["XS", "S", "M", "L", "XL"];
</script>

<select name="size" id="size-dropdown">
  <option value="" disabled hidden selected>Select size</option>
  {#each sizes as size}
    <option value={size}>{size}</option>
  {/each}
</select>

<style>
</style>
