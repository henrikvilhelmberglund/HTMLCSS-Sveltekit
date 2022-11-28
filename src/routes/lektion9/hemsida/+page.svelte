<script>
  import { base } from "$app/paths";
  import Header from "./Header.svelte";
  import Main from "./Main.svelte";
  import Card from "./Card.svelte";
</script>

<Header/>
<Main />
<div class="flex">
  <Card src="{base}/ankor/blå-anka.jpg" />
  <Card src="{base}/ankor/cayuga.jpg"/>
  <Card src="{base}/ankor/gräsand.jpg"/>
  <Card src="{base}/ankor/myskanka.gif"/>
  <Card src="{base}/ankor/pekinganka.jpg"/>
</div>

<style>
</style>
