<script>
</script>

<h1>Flexbox CSS</h1>

<div class="parent">
  <div class="child one" />
  <div class="child two" />
  <div class="child three" />
  <div class="child four" />
  <!-- <div class="child five" /> -->
</div>

<style>
  .parent {
    height: 400px;
    background-color: darkmagenta;
    padding: 5px;
    display: flex;
    /* flex-direction: row; */
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    /* align-items: unset; */
  }
  .child {
    height: 75px;
    width: 100px;
    background-color: lightblue;
    /* margin: 5px; */
  }

  .one {
    background-color: red;
    flex-grow: 1;
  }
  .two {
    background-color: green;
    /* height: 150px; */
  }
  .three {
    background-color: yellow;
    flex-grow: 2;
    flex-shrink: 2;
    order: -1;
  }
  .four {
    background-color: blue;
    flex-grow: 1;
  }
  .five {
    background-color: aliceblue;
  }
</style>
