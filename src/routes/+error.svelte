<script>
  import { page } from "$app/stores";
  let cutedog =
    "https://github.com/FEND22/fend22.github.io/blob/main/courses/HTML-CSS/notes/henrikvilhelmberglund/cute-dog.jpg?raw=true";
</script>

<div class="center">
  <h1>{$page.status}: {$page.error.message}</h1>
  <img src={cutedog} alt="A cute three legged(?) dog" />
  <h2>Baxter is sad too.</h2>
</div>

<style>
  h1 {
    font-family: "Roboto";
  }
  h2 {
    font-family: "Roboto";
  }
  .center {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    text-align: center;
  }
</style>
