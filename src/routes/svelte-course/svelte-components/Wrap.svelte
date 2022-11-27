<script>
  export let id;
</script>

<div {id}><slot /></div>

<style>
  div {
    background: pink;
    border: 23px solid orange;
    padding: 0 15px;
    width: 400px;
    text-align: center;
    transform: translateX(-200px);
    animation: 2s slide infinite alternate ease-in-out;
  }
</style>
