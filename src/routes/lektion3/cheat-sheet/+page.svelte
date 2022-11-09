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
      <td class="left">
        <span class="bigger-text">Universal</span>
        <span class="gray smaller-text">Selector</span>
      </td>
      <td>
        <span class="bigger-text">*</span>
      </td>
      <td class="left tiny-text">Select all elements </td>
      <td>
        <span class="hit">a</span>
        <span class="hit">b</span>
        <span class="hit">c</span>
        <span class="hit">d</span>
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <div class="border" />
      </td>
    </tr>
    <tr>
      <td class="left">
        <span class="bigger-text">Type</span>
        <span class="gray smaller-text">Selector</span>
      </td>
      <td><span class="bigger-text">div</span></td>
      <td class="left">
        <div class="tiny-text">Select all elements of that type</div>
        <div class="tiny-text">Select div elements</div>
      </td>
      <td>
        <span class="not-hit">a</span>
        <span class="hit">div</span>
        <span class="not-hit">c</span>
        <span class="hit">div</span>
      </td>
    </tr>
    <tr>
      <td colspan="4">
        <div class="border" />
      </td>
    </tr>

    <tr>
      <td class="left">
        <span class="bigger-text">Class</span>
        <span class="gray smaller-text">Selector</span>
      </td>
      <td><span class="bigger-text">.c</span></td>
      <td class="left">
        <div class="tiny-text">Select elements with that class</div>
        <div class="gray tiny-text">Select elements with the c class</div>
      </td>
      <td>
        <span class="not-hit">.a</span>
        <span class="not-hit">.b</span>
        <span class="hit">.c</span>
        <span class="not-hit">.d</span>
      </td>
    </tr>

    <tr>
      <td colspan="4">
        <div class="border" />
      </td>
    </tr>

    <tr>
      <td class="left">
        <span class="bigger-text">Id</span>
        <span class="gray smaller-text">Selector</span>
      </td>
      <td><span class="bigger-text">#i</span></td>
      <td class="left">
        <div class="tiny-text">Select elements with that id</div>
        <div class="gray tiny-text">Select elements with the i id</div>
        <div class="gray tiny-text">
          *It is best practice to not use ids in CSS
        </div>
      </td>
      <td>
        <span class="not-hit">#a</span>
        <span class="not-hit">#b</span>
        <span class="hit">#i</span>
        <span class="not-hit">#d</span>
      </td>
    </tr>
  </table>
</div>

<style>
</style>
