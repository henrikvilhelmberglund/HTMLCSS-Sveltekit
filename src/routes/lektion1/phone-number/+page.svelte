<script>
  // your script goes here
  let number = null;
  let leadingzero = 0;
  let length;
  $: length = Array.from(String(number)).length;
  $: console.log(length);

  $: if (number === null) {
    leadingzero = 0;
    console.log(leadingzero);
  } else if (number === 0) {
    leadingzero = 1;
  }
</script>

<div>
  <label for="phonenumber">Enter a phone number</label>
  <input type="number" bind:value={number} name="" id="phonenumber" />
</div>
<div>
  {#if number === null || undefined}
    <p>Enter a phone number</p>
  {:else if leadingzero === 1}
    {#if length === 9}
      <!-- content here -->
      Your phone number is 0{Array.from(String(number))
        .slice(0, 2)
        .join("")}-{Array.from(String(number))
        .slice(2, 5)
        .join("")}-{Array.from(String(number)).slice(5, 9).join("")}
    {:else}
      Your phone number is 0{Array.from(String(number))
        .slice(0, 1)
        .join("")}-{Array.from(String(number))
        .slice(1, 4)
        .join("")}-{Array.from(String(number)).slice(4, 9).join("")}
      <!-- else content here -->
    {/if}
  {:else if length === 10}
    <!-- content here -->
    <p>
      Your phone number is {Array.from(String(number))
        .slice(0, 3)
        .join("")}-{Array.from(String(number))
        .slice(3, 6)
        .join("")}-{Array.from(String(number)).slice(6, 10).join("")}
    </p>
  {:else}
    <p>
      Your phone number is {Array.from(String(number))
        .slice(0, 2)
        .join("")}-{Array.from(String(number))
        .slice(2, 5)
        .join("")}-{Array.from(String(number)).slice(5, 10).join("")}
    </p>
    <!-- else content here -->
  {/if}
</div>

<style>
  /* your styles go here */
  div {
    padding: 40px;
  }
</style>
