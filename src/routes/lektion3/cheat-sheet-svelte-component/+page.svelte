<script>
  import ArrayViewer from "./ArrayViewer.svelte";
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

  let darkMode = true;
  let type = 0;

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
  <!-- <link rel="stylesheet" href="../app.css" /> -->
</svelte:head>

{#if type === 0}
  <div class="flex-wrapper {darkMode ? '' : 'light-bg'}">
    <div class="flex-h1  {darkMode ? '' : 'light light-bg'}">
      <h1>CSS</h1>
      <div>
        <h3>{"{"}selectors: cheat-sheet{"}"}</h3>
      </div>
    </div>
    <div class="flex-h4 {darkMode ? '' : 'light light-bg'}">
      <h4>By Web Dev Simplified, copied(?) by Henrik Berglund</h4>
    </div>

    <div class="flex-button">
      <button on:click={toggleDarkMode}
        >{darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
      <button on:click={() => (type = 0)}>Type 0</button>
      <button on:click={() => (type = 1)}>Type 1</button>
    </div>

    {#each tables as table, y}
      <ArrayViewer {table} {darkMode} {y} {type} />
    {/each}
  </div>
{:else if type === 1}
  <div class="flex-wrapper-b {darkMode ? '' : 'light-bg'}">
    <div class="flex-h1-b  {darkMode ? '' : 'light light-bg'}">
      <h1>CSS</h1>
      <div>
        <h3>{"{"}selectors: cheat-sheet{"}"}</h3>
      </div>
    </div>
    <div class="flex-h4-b {darkMode ? '' : 'light light-bg'}">
      <h4>By Web Dev Simplified</h4>
      <h3>copied(?) by Henrik Berglund</h3>
    </div>

    <div class="flex-button-b">
      <button on:click={toggleDarkMode}
        >{darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}</button>
      <button on:click={() => (type = 0)}>Type 0</button>
      <button on:click={() => (type = 1)}>Type 1</button>
    </div>

    {#each tables as table, y}
      <ArrayViewer {table} {darkMode} {y} {type} />
    {/each}
  </div>
{/if}

<style>
  .flex-wrapper {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    transition: 0.3s;
    width: 90%;
    /* background-color: red; */
  }
  .flex-wrapper-b {
    display: flex;
    flex-wrap: wrap;
    /* width: 90vh; */
    flex: 1;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;
    /* padding-left: 50%; */
    /* align-items: center; */
  }
  .light-bg {
    background-color: hsl(245, 14%, 97%);
  }
  :global(#svelte).light-bg {
    background-color: white;
  }

  .light {
    color: #333;
  }

  .flex-h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 900px;
    height: 100px;
  }
  .flex-h1-b {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 100px;
  }
  .flex-h4-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 5px;
    padding-bottom: 60px;
    font-weight: 200;
  }
  .flex-button {
    display: flex;
    width: 500px;
    justify-content: center;
    gap: 30px;
  }
  .flex-button-b {
    display: flex;
    width: 90%;
    justify-content: center;
    gap: 30px;
  }
  button {
  }
</style>
