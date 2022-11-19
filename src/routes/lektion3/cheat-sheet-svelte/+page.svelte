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
          [["div"], ["b", "b", "A", "b"]],
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

  function cleanTitle(inputTitle, i) {
    let output = inputTitle
      .replace("/", "-")
      .replace(" ", "-")
      .replace(" (", "-")
      .replace(")", "")
      .toLowerCase();
    console.log(output);
    if (inputTitle === "Pseudo Class (Position/Other)") {
      return output + "-" + i;
    } else {
      return output;
    }
  }

  let darkMode = true;

  function toggleDarkMode() {
    darkMode = darkMode ? false : true;
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="../cheat-sheet-svelte.css" />
</svelte:head>

<div class="flex-wrapper {darkMode ? '' : 'light-bg'}">
  <div class="flex-h1  {darkMode ? '' : 'light'}">
    <div>
      <h1>CSS</h1>
    </div>
    <div>
      <h3>{"{"}selectors: cheat-sheet{"}"}</h3>
    </div>
  </div>
  <div class="flex-h4 {darkMode ? '' : 'light'}">
    <div>
      <h4>By Web Dev Simplified, copied(?) by Henrik Berglund</h4>
    </div>
  </div>

  <button on:click={toggleDarkMode}
    >{darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>

  {#each tables as table, y}
    <div class="base-div {darkMode ? '' : 'light-bg'}">
      {#if table.title}
        <h2 class={darkMode ? "" : "light"}>{table.title}</h2>
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
                      <span class="name-{i} {darkMode ? '' : 'light'}">
                        {span}
                      </span>
                    {/each}
                  </div>
                {:else if i === 1}
                  <span class={darkMode ? "" : "light"}>
                    {row}
                  </span>
                  <!-- NOTE HTML -->
                {:else if i === 2}
                  {#each row as span, i}
                    <div class="description-{i} {darkMode ? '' : 'light'}">
                      {span}
                    </div>
                  {/each}
                {:else if i === 3}
                  <div class="nice-div">
                    {#each row as span, r}
                      <!-- <h3>r = {r}, rl = {rl}, y = {y}</h3> -->
                      {#if typeof span === "object"}
                        <div class="flex-row-with-children">
                          {#each span as element, s}
                            {#if element.toUpperCase() === element}
                              <div
                                class={y === 1
                                  ? `flex-column-with-children-${r}`
                                  : `flex-column-with-children-${r}-b`}>
                                <div class="flex-border-wrapper">
                                  <div
                                    class="tiny-line-{r} {darkMode
                                      ? ''
                                      : 'light-border'}" />
                                </div>
                                <div class="hit-{r} {darkMode ? '' : 'light'}">
                                  {element}
                                </div>
                                <div class="flex-border-wrapper">
                                  {#if y === 1}
                                    <div
                                      class="tiny-line-extra-{r} {darkMode
                                        ? ''
                                        : 'light-border'}" />
                                  {:else}
                                    <div
                                      class="tiny-line-extra-{r}-b {darkMode
                                        ? ''
                                        : 'light-border'}" />
                                  {/if}
                                  <div
                                    class="tiny-border-{cleanTitle(
                                      table.title,
                                      rl
                                    )}-{r} {darkMode ? '' : 'light-border'}" />
                                </div>
                              </div>
                            {:else}
                              <div
                                class={y === 1
                                  ? `flex-column-with-children-${r}`
                                  : `flex-column-with-children-${r}-b`}>
                                <div class="flex-border-wrapper">
                                  <div
                                    class="tiny-line-{r} {darkMode
                                      ? ''
                                      : 'light-border'}" />
                                </div>
                                <div
                                  class="not-hit-{r} {darkMode ? '' : 'light'}">
                                  {element}
                                </div>
                                <div class="flex-border-wrapper">
                                  {#if y === 1}
                                    <div
                                      class="tiny-line-extra-{r} {darkMode
                                        ? ''
                                        : 'light-border'}" />
                                  {:else}
                                    <div
                                      class="tiny-line-extra-{r}-b {darkMode
                                        ? ''
                                        : 'light-border'}" />
                                  {/if}
                                  <div
                                    class="tiny-border-{cleanTitle(
                                      table.title,
                                      rl
                                    )}-{r} {darkMode ? '' : 'light-border'}" />
                                </div>
                              </div>
                            {/if}
                          {/each}
                        </div>
                      {:else if span.toUpperCase() === span}
                        <span class="hit {darkMode ? '' : 'light'}">
                          {span}
                        </span>
                      {:else}
                        <span class="not-hit {darkMode ? '' : 'light'}">
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
</div>

<style>
  .flex-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    /* background-color: red; */
  }
  .flex-column {
    /* background-color: green; */
    /* padding: 4px; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    width: 300px;
    margin: 15px;
    /* height: 100px; */
  }

  span {
    display: inline-block;
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

  .flex-row {
    display: flex;
    height: 25px;
  }
  .flex-row-0 {
    /* padding-top: 10px; */
    display: flex;
    height: 50px;
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

  .flex-column-with-children-0 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
  }
  .flex-column-with-children-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
  }
  .flex-column-with-children-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    padding: 0 5px;
    /* align-items: center; */
  }

  .flex-column-with-children-0-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    flex: 1;
    align-items: center;
    width: 33%;
  }
  .flex-column-with-children-1-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    flex: 1;
    align-items: center;
    width: 33%;
  }
  .flex-column-with-children-2-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    padding: 0 5px;
    /* align-items: center; */
  }
  /* only child, bottom rightmost flex-column-with-children */
  div.flex-wrapper.s-cPZEnGL0Hx_5
    > div:nth-child(9)
    > div:nth-child(11)
    > div:nth-child(4)
    > div
    > div:nth-child(2)
    > div:nth-child(3) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    flex: 2;
    align-items: center;
    width: 33%;
    /* background-color: red; */
  }
  .flex-row-with-children {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
    align-items: center;
    /* height: 35px; */
    /* height: 30px; */
    width: 120px;
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
    padding-bottom: 30px;
    font-weight: 200;
  }
  h1 {
    padding: 10px;
    font-size: 3rem;
  }

  h2 {
    padding-left: 8px;
    padding-top: 4px;
    padding-bottom: 0px;
    margin: 5px;
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

  .flex-border-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .tiny-line-0 {
    position: relative;
    top: 30px;
    width: 1px;
    background-color: white;
    /* height: 4px; */
  }
  .tiny-line-1 {
    position: relative;
    /* top: 30px; */
    width: 1px;
    background-color: white;
    height: 4px;
  }
  .tiny-line-2 {
    position: relative;
    width: 1px;
    background-color: white;
    height: 4px;
  }
  .tiny-line-extra-0 {
    position: relative;
    top: 0px;
    background-color: white;
    width: 1px;
    height: 4px;
  }
  .tiny-line-extra-0-b {
    position: relative;
    top: 0px;
    background-color: white;
    width: 1px;
    height: 4px;
  }
  .tiny-line-extra-1 {
    position: relative;
    top: 0px;
    background-color: white;
    width: 1px;
    height: 4px;
  }
  /* div:nth-child(3) > div.tiny-line-extra-1 {
    position: relative;
    top: 0px;
    background-color: white;
    width: 1px;
    height: 0px;
  } */

  /* NOTE combination */
  .tiny-border-combination-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 61px;
    background-color: white;
  }
  .tiny-border-combination-1 {
    display: flex;
    position: relative;
    width: 155%;
    height: 1px;
    background-color: white;
  }
  /* NOTE Pseudo Element */
  .tiny-border-pseudo-element-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 81px;
    background-color: white;
  }
  /* NOTE Pseudo Class (Position/Other) */
  .tiny-border-pseudo-class-position-other-0-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 31px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-1-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 31px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-2-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-3-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-4-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 31px;
    background-color: white;
  }
  div:nth-child(2)
    > div:nth-child(3)
    > div.tiny-border-pseudo-class-position-other-4-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 1px;
    background-color: white;
    /* background-color: red; */
  }

  .tiny-border-pseudo-class-position-other-5-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-6-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-7-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-8-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-9-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 91px;
    background-color: white;
  }
  .tiny-border-pseudo-class-position-other-10-0 {
    position: relative;
    height: 1px;
    display: flex;
    width: 81px;
    background-color: white;
  }

  .hit {
    background-color: hsl(208, 69%, 51%);
    border: 1px solid hsl(206, 71%, 22%);
    /* margin: 0 15px 0 15px; */
    /* width: 20%; */
    margin: 5px;
    /* display: inline-block; */
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    text-transform: lowercase;
    font-weight: 700;
  }

  .not-hit {
    border: 1px solid #aaa;
    color: #ddd;
    /* width: 50%; */
    /* margin: 0 15px 0 15px; */
    margin: 5px;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    font-weight: 700;
    z-index: 5;
  }

  .hit-0 {
    /* border: 1px solid #aaa; */
    background-color: hsl(208, 69%, 51%);
    border: 1px solid hsl(206, 71%, 22%);
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    text-transform: lowercase;
    font-weight: 700;
    /* width: 20px; */
  }

  .not-hit-0 {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #aaa;
    color: #ddd;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    font-weight: 700;
    width: 20px;
    /* flex: 1; */
  }
  .hit-1 {
    background-color: hsl(208, 69%, 51%);
    border: 1px solid hsl(206, 71%, 22%);
    /* margin: 10px; */
    /* height: 20px; */
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    text-transform: lowercase;
    font-weight: 700;
    min-width: 10px;
  }

  .not-hit-1 {
    border: 1px solid #aaa;
    color: #ddd;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    font-weight: 700;
    z-index: 5;
    min-width: 10px;
  }
  .hit-2 {
    background-color: hsl(208, 69%, 51%);
    border: 1px solid hsl(206, 71%, 22%);
    /* border: 1px solid #aaa; */
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    text-transform: lowercase;
    font-weight: 700;
    width: 10px;
  }

  .not-hit-2 {
    border: 1px solid #aaa;
    color: #ddd;
    padding-left: 4px;
    padding-right: 4px;
    border-radius: 4px;
    font-weight: 700;
    z-index: 5;
    width: 10px;
  }

  .subtitle {
    font-size: 1rem;
    color: #aaa;
    font-weight: 800;
  }

  .name-0 {
    font-size: 1.2rem;
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

  .light-bg {
    background-color: hsl(245, 14%, 97%);
  }

  .base-div.light-bg {
    background-color: white;
  }

  .light {
    color: #333;
  }
  h2.light {
    color: #555;
  }
  .description-1.light {
    color: #888;
  }
  .description-2.light {
    color: #888;
  }
  .hit.light {
    color: #eee;
  }
  .hit-1.light {
    color: #eee;
  }
  .hit-2.light {
    color: #eee;
  }
  .not-hit.light {
    color: #444;
    /* color: red; */
  }

  .light-border {
    background-color: #333;
  }

  @media (max-width: 420px) {
    .flex-wrapper {
      display: flex;
      /* width: 100%; */
      flex-wrap: wrap;
      width: 100vh;
    }
    .base-div {
      width: 95%;
    }
  }

  @media (orientation: landscape) {
    .flex-wrapper {
      display: flex;
      /* width: 100%; */
      flex-wrap: wrap;
      width: 210vh;
    }
    .base-div {
      width: 95%;
    }
  }
</style>
