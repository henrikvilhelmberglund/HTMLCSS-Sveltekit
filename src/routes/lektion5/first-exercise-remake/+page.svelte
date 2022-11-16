<script>
</script>

<svelte:head>
  <link rel="stylesheet" href="../app.css" />
</svelte:head>

<div class="flex-main">
  <div class="flex-blue">
    <div class="flex-other-blue-0">
      <div class="magenta-0" />
      <div class="magenta-0" />
      <div class="magenta-0" />
    </div>
    <div class="flex-other-blue-1">
      <div class="magenta-1" />
    </div>
    <div class="flex-other-blue-2">
      <div class="magenta-2" />
      <div class="magenta-2" />
    </div>
  </div>
  <div class="flex-row">
    <div class="gray-big-1">
      <div class="flex-red-row">
        <div class="red-0">
          <div class="flex-column">
            <div class="flex-blue-row">
              <div class="blue-square" />
              <div class="cyan-square" />
            </div>
            <div class="flex-blue-row">
              <div class="blue-square" />
              <div class="cyan-square" />
            </div>
            <div class="flex-blue-row">
              <div class="blue-square" />
              <div class="cyan-square" />
            </div>
            <div class="flex-blue-row">
              <div class="blue-square" />
              <div class="cyan-square" />
            </div>
            <div class="flex-blue-row">
              <div class="blue-square" />
              <div class="cyan-square" />
            </div>
            <div class="space-taker" />
          </div>
        </div>
        <div class="flex-red">
          <div class="red-1">
            <div class="flex-yellow-column">
              <div class="yellow-0" />
              <div class="yellow-1" />
            </div>
          </div>
          <div class="red-2">
            <div class="flex-lightgray">
              <div class="lightgray">
                <div class="darkgray" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gray-big-2">
      <div class="flex-green-column">
        <div class="green" />
        <div class="green" />
      </div>
      <div class="flex-green-row">
        <div class="green-row" />
        <div class="green-row" />
        <div class="green-row" />
      </div>
      <div class="flex-green-column">
        <div class="green" />
        <div class="green" />
      </div>
    </div>
  </div>
</div>

<style>
  .lightgray {
    background-color: lightgray;
    /* flex: 1; */
    height: 110px;
    width: 110px;
    margin: auto;
  }
  .darkgray {
    background-color: darkblue;
    /* flex: 1; */
    position: absolute;
    position: relative;
    height: 110px;
    width: 110px;
    top: 50px;
    left: 50px;
    margin: auto;
  }
  .flex-lightgray {
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    height: 100%;
  }
  .yellow-0 {
    /* flex: 1; */
    background-color: yellow;
    align-self: flex-start;
    /* height: 100px; */
    width: 110px;
    height: 110px;
    margin: 30px 30px 0px 30px;
  }
  .yellow-1 {
    /* flex: 1; */
    background-color: yellow;
    align-self: flex-end;
    width: 110px;
    height: 110px;
    margin: 30px 30px 30px 30px;
  }
  .flex-yellow-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    /* justify-content: space-around; */
    width: 100%;
    height: 100%;
  }
  .space-taker {
    margin: 30px 0;
  }
  .blue-square {
    flex: 1;
    background-color: lightblue;
    margin: 22px;
  }
  .cyan-square {
    flex: 0.25;
    background-color: cyan;
    margin: 22px;
    height: auto;
  }
  .flex-blue-row {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
  }
  .flex-column {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
  .red-0 {
    flex: 1;
    background-color: red;
    margin: 30px 10px 30px 30px;
  }
  .red-1 {
    flex: 0.5;
    background-color: red;
    margin: 30px 40px 20px 40px;
  }
  .red-2 {
    flex: 0.5;
    background-color: red;
    margin: 10px 40px 30px 40px;
  }
  .flex-red {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    /* padding: 20px; */
    /* margin: 20px; */
  }
  .flex-red-row {
    display: flex;
    flex: 1;
    width: 100%;
    height: 100%;
    /* padding: 20px; */
    /* margin: 10px; */
  }
  .magenta-0 {
    flex: 0.22;
    height: 69%;
    /* height: auto; */
    background-color: magenta;
    /* margin: 15px 10px 15px 10px; */
  }
  .magenta-1 {
    flex: 0.22;
    height: 69%;
    /* height: auto; */
    background-color: magenta;
  }
  .magenta-2 {
    flex: 0.22;
    height: 69%;
    /* height: auto; */
    background-color: magenta;
  }

  .flex-other-blue-0 {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    /* width: 50%; */
    height: 50%;
    /* margin: 10px; */
    margin: 0 9%;
    padding: 0 10px 0 14px;
    background-color: #1f61e1;
  }
  .flex-other-blue-1 {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
    height: 50%;
    /* margin: 10px; */
    margin: 0 3%;
    padding: 0 10px 0 14px;
    background-color: #1f61e1;
  }
  .flex-other-blue-2 {
    display: flex;
    flex: 1;
    justify-content: space-around;
    align-items: center;
    height: 50%;
    /* width: 50%; */
    /* margin: 10px; */
    /* margin: 0 124px 0 32px; */
    margin: 0 9%;
    padding: 0 5px 0 5px;
    background-color: #1f61e1;
  }
  .flex-main {
    display: flex;
    flex-direction: column;
    height: 90vh;
    width: 75vw;
    padding: 35px 0px 0px 15px;
  }
  .flex-row {
    display: flex;
    flex: 1;
    flex-direction: row;
  }
  .flex-blue {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    /* padding: 0 8.62%; */
    flex: 0.21;
    background-color: lightgray;
    min-height: 150px;
  }
  .gray-big-1 {
    margin: 20px 30px 0px 10px;
    flex: 1;
    background-color: lightgray;
  }
  .gray-big-2 {
    margin: 20px 10px 0px 30px;
    padding: 0 50px;
    flex: 0.3;
    background-color: lightgray;
    display: flex;
    flex-direction: column;
  }
  .green {
    background-color: darkgreen;
    flex: 1;
    margin: 10px;
  }
  .green-row {
    background-color: darkgreen;
    flex: 1;
    margin: 10px;
  }
  .flex-green-row {
    display: flex;
    flex: 2;
    height: 100%;
    width: 100%;
    /* padding: 20px 0px; */
  }
  .flex-green-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  /* :global(#svelte) {
    margin: 0;
    display: flex;
    flex-direction: column;
    place-items: center;
    min-width: 320px;
    min-height: 100vh;
  } */
</style>
