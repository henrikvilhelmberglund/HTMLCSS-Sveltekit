<script>
  let tables = [
    {
      // NOTE data
      title: "Basic",
      subtitle: ["Name", "CSS", "Description", "Results"],
      rows: [
        [
          ["Universal", "Selector"],
          "*",
          ["Select all elements"],
          ["A", "B", "C", "D"],
        ],
        [
          ["Type", "Selector"],
          "div",
          ["Select elements of that type", "Select div elements"],
          ["a", "DIV", "c", "DIV"],
        ],
        [
          ["Class", "Selector"],
          ".c",
          [
            "Select elements with that class",
            "Select elements with the c class",
          ],
          [".a", ".b", ".C", ".d"],
        ],
        [
          ["ID", "Selector"],
          "*",
          [
            "Select all elements",
            "Select elements with the i id",
            "*It is best practice to not use ids in CSS",
          ],
          ["#a", "#b", "#I", "#d"],
        ],
      ],
    },
    {},
    {},
    {},
    {},
    {},
  ];
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="../cheat-sheet-svelte.css" />
</svelte:head>

<div>
  <h1>CSS cheat-sheet</h1>
</div>

<div class="base-div">
  {#each tables as table}
    {#if table.title}
      <h2>{table.title}</h2>
      <!-- <p>{table.subtitle}</p> -->
      <table>
        {#each table.subtitle as subtitle}
          <th>
            {subtitle}
          </th>
        {/each}
        {#each table.rows as rows}
          <tr>
            {#each rows as row, i}
              {#if i === 0}
                <td class="left">
                  {#each row as span, i}
                    <span class="name-{i}">{span}</span>
                  {/each}
                </td>
              {:else if i === 1}
                <td>
                  <div class="CSS">{row}</div>
                </td>
                <!-- NOTE HTML -->
              {:else if i === 2}
                <td>
                  {#each row as span, i}
                    <div class="description-{i}">{span}</div>
                  {/each}
                </td>
                <!-- <td> -->
                <!-- {row} -->
                <!-- </td> -->
              {:else if i === 3}
                <td>
                  {#each row as span, i}
                    {#if span.toUpperCase() === span}
                      <span class="hit">{span}</span>
                    {:else}
                      <span class="not-hit">{span}</span>
                    {/if}
                  {/each}
                </td>
              {:else}
                <td>
                  {row}
                </td>
              {/if}
            {/each}
          </tr>
        {/each}
      </table>
    {/if}
  {/each}
</div>

<!-- <tr>
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
    </tr> -->
<style>
  h2 {
    padding: 10px;
    padding-bottom: 0px;
  }

  .base-div {
    background-color: #222222;
    border-radius: 8px;
    padding-left: 20px;
    margin: 10px;
    padding-bottom: 10px;
    width: 900px;
  }

  .gray {
    color: #777;
  }

  .border {
    position: relative;
    /* right: 5px; */
    border-bottom: 2px solid #777;
    /* width: 170%; */
    padding: 0px;
    width: 98%;
    right: 10px;
  }

  table {
    table-layout: fixed;
    width: 100%;
    margin: 10px;
    /* padding: 10px; */
  }

  td {
    text-align: center;
    padding: 10px;
    margin: 0px;
  }

  td.left {
    text-align: left;
  }

  tr {
    padding: 0px;
  }

  th {
    color: #777;
    font-weight: 900;
  }

  .hit {
    background-color: hsl(208, 69%, 51%);
    padding: 1px;
    margin: 5px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 4px;
    text-transform: lowercase;
  }

  .not-hit {
    border: 1px solid #aaa;
    color: #aaa;
    margin: 5px;
    padding-left: 6px;
    padding-right: 6px;
    border-radius: 4px;
  }

  .name-0 {
    font-size: 1.3rem;
    padding: 3px;
  }

  .name-1 {
    font-size: 0.8rem;
    font-weight: 700;
    color: #777;
  }

  .CSS {
    font-size: 1.3rem;
  }

  .description-0 {
    font-size: 0.8rem;
    /* padding: 3px; */
  }

  .description-1 {
    font-size: 0.8rem;
    font-weight: 700;
    color: #777;
  }

  .description-2 {
    font-size: 0.8rem;
    font-weight: 700;
    color: #777;
  }

  /* NOTE CSS */

  .tiny-text {
    font-size: 0.8rem;
  }
</style>
