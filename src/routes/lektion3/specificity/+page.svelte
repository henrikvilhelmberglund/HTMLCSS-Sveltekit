<script>
  import { base } from "$app/paths";
</script>

<h1>CSS</h1>
<h2>CSS Selectors & Specificity</h2>
<div class="box big">
  <div class="box small" />
  <div class="box small">
    <div class="box tiny" />
    <div class="box tiny" id="favorite-box" />
    <div class="box tiny" />
  </div>
  <div class="box small" />
</div>

<style>
  .box {
    border: 2px solid red;
  }

  .box.big {
    height: 400px;
    background: darkslategray;
  }

  div.box.small {
    height: 120px;
    width: 120px;
    background: deepskyblue;
    margin: 5px;
  }

  .box.small {
    height: 120px;
    width: 120px;
    background: orange;
    margin: 5px;
  }

  .box.tiny {
    height: 30px;
    width: 30px;
    margin: 5px;
    background: darkgreen;
  }

  #favorite-box {
    height: 30px;
    width: 30px;
    margin: 5px;
    background: yellow;
  }
</style>
