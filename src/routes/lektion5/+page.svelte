<script>
</script>

<div class="margin">
  <div class="main-div">
    <div class="header-div">
      <div class="blue-rows">
        <div class="blue-0">
          <div class="magenta" />
          <div class="magenta" />
          <div class="magenta" />
        </div>
        <div class="blue-1">
          <div class="magenta" />
        </div>
        <div class="blue-2">
          <div class="magenta" />
          <div class="magenta" />
        </div>
      </div>
    </div>
    <div class="gray-row">
      <div class="gray-div-0">
        <div class="red-container">
          <div class="red-box">
            <div class="lightblue-container">
              <div class="lightblue-row-container">
                <div class="lightblue" />
                <div class="teal" />
              </div>
              <div class="lightblue-row-container">
                <div class="lightblue" />
                <div class="teal" />
              </div>
              <div class="lightblue-row-container">
                <div class="lightblue" />
                <div class="teal" />
              </div>
              <div class="lightblue-row-container">
                <div class="lightblue" />
                <div class="teal" />
              </div>
              <div class="lightblue-row-container">
                <div class="lightblue" />
                <div class="teal" />
              </div>
              <div class="empty" />
              <div class="blue-row-container" />
              <div class="blue-row-container" />
              <div class="blue-row-container" />
              <div class="blue-row-container" />
            </div>
          </div>
          <div class="red-column">
            <div class="red-box">
              <div class="yellow-container">
                <div class="yellow-0">
                  <div class="yellow" />
                </div>
                <div class="yellow-1">
                  <div class="yellow" />
                </div>
              </div>
            </div>
            <div class="red-box">
              <div class="centered">
                <div class="centered-box" />
                <div class="notcentered-box" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="gray-div-1">
        <div class="green-column">
          <div class="green-row-0">
            <div class="green-0" />
            <div class="green-0" />
          </div>
          <div class="green-row-1">
            <div class="green-1" />
            <div class="green-1" />
            <div class="green-1" />
          </div>
          <div class="green-row-0">
            <div class="green-0" />
            <div class="green-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .green-0 {
    background-color: darkgreen;
    height: 70px;
    width: 250px;
    margin: 10px;
  }
  .green-1 {
    background-color: darkgreen;
    height: 230px;
    width: 70px;
    margin: 10px;
  }
  .green-row-1 {
    display: flex;
    flex: 1;
    flex-direction: row;
    /* height: 100px; */
    /* width: 100%; */
  }
  .green-row-0 {
    display: flex;
    flex-direction: column;
    flex: 1;
    /* height: 100px; */
    /* width: 100px; */
  }
  .green-column {
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 500px;
    padding: 30px;
    /* padding: 10px; */
    /* justify-content: space-around; */
  }
  .notcentered-box {
    background-color: darkblue;
    position: absolute;
    height: 130px;
    width: 130px;
    top: 70%;
    left: 47%;
  }
  .centered-box {
    background-color: lightblue;
    height: 130px;
    width: 130px;
  }
  .centered {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .empty {
    height: 100px;
  }
  .yellow-0 {
    display: flex;
    flex-direction: row;
    /* background-color: yellow; */
    /* width: 100px; */
    flex: 1;
    /* height: 100px; */
    justify-content: flex-start;
    /* align-items: stretch; */
    /* align-items: flex-start; */
  }
  .yellow-1 {
    display: flex;
    flex-direction: row;
    flex: 1;
    /* background-color: yellow; */
    /* width: 300px; */
    /* height: 100px; */
    justify-content: flex-end;
    /* align-items: flex-end; */
  }
  .yellow {
    background-color: yellow;
    /* flex: 0.2; */
    width: 130px;
    height: 130px;
    /* padding: 10px; */
    /* justify-content: flex-end; */
  }
  .yellow-container {
    display: flex;
    flex-direction: column;
    /* flex: 1; */
    /* justify-content: space-between; */
    /* height: 400px; */
    /* width: 100%; */
    /* padding: 20px; */
  }
  .teal {
    background-color: cyan;
    width: 25%;
    margin: 10px;
    /* height: 100px; */
  }
  .lightblue {
    background-color: rgb(173, 184, 230);
    width: 100%;
    height: 90px;
    margin: 10px;
    /* width: 100px; */
  }
  .lightblue-row-container {
    display: flex;
    flex-direction: row;
    /* justify-content: flex-start; */
    /* padding: 10px; */
    /* margin: 10px; */
    /* width: 100px; */
    /* height: 100px; */
  }
  .lightblue-container {
    /* padding: 10px; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* justify-content: center; */
    /* width: 100px; */
    /* height: 100%; */
    /* height: 100px; */
    /* flex: 1; */
  }
  .red-box {
    flex: 1;
    background-color: red;
    /* width: 100%; */
    /* height: 50%; */
    padding: 20px;
    margin: 20px;
    /* justify-content: space-between; */
    /* justify-content: center; */
  }
  .red-column {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
  .red-container {
    display: flex;
    flex-direction: row;
    /* width: 100px; */
  }
  .magenta {
    /* padding: 10px; */
    margin: 5px;
    width: 40px;
    height: 40px;
    background-color: magenta;
  }
  .blue-rows {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* padding-top: 30px; */
    /* padding: 10px; */
    /* margin: 10px; */
    /* width: 200px; */
    height: 100px;
  }
  .blue-0 {
    display: flex;
    width: 15%;
    /* padding: 20px; */
    justify-content: space-between;
    /* margin: 20px; */
    background-color: blue;
  }
  .blue-1 {
    display: flex;
    width: 15%;
    /* padding: 20px; */
    justify-content: center;
    /* margin: 20px; */
    background-color: blue;
  }
  .blue-2 {
    display: flex;
    width: 15%;
    /* padding: 20px; */
    justify-content: space-around;
    /* margin: 20px; */
    background-color: blue;
  }
  .margin {
    margin: 0px;
  }
  .main-div {
    display: flex;
    flex-direction: column;
    /* width: 1400px; */
    /* height: 200px; */
  }
  .header-div {
    margin: 20px;
    display: flex;
    flex-direction: column;
    background-color: gray;
    /* width: 500px; */
    height: 100px;
  }
  .gray-div-0 {
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: gray;
    /* NOTE change later */
    /* width: 100%; */
    flex: 1;
    height: 700px;
    justify-content: center;
  }
  .gray-div-1 {
    margin: 20px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    background-color: gray;
    /* width: 350px; */
    flex: 0.5;
    height: 700px;
    /* justify-content: center; */
    align-items: center;
  }
  .gray-row {
    display: flex;
    flex-direction: row;
  }
</style>
