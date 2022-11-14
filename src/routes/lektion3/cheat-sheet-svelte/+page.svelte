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
          ["Id", "Selector"],
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
          [["div"], ["A", "b"], ["A", "c", "A", "d"]],
        ],
        [
          ["Direct Child", "Selector"],
          "div > a",
          [
            "Select elements that are direct children of the first element",
            "Select anchors that are direct children of a div",
          ],
          [["div"], ["A", "b"], ["a", "c", "a", "d"]],
        ],
        [
          ["General Sibling", "Selector"],
          "div ~ a",
          [
            "Select elements that are siblings of the first element and come after the first element",
            "Selects all anchors that are siblings of a div and come after the div",
          ],
          ["a", "div", "A", "A"],
        ],
        [
          ["Adjacent Sibling", "Selector"],
          "div + a",
          [
            "Select elements that are siblings of the first element and come directly after the first element",
            "Selects all anchors that are siblings of a div and come directly after the div",
          ],
          ["a", "div", "A", "a"],
        ],
        [
          ["Or", "Selector"],
          "div, a",
          [
            "Select elements that match any selector in the list",
            "Selects all anchors and all divs",
          ],
          ["A", "DIV", "A", "b"],
        ],
        [
          ["And", "Selector"],
          "div.c",
          [
            "Select elements that match all the selector combinations",
            "Selects all divs with the class c",
          ],
          [".a", "DIV.C", ".c", "div"],
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
          [["div"], ["BEFORE", "c", "after"]],
        ],
        [
          ["After", "Selector"],
          "div::after",
          [
            "Creates an empty element directly after the children of selected element",
          ],
          [["div"], ["before", "c", "AFTER"]],
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
          ["Focus", "Selector"],
          "button:focus",
          [
            "Select elements that are focused.",
            "Select buttons that are being focused *Focus is set by either tabbing to an element or clicking an element such as a button or anchor tag",
          ],
        ],
        [
          ["Required", "Selector"],
          "input:required",
          [
            "Select inputs that are required",
            "Select inputs with the required attribute",
          ],
        ],
        [
          ["Checked", "Selector"],
          "input:checked",
          [
            "Select checkboxes/radio buttons that are checked",
            "Select inputs that are checked",
          ],
        ],
        [
          ["Disabled", "Selector"],
          "input:disabled",
          [
            "Select inputs that are disabled",
            "Select inputs with the disabled attribute",
          ],
        ],
      ],
    },
    {
      title: "Pseudo Class (Position/Other)",
      subtitle: ["Name", "CSS", "Description", "Results"],
      rows: [
        [
          ["First Child", "Selector"],
          "a:first-child",
          [
            "Select elements that are the first child inside a container",
            "Select anchors that are the first child",
          ],
          [
            ["div", "div"],
            ["A", "b", "b", "a"],
          ],
        ],
        [
          ["Last Child", "Selector"],
          "a:last-child",
          [
            "Select elements that are the last child inside a container",
            "Select anchors that are the last child",
          ],
          [
            ["div", "div"],
            ["a", "b", "b", "A"],
          ],
        ],
        [
          ["Nth Child", "Selector"],
          "a:nth-child(2n)",
          [
            "Select elements that are the nth child inside a container based on the formula",
            "Select anchors that are even numbered children",
          ],
          [["div"], ["a", "B", "b", "A"]],
        ],
        [
          ["Nth Last Child ", "Selector"],
          "a:nth-last-child(3)",
          [
            "Select elements that are the nth child inside a container based on the formula counting from the end",
            "Select anchors that are the third to last child",
          ],
          [["div"], ["a", "A", "b", "A"]],
        ],
        [
          ["Only Child", "Selector"],
          "a:only-child",
          [
            "Select elements that are the only child inside a container",
            "Select anchors that are the only child",
          ],
          [
            ["div", "div"],
            ["a", "b", "A"],
          ],
        ],
        [
          ["First Of Type Selector", "Selector"],
          "a:first-of-type",
          [
            "Select elements that are the first of a type inside a container",
            "Select the first anchor in a container",
          ],
          [["div"], ["b", "A", "a", "b"]],
        ],
        [
          ["Last Of Type", "Selector"],
          "a:last-of-type",
          [
            "Select elements that are the last of a type inside a container",
            "Select the last anchor in a container",
          ],
          [["div"], ["b", "a", "A", "b"]],
        ],
        [
          ["Nth Of Type", "Selector"],
          "a:nth-of-type(2n)",
          [
            "Select elements that are the nth of a type inside a container based on the formula",
            "Select every second anchor",
          ],
          [["div"], ["b", "a", "A", "b"]],
        ],
        [
          ["Nth Last Of Type", "Selector"],
          "a:nth-last-of-type(2)",
          [
            "Select elements that are the nth of a type inside a container based on the formula counting from the end",
            "Select the second to last anchor",
          ],
          [["div"], ["b", "A", "a", "b"]],
        ],
        [
          ["Only Of Type", "Selector"],
          "a:only-of-type",
          [
            "Select elements that are the only of a type inside a container",
            "Select anchors that are the only anchor in a container",
          ],
          [["div"], ["a", "B", "b", "A"]],
        ],
        [
          ["Not", "Selector"],
          "a:not(.c)",
          [
            "Select all elements that do not match the selector inside the not selector",
            "Select all anchor tags that do not have the c class",
          ],
          ["b", "a.c", "A", "A.D"],
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
      <div class="flex-row">
        {#each table.subtitle as subtitle}
          <div class="flex-column">
            <div class="subtitle">
              {subtitle}
            </div>
          </div>
        {/each}
      </div>
      {#each table.rows as rows, rl}
        <div class="flex-row-{y}">
          {#each rows as row, i}
            <div class="flex-column">
              {#if i === 0}
                <div class="flex-child">
                  {#each row as span, i}
                    <span class="name-{i}">
                      {span}
                    </span>
                  {/each}
                </div>
              {:else if i === 1}
                {row}
                <!-- NOTE HTML -->
              {:else if i === 2}
                {#each row as span, i}
                  <div class="description-{i}">
                    {span}
                  </div>
                {/each}
              {:else if i === 3}
                <div class="nice-div">
                  {#each row as span, r}
                    {#if typeof span === "object"}
                      <div class="flex-row-with-children">
                        {#each span as element, s}
                          {#if element.toUpperCase() === element}
                            <!-- TODO test tiny flexboxes with certain height and width instead -->
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
    {/if}
  </div>
{/each}

<style>
  .flex-column {
    /* background-color: green; */
    padding: 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    width: 300px;
    /* height: 30px; */
  }

  span {
    /* display: inline-block; */
    vertical-align: middle;
    text-align: center;
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
    display: flex;
  }
  .flex-row-1 {
    display: flex;
    align-items: center;
  }
  .flex-row-2 {
    display: flex;
    align-items: center;
  }
  .flex-row-3 {
    display: flex;
    align-items: center;
  }
  .flex-row-4 {
    display: flex;
    align-items: center;
  }
  .flex-row-5 {
    display: flex;
    align-items: center;
  }
  .flex-row-6 {
    display: flex;
    align-items: center;
  }

  .flex-row-with-children {
    display: flex;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
  }

  .flex-row:nth-of-type(1) {
    display: flex;
    text-align: center;
  }

  .centered-div {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
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
    color: #ddd;
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
    border-bottom: 1px solid #777;
    padding: 0px;
    width: 98%;
  }
  .tiny-border-0 {
    position: relative;
    border-bottom: 2px solid #eee;
    width: 60%;
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
    border-bottom: 2px solid #eee;
    margin: 3px;
    width: 30%;
  }

  .tiny-line-1 {
    position: relative;
    right: 15px;
    top: -5px;
    display: inline;
    border-right: 1px solid #eee;
    height: 15px;
  }
  .tiny-line-2 {
    position: relative;
    right: 15px;
    top: -5px;
    display: inline;
    border-right: 1px solid #eee;
    height: 5px;
  }

  .hit {
    background-color: hsl(208, 69%, 51%);
    margin: 5px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    text-transform: lowercase;
    font-weight: 700;
  }

  .not-hit {
    border: 1px solid #aaa;
    color: #ddd;
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
