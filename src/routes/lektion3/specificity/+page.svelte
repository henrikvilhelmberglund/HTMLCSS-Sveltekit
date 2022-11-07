<script>
  import { base } from "$app/paths";
</script>

<h1>CSS</h1>
<h2>CSS <span>Selectors</span> & Specificity</h2>
<div class="box big">
  <div class="box small one" />
  <div class="box small two">
    <span class="box tiny" />
    <div class="box tiny" id="favorite-box" />
    <div class="box tiny" />
  </div>
  <div class="box small three" />
</div>

<style>
  h2 span {
    color: red;
  }
  .box {
    border: 2px solid red;
  }

  .box.big {
    min-height: 1500px;
    background: darkslategray;
    padding: 10px 20px;
    position: relative;
    /* 
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px
    padding-left: 20px;
    */
  }

  div.box.small {
    height: 150px;
    width: 150px;
    background: deepskyblue;
    margin: 20px 20px;
  }

  .box.small {
    height: 120px;
    width: 120px;
    background: orange;
    margin: 5px;
    /* padding: 20px; */
    box-sizing: border-box;
  }

  .box.tiny {
    display: inline-block;
    height: 30px;
    width: 30px;
    margin-left: 5px;
    margin-top: 55px;
    background: darkgreen;
  }

  #favorite-box {
    height: 30px;
    width: 30px;
    /* margin: 5px; */
    background: yellow;
  }

  .box.small.one {
    background-color: tomato;
    position: relative;
    top: 100px;
    /* right: 100px; */
    /* bottom: 50px; */
    left: 10px;
  }

  .box.small.two {
    background-color: seagreen;
    position: absolute;
    top: 0px;
    margin: 0px;
  }

  .box.small.three {
    /* position: sticky; */
    position: fixed;
    top: 10px;
  }
</style>
