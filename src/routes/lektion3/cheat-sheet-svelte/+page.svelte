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
          "#i",
          [
            "Select elements with that id",
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
      <div class="flex-row">
        <!-- <div class="flex-row"> -->
        {#each table.subtitle as subtitle}
          <div class="flex-column">
            <div class="subtitle">
              {subtitle}
            </div>
          </div>
        {/each}
      </div>
      {#each table.rows as rows, i}
        <div class="flex-row">
          {#each rows as row, i}
            <!-- <div class="flex-row"> -->
            <!-- <div class="left"> -->
            <div class="flex-column">
              {#if i === 0}
                <div class="flex-child">
                  {#each row as span, i}
                    <!-- <div> -->

                    <span class="name-{i}">
                      {span}
                    </span>
                    <!-- </div> -->
                  {/each}
                </div>
              {:else if i === 1}
                <!-- <div class="flex-child" /> -->
                {row}
                <!-- NOTE HTML -->
              {:else if i === 2}
                <!-- <div> -->
                <!-- <div class="flex-child" /> -->
                {#each row as span, i}
                  <div class="description-{i}">
                    {span}
                  </div>
                {/each}
                <!-- </div> -->
                <!-- <td> -->
                <!-- </td> -->
              {:else if i === 3}
                <!-- <div class="flex-child" /> -->
                <!-- <div> -->
                <div class="flex-child">
                  {#each row as span, i}
                    {#if span.toUpperCase() === span}
                      <span class="hit">
                        {span}
                      </span>
                    {:else}
                      <span class="not-hit">
                        {span}
                      </span>
                    {/if}
                  {/each}
                </div>
                <!-- </div> -->
              {:else}
                <!-- <div> -->
                <!-- {row} -->
                <!-- </div> -->
              {/if}
            </div>
          {/each}
        </div>
        {#if i !== 3}
          <div class="border" />
        {/if}
      {/each}
      <!-- </div> -->
    {/if}
  {/each}
</div>

<style>
  .flex-column {
    /* background-color: green; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    width: 300px;
    height: 30px;
  }

  .flex-column:nth-of-type(1) {
    /* background-color: rgb(128, 0, 113); */
    align-items: left;
    flex: 1;
  }
  .flex-column:nth-of-type(2) {
    /* background-color: rgb(128, 0, 113); */
    align-items: center;
    flex: 0.7;
  }
  .flex-column:nth-of-type(3) {
    /* background-color: rgb(128, 0, 113); */
    /* align-items: center; */
    flex: 1;
  }
  .flex-column:nth-of-type(4) {
    /* background-color: rgb(128, 0, 113); */
    align-items: center;
    flex: 1;
  }

  .flex-row {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    /* align-items: center; */
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }
  .flex-row:nth-of-type(1) {
    /* background-color: red; */
    display: flex;
    text-align: center;
    /* justify-content: space-around; */
  }
  .flex-child {
    /* background-color: yellow; */
    /* padding: 10px; */
  }

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
    /* position: relative; */
    /* right: 5px; */
    border-bottom: 1px solid #777;
    /* width: 170%; */
    padding: 0px;
    width: 98%;
    /* right: 10px; */
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
    /* padding: 1px; */
    margin: 5px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    text-transform: lowercase;
    font-weight: 700;
  }

  .not-hit {
    border: 1px solid #aaa;
    color: #aaa;
    margin: 5px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    font-weight: 700;
  }

  .subtitle {
    font-size: 1rem;
    color: #aaa;
    font-weight: 800;
    /* padding: 3px; */
    /* width: 100px; */
  }

  .name-0 {
    font-size: 1.3rem;
    padding: 3px;
    /* width: 100px; */
  }

  .name-1 {
    font-size: 0.8rem;
    font-weight: 700;
    color: #777;
    /* width: 100px; */
  }

  .CSS {
    font-size: 1.3rem;
    /* width: 300px; */
    /* width: 300px; */
  }

  .description-0 {
    font-size: 0.8rem;
    /* padding: 3px; */
  }

  .description-1 {
    font-size: 0.6rem;
    font-weight: 700;
    color: #777;
  }

  .description-2 {
    font-size: 0.6rem;
    font-weight: 700;
    color: #777;
  }

  /* NOTE CSS */

  .tiny-text {
    font-size: 0.8rem;
  }
</style>
