<script>
  import {
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    RadioGroupDescription,
  } from "@rgossiaux/svelte-headlessui";
  import "@fontsource/genos";
  import "@fontsource/elsie";
  let plan = "startup";
</script>

<RadioGroup
  class="cursor-pointer"
  value={plan}
  on:change={(e) => (plan = e.detail)}>
  <RadioGroupLabel class="font-duckName text-3xl">Plan</RadioGroupLabel>
  <RadioGroupOption
    class="font-duckDesc text-xl bg-slate-200 text-center w-32 rounded-xl m-1"
    value="startup"
    let:checked>
    <p
      class:checked
      class={checked
        ? "bg-emerald-800 text-green-200 font-bold rounded-xl m-0"
        : "m-0"}>
      Startup

      <span
        class={checked
          ? "underline decoration-emerald-800 absolute left-64 text-black font-duckName transition-all duration-300 font-normal text-4xl"
          : "absolute left-64 text-black font-duckName transition-all duration-300 font-normal opacity-0"}
        >Startup your startup.</span>
    </p>
  </RadioGroupOption>
  <RadioGroupOption
    class="font-duckDesc text-xl bg-slate-200 text-center w-32 rounded-xl m-1"
    value="business"
    let:checked>
    <p
      class:checked
      class={checked
        ? "bg-pink-800 text-pink-200 font-bold rounded-xl m-0"
        : "m-0"}>
      Business
      <span
        class={checked
          ? "underline decoration-pink-800 absolute left-64 text-black font-duckName transition-all duration-300 font-normal text-4xl"
          : "absolute left-64 text-black font-duckName transition-all duration-300 font-normal opacity-0"}
        >Business your business.</span>
    </p>
  </RadioGroupOption>
  <RadioGroupOption
    class="font-duckDesc text-xl bg-slate-200 text-center w-32 rounded-xl m-1"
    value="enterprise"
    let:checked>
    <p
      class:checked
      class={checked
        ? "bg-purple-800 text-purple-200 font-bold rounded-xl m-0"
        : "m-0"}>
      Enterprise
      <span
        class={checked
          ? "underline decoration-purple-800 absolute left-64 text-black font-duckName transition-all duration-300 font-normal text-4xl"
          : "absolute left-64 text-black font-duckName transition-all duration-300 font-normal opacity-0"}
        >Enterprise your enterprise.</span>
    </p>
  </RadioGroupOption>
</RadioGroup>

<style>
  .checked {
  }
</style>
