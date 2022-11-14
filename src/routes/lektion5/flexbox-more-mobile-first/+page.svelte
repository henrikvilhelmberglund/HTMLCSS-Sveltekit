<script>
</script>

<h1>Media queries (mobile first)</h1>

<div class="wrapper">
  <header>
    <div class="header-link" />
    <div class="header-link" />
    <div class="header-link" />
  </header>
  <div class="main-content">
    <main>
      <article />
      <article />
      <article />
    </main>
    <aside>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore vel
      veritatis velit debitis aliquid! Eum similique ullam alias error corporis.
    </aside>
  </div>
  <footer />
</div>

<style>
  .header-link {
    height: 80px;
    width: 80%;
    margin: 5px 0;
    background-color: lightblue;
  }
  article {
    height: 50px;
    background-color: pink;
    margin: 5px 0;
    width: 80px;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
  }
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 120px;
    flex-direction: column;
    background: darkgreen;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 100%;

    /* height: 140px; */
    /* width: 50%; */
    background-color: darkslateblue;
  }
  aside {
    min-height: 140px;
    max-width: 100%;
    /* height: 140px; */
    /* width: 50%; */
    background-color: firebrick;
    padding: 5px;
    /* flex-basis: 90px; */
    flex-grow: 1;
  }
  aside p {
    display: inline;
  }
  footer {
    height: 80px;
    background-color: goldenrod;
  }

  /* specialregler för mobil under */
  @media (min-width: 500px) {
    /* 
    * {
      background-color: red;
    }
    */
    main {
      align-items: flex-start;
      min-height: 140px;
      max-width: 70%;
      flex-basis: 200px;
      padding: 5px;
      flex-grow: 1;
      flex-wrap: wrap;
      flex-direction: row;
    }
    aside {
      max-width: 30%;
    }
    article {
      margin: 0 5px;
    }
    .main-content {
      flex-direction: column;
      flex-direction: row;
    }
  }

  @media (min-width: 220px) {
    /* 
    * {
      background-color: red;
    }
    */
    header {
      justify-content: space-around;
      align-items: center;
      height: 80px;
      flex-direction: row;
    }
    .header-link {
      height: 50px;
      width: 50px;
    }
  }
</style>
