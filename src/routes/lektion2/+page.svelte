<script>
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Lektion 2</title>
</svelte:head>

<div>
  <h1>This is a h1</h1>
  <ul>
    <li>thingy</li>
    <li>thingy2</li>
  </ul>
  <p>hi</p>

  <a href=""> <h2>Bigger text</h2></a>
</div>

<style>
  div {
    background-color: skyblue;
  }

  div h1 {
    color: hsl(219, 64%, 33%);
    font-size: 48px;
  }

  ul {
    background-color: hsl(35, 100%, 69%);
  }

  ul li {
    list-style: circle;
    background-color: bisque;
    text-align: center;
  }
  a {
    color: red;
    text-decoration: underline;
  }

  ul:hover {
    color: rgba(0, 0, 0, 0.3);
  }
  h2 {
    color: aquamarine;
  }
</style>
