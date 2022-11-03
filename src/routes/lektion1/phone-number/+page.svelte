<script>
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
  let phoneString;
  $: phoneString =
    length + leadingzero === 9
      ? "Your landline phone number is"
      : "Your mobile phone number is";
</script>

<svelte:head>
  <title>Lektion 1: Phone number</title>
</svelte:head>

<div>
  <label for="phonenumber">Enter a phone number</label>
  <form action="">
    <input
      type="number"
      placeholder="0701234567 // 081234567"
      pattern="\d*"
      bind:value={number}
      name=""
      id="phonenumber"
    />
    <!-- <button>Give me your number!</button> -->
  </form>
</div>
<div>
  {#if number === null || undefined}
    <h2>Enter a phone number</h2>
  {:else if leadingzero === 1}
    {#if length === 8}
      <h2>
        {phoneString} 0{Array.from(String(number))
          .slice(0, 1)
          .join("")}-{Array.from(String(number))
          .slice(1, 4)
          .join("")}-{Array.from(String(number)).slice(4, 9).join("")}
      </h2>
    {:else}
      <h2>
        {phoneString} 0{Array.from(String(number))
          .slice(0, 2)
          .join("")}-{Array.from(String(number))
          .slice(2, 5)
          .join("")}-{Array.from(String(number)).slice(5, 9).join("")}
      </h2>
    {/if}
  {:else if length === 9}
    <h2>
      {phoneString}
      {Array.from(String(number)).slice(0, 2).join("")}-{Array.from(
        String(number)
      )
        .slice(2, 5)
        .join("")}-{Array.from(String(number)).slice(5, 10).join("")}
    </h2>
  {:else}
    <h2>
      {phoneString}
      {Array.from(String(number)).slice(0, 3).join("")}-{Array.from(
        String(number)
      )
        .slice(3, 6)
        .join("")}-{Array.from(String(number)).slice(6, 10).join("")}
    </h2>
  {/if}
</div>

<style>
  div {
    padding: 40px;
  }
</style>
