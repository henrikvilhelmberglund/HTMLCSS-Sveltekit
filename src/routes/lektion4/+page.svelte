<script>
</script>

<h1>Flexbox CSS</h1>

<div class="parent">
  <div class="child" />
  <div class="child" />
  <div class="child" />
</div>

<style>
  .parent {
    height: 400px;
    background-color: darkmagenta;
    padding: 5px;
    display: flex;
    /* flex-direction: row; */
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  .child {
    height: 75px;
    width: 75px;
    background-color: lightblue;
    margin: 5px;
  }
</style>
