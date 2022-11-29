<script>
  import { base } from "$app/paths";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Card from "./Card.svelte";
  import H2 from "./H2.svelte";

  let duck = [
    {
      type: "Svensk blå anka",
      src: `${base}/ankor/blå-anka.jpg`,
      alt: "En rund Svensk blå anka",
      desc: "Trots namnet är Blåankan inte alltid blå.",
      price: 200,
    },
    {
      type: "Cayuga",
      src: `${base}/ankor/cayuga.jpg`,
      alt: "En Cayuga som står bland löv",
      desc: "En vänlig och tyst anka.",
      price: 300,
    },
    {
      type: "Gräsand",
      src: `${base}/ankor/gräsand.jpg`,
      alt: "En Gräsand som tittar åt vänster",
      desc: "En exklusiv vild anka, alltså en and.",
      price: 400,
    },
    {
      type: "Myskanka",
      src: `${base}/ankor/myskanka.gif`,
      alt: "En Myskanka som tittar åt höger",
      desc: "Hanarna kvackar inte utan väser.",
      price: 250,
    },
    {
      type: "Pekinganka",
      src: `${base}/ankor/pekinganka.jpg`,
      alt: "En vit och gul Pekinganka",
      desc: "Den mest använda ankan i köttproduktion i världen.",
      price: 350,
    },
  ];
</script>

<Header />
<Main myClass="bg-gradient-to-b from-green-600 to-white">
  <H2>Nya ankor</H2>
  <div class="flex flex-1 flex-col sm:flex-row justify-between gap-5">
    <Card duck={duck[0]} />
    <Card duck={duck[1]} />
    <Card duck={duck[2]} />
    <Card duck={duck[3]} />
    <Card duck={duck[4]} />
  </div>
</Main>

<style>
</style>
