<script>
  export let table;
  export let darkMode;
  export let y;
  export let type;

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
</script>

{#if type === 0}
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
                    <!-- <p>r = {r}, rl = {rl}, y = {y}</p> -->
                    {#if typeof span === "object"}
                      <div class="flex-row-with-children">
                        {#each span as element, s}
                          {#if element.toUpperCase() === element}
                            <div
                              class={y === 1
                                ? `flex-column-with-children-${r}`
                                : y === 5 && rl === 4
                                ? `flex-column-with-children-only-child-${r}`
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
  <!-- SECTION - type 1 -->
{:else if type === 1}
  <div class="base-div-b {darkMode ? '' : 'light-bg'}">
    {#if table.title}
      <h2 class={darkMode ? "" : "light"}>{table.title}</h2>
      {#each table.rows as rows, rl}
        <div class="flex-row-{y}-b">
          {#each rows as row, i}
            <div class="flex-column-b">
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
                    <!-- <p>r = {r}, rl = {rl}, y = {y}</p> -->
                    {#if typeof span === "object"}
                      <div class="flex-row-with-children">
                        {#each span as element, s}
                          {#if element.toUpperCase() === element}
                            <div
                              class={y === 1
                                ? `flex-column-with-children-${r}`
                                : y === 5 && rl === 4
                                ? `flex-column-with-children-only-child-${r}`
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
{/if}

<style>
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
    /* height: 25px; */
  }
  .flex-row-0-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 25px; */
  }
  .flex-column-b {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
    /* height: 25px; */
  }
  .flex-row-0 {
    /* padding-top: 10px; */
    display: flex;
    /* height: 50px; */
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
  .flex-column-with-children-only-child-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: space-around;
    flex: 2;
    align-items: center;
    width: 33%;
    /* background-color: red; */
  }

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
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    background-color: #222222;
    color: #ddd;
    border-radius: 8px;
    padding-left: 20px;
    margin: 10px;
    padding-bottom: 10px;
    /* width: 900px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 90%; */
  }
  .base-div-b {
    background-color: #222222;
    color: #ddd;
    border-radius: 8px;
    padding-left: 20px;
    margin: 10px;
    padding-bottom: 10px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 90%;
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
    /* width: 155%; */
    width: 31px;
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
    text-align: center;
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
    text-align: center;
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
    text-align: center;
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
    text-align: center;
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
    /* width: 10px; */
    text-align: center;
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
    text-align: center;
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
    text-align: center;
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
    text-align: center;
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

  /* @media (max-width: 420px) {
    .flex-wrapper-b {
      display: flex;
      flex-wrap: wrap;
      width: 90vh;
    }
    .base-div-b {
      width: 90%;
    }
  }

  @media (max-width: 1000px) and (orientation: landscape) {
    .flex-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 210vh;
    }
    .base-div {
      width: 95%;
    }
  } */
</style>
