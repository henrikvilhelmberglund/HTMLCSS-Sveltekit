<script>
  import Button from "./Button.svelte";
  import P from "./P.svelte";
  import H2 from "./H2.svelte";
  import Header from "./Header.svelte";
</script>

<Header />

<H2>Exempel: grid</H2>

<P>Här är ett exempel på grid:</P>

<div class="grid grid-cols-4 gap-2 bg-slate-500 p-1 text-center">
  <div>01</div>
  <div class="bg-slate-300">02</div>
  <div>03</div>
  <div class="bg-slate-300">04</div>
  <div class="bg-slate-300 col-span-3">05</div>
  <div class="">06</div>
</div>

<code>
  <pre class="bg-slate-200 font-mono p-1">

    div class="grid grid-cols-4 gap-2 bg-slate-500 p-1 text-center">
    div>01/div>
    div class="bg-slate-300">02/div>
    div>03/div>
    div class="bg-slate-300">04/div>
    div class="bg-slate-300 col-span-3">05/div>
    div class="">06/div>
    /div>
  </pre>
</code>

<H2>Exempel: knapp</H2>

<div class="flex flex-col">
  <P>Med Tailwind kan man använda sig av små klasser som gör en viss sak.</P>
  <P>Knappen nedanför använder sig av fem klasser:</P>
  <ul>
    <li>
      <P>w-32 (ställer in bredden, samma sak som width: 8rem;)</P>
    </li>
    <li>
      <P>h-12 (ställer in höjden, samma sak som height: 3rem;</P>
    </li>
    <li>
      <P>
        bg-green-600 (ställer in bakgrundsfärgen, finns en mängd olika färger
        där man kan ändra t.ex 600 till 50-900)
      </P>
    </li>
    <li>
      <P>hover:bg-green-400 (lägger till en färg som visas vid hover)</P>
    </li>
    <li>
      <P>
        rounded (ställer in hur rund man vill ha, samma sak som border-radius:
        0.25rem;)
      </P>
    </li>
  </ul>

  <button class="w-32 h-12 bg-green-600 hover:bg-green-400 rounded"
    >Klicka här!</button>
  <br />
  <div class="inline">
    <code class="bg-slate-200 font-mono p-2">
      class="w-32 h-12 bg-green-600 rounded hover:bg-green-400">Klicka här!
    </code>
  </div>

  <H2>Exempel: ändra styling</H2>

  <P>
    En fördel är att man enkelt kan ändra på sin styling genom att ändra på
    klasserna.
  </P>

  <button class="w-32 h-12 bg-pink-600 hover:bg-pink-400 rounded"
    >Har bara ändrat bg-green till bg-pink!</button>

  <P
    >För att undvika repeterade klasser för alla html-element kan man använda
    sig av komponenter i javascript-ramverket man använder för att kunna ändra
    på klasserna på ett ställe.</P>

  <Button>En button-komponent</Button>
  <Button>En till button-komponent</Button>

  <a
    href="https://nerdcave.com/tailwind-cheat-sheet"
    class="text-emerald-400 text-3xl hover:text-emerald-200"
    >Tailwind Cheat-sheet</a>
</div>

<style>
</style>
