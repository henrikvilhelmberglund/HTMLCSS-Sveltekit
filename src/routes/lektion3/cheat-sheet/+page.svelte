<script>
</script>

<svelte:head>
  <link rel="stylesheet" href="../cheat-sheet.css" />
</svelte:head>

<div>
  <h1>CSS cheat-sheet</h1>
</div>

<div class="base-div">
  <h2>Basic</h2>
  <table>
    <tr>
      <th>Name</th>
      <th>CSS</th>
      <th>Description</th>
      <th>Results</th>
    </tr>
    <tr>
      <td>Universal <span class="gray">Selector</span> </td>
      <td>*</td>
      <td>Select all elements </td>
      <td
        ><span class="hit">a</span><span class="hit">b</span><span class="hit"
          >c</span
        ><span class="hit">d</span></td
      >
    </tr>
    <tr>
      <td colspan="4">
        <div class="border" />
      </td>
    </tr>
    <tr>
      <td>Type <span class="gray">Selector</span></td>
      <td>a</td>
      <td>a</td>
      <td>a</td>
    </tr>
    <tr>
      <td colspan="4">
        <div class="border" />
      </td>
    </tr>

    <tr>
      <td>Class <span class="gray">Selector</span></td>
      <td>.c</td>
      <td>a</td>
      <td>a</td>
    </tr>

    <tr>
      <td colspan="4">
        <div class="border" />
      </td>
    </tr>

    <tr>
      <td>id <span class="gray">Selector</span></td>
      <td>#i</td>
      <td>a</td>
      <td>a</td>
    </tr>
  </table>
</div>

<style>
</style>
