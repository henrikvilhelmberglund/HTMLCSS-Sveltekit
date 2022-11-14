<script>
</script>

<h1>Media queries</h1>

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
    height: 50px;
    width: 50px;
    background-color: lightblue;
  }
  article {
    height: 50px;
    background-color: pink;
    margin: 0 5px;
    width: 80px;
  }
  .main-content {
    display: flex;
    flex-direction: column;
    flex-direction: row;
    flex-wrap: wrap;
  }
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80px;
    background: darkgreen;
  }
  main {
    display: flex;
    min-height: 140px;
    max-width: 70%;
    /* height: 140px; */
    /* width: 50%; */
    flex-basis: 200px;
    background-color: darkslateblue;
    padding: 5px;
    flex-grow: 1;
    flex-wrap: wrap;
  }
  aside {
    min-height: 140px;
    max-width: 30%;
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
  @media (max-width: 500px) {
    /* 
    * {
      background-color: red;
    }
    */
    main {
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }
    aside {
      max-width: 100%;
    }
    article {
      margin: 5px 0;
    }
    .main-content {
      flex-direction: column;
    }
  }

  @media (max-width: 220px) {
    /* 
    * {
      background-color: red;
    }
    */
    header {
      flex-direction: column;
      height: 120px;
    }
    .header-link {
      width: 80%;
      margin: 5px 0;
    }
  }
</style>
