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
    {
      title: "Combination",
      subtitle: ["Name", "CSS", "Description", "Results"],
      rows: [
        [
          ["Descendant", "Selector"],
          "div a",
          [
            "Select elements that are descendants of the first element",
            "Select anchors that are inside a div",
          ],
          // TODO
          [["div"], ["A", "b"], ["A", "c", "A", "d"]],
        ],
        // prettier-ignore
        [["Direct Child","Selector"],"div > a",["Select elements that are direct children of the first element", "Select anchors that are direct children of a div"], ["div a b a c a d"],],
        [
          ["General Sibling", "Selector"],
          "div ~ a",
          [
            "Select elements that are direct children of the first element",
            "Select anchors that are direct children of a div",
          ],
          [["div"], ["A", "b"], ["a", "c", "a", "d"]],
        ],
        [
          ["Adjacent Sibling", "Selector"],
          "div + a",
          [
            "Select elements that are siblings of the first element and come directly after the first element",
            "Selects all anchors that are siblings of a div and come directly after the div",
          ],
          ["a div a a"],
        ],
        [
          ["Or", "Selector"],
          "div,",
          [
            "Select elements that match any selector in the list",
            "Selects all anchors and all divs",
          ],
          ["a div a b"],
        ],
        [
          ["And", "Selector"],
          "div.c",
          [
            "Select elements that match all the selector combinations",
            "Selects all divs with the class c",
          ],
          [".a div.c .c div"],
        ],
      ],
    },
    {
      title: "Attribute",
      subtitle: ["Name", "CSS", "Description", "Results"],
      rows: [
        [
          ["Has", "Attribute"],
          "[a]",
          [
            "Select elements that have that attribute",
            "Select elements with the a attribute",
          ],
          ["[A]", "[A=”1”]", "[c]", "d"],
        ],
        [
          ["Exact", "Attribute"],
          "[a=”1”]",
          [
            "Select elements that have that attribute with exactly that value",
            "Select elements with the a attribute with a value of 1",
          ],
          ["[a]", "[A=”1”]", "[c]", "d"],
        ],
        [
          ["Begins With", "Attribute"],
          "[a^=”1”]",
          [
            "Select elements that have that attribute which start with that value",
            "Select elements with the a attribute with a value that starts with 1",
          ],
          ["[A=”12”]", "[a=”21”]"],
        ],
        [
          ["Ends With", "Attribute"],
          "[a$=”1”]",
          [
            "Select elements that have that attribute which end with that value",
            "Select elements with the a attribute with a value that ends with 1",
          ],
          ["[a=”12”]", "[A=”21”]"],
        ],
        [
          ["Substring ", "Attribute"],
          "[a*=”1”]",
          [
            "Select elements that have that attribute which contain that value anywhere",
            "Select elements with the a attribute with a value that contains a 1",
          ],
          ["[A=”12”]", "[A=”21”]"],
        ],
      ],
    },
    {
      title: "Pseudo Element",
      subtitle: ["Name", "CSS", "Description", "Results"],
      rows: [
        [
          ["Before", "Selector"],
          "div::before",
          [
            "Creates an empty element directly before the children of selected element",
          ],
          ["div BEFORE c after"],
        ],
        [
          ["After", "Selector"],
          "div::after",
          [
            "Creates an empty element directly after the children of selected element",
          ],
          ["div before c AFTER"],
        ],
      ],
    },
    {
      title: "Pseudo Class (State)",
      subtitle: ["Name", "CSS", "Description"],
      rows: [
        [
          ["Hover", "Selector"],
          "button:hover",
          [
            "Select elements that are hovered by the mouse",
            "Select buttons that are being hovered",
          ],
        ],
        [
          ["After", "Selector"],
          "div::after",
          [
            "Creates an empty element directly after the children of selected element",
          ],
          ["div before c AFTER"],
        ],
      ],
    },
    {
      title: "Pseudo Class (Position/Other)",
      subtitle: ["Name", "CSS", "Description", "Results"],
      rows: [
        [
          ["Hover", "Selector"],
          "button:hover",
          [
            "Select elements that are hovered by the mouse",
            "Select buttons that are being hovered",
          ],
        ],
      ],
    },
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

<div class="flex-h1">
  <div>
    <h1>CSS</h1>
  </div>
  <div>
    <h3>{"{"}selectors: cheat-sheet{"}"}</h3>
  </div>
</div>
<div class="flex-h4">
  <div>
    <h4>By Web Dev Simplified, copied(?) by Henrik Berglund</h4>
  </div>
</div>

{#each tables as table, y}
  <div class="base-div">
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
      <!-- {table.rows.length} -->
      {#each table.rows as rows, rl}
        <div class="flex-row-{y}">
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

                <div class="nice-div">
                  {#each row as span, r}
                    <!-- {console.log(span)}
                    {console.log(typeof span)} -->
                    {#if typeof span === "object"}
                      <div class="flex-row-with-children">
                        {#each span as element, s}
                          {#if typeof element === "object"}
                            <div class="flex-row-with-children">
                              {#each element as inner, e}
                                {#if typeof inner === "object"}
                                  console.log("what")
                                {:else if inner.toUpperCase() === inner}
                                  <span class="hit">
                                    {inner}
                                  </span>
                                {:else}
                                  <span class="not-hit">
                                    {inner}
                                  </span>
                                {/if}
                              {/each}
                            </div>
                          {:else if element.toUpperCase() === element}
                            <div class="tiny-border-{r}">
                              <span class="hit">
                                {element}
                              </span>
                              <div class="tiny-line-{r}" />
                            </div>
                          {:else}
                            <div class="tiny-border-{r}">
                              <span class="not-hit">
                                {element}
                              </span>
                              <div class="tiny-line-{r}" />
                            </div>
                          {/if}
                        {/each}
                      </div>
                    {:else if span.toUpperCase() === span}
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
              {/if}
            </div>
          {/each}
        </div>
        {#if rl !== table.rows.length - 1}
          <div class="border" />
        {/if}
      {/each}
      <!-- </div> -->
    {/if}
  </div>
{/each}

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

  .flex-row-0 {
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
  .flex-row-1 {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    height: 100px;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    align-items: center;
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }
  .flex-row-2 {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    height: 100px;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    align-items: center;
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }
  .flex-row-3 {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    height: 100px;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    align-items: center;
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }
  .flex-row-4 {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    height: 100px;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    align-items: center;
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }
  .flex-row-5 {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    height: 100px;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    align-items: center;
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }
  .flex-row-6 {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    height: 100px;
    /* flex-direction: row; */
    /* justify-content: space-around; */
    align-items: center;
    /* align-self: center; */
    /* flex-wrap: wrap; */
    /* width: 30%; */
  }

  .flex-row-with-children {
    /* background-color: red; */
    /* width: 700px; */
    /* padding: 10px; */
    display: flex;
    /* height: 100px; */
    /* flex-direction: row; */
    justify-content: center;
    justify-content: space-around;
    align-items: center;
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
  .flex-child-results {
    /* background-color: yellow; */
    /* padding: 10px; */
  }

  .centered-div {
    /* background-color: yellow; */
    justify-content: center;
    /* justify-content: space-around; */
    align-items: center;
    display: flex;
    flex-direction: column;
    /* padding: 10px; */
  }

  .flex-h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 100px;
  }
  .flex-h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 5px;
    font-weight: 300;
    /* height: 100px; */
  }
  h1 {
    padding: 10px;
    font-size: 3rem;
  }

  h2 {
    padding: 10px;
    padding-bottom: 0px;
  }

  h3 {
    padding: 10px;
    font-size: 2rem;
    font-weight: 300;
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
  .tiny-border-0 {
    /* display: flex; */
    position: relative;
    /* right: 4px; */
    border-bottom: 2px solid #777;
    /* margin-left: 5px; */
    width: 60%;
    /* padding: 0px; */
    /* width: 98%; */
    /* right: 10px; */
    align-items: center;
    justify-content: center;
    display: flex;
  }
  .tiny-border-1 {
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
    display: inline;
    /* right: 5px; */
    border-bottom: 2px solid #777;
    margin: 3px;
    width: 30%;
    /* padding: 0px; */
    /* width: 98%; */
    /* right: 10px; */
  }

  .tiny-line-1 {
    position: relative;
    right: 15px;
    top: -5px;
    display: inline;
    border-right: 1px solid #777;
    height: 15px;
  }
  .tiny-line-2 {
    position: relative;
    right: 15px;
    top: -5px;
    display: inline;
    border-right: 1px solid #777;
    height: 5px;
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
    z-index: 5;
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
