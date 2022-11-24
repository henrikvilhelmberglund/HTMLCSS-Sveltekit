<script>
  let name = "";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer" />
</svelte:head>

<div class="flexbox-wrapper">
  <main id="main">
    <div class="flexbox-parent">
      <h1>Inloggning</h1>
      {#if name}
        <h3>Hej {name}!</h3>
      {/if}
      <div class="flexbox-row">
        <div class="div-login">
          <input
            type="text"
            class="input-field-0"
            placeholder="     Användarnamn"
            bind:value={name} />
          <input
            type="text"
            class="input-field-1"
            placeholder="     Lösenord" />
          <div class="flex-password-row">
            <input type="checkbox" name="remember-me" id="" />
            <label for="remember-me" class="label">Kom ihåg mig</label>
            <a href="http://" class="password">Jag har glömt mitt lösenord</a>
          </div>
          <button class="log-in-btn">Logga in</button>
        </div>
        <h2>eller</h2>
        <div class="div-google">
          <a href="" class="google-log-in-btn"> Logga in med Google-konto </a>
          <a href="" class="facebook-log-in-btn"> Logga in med Facebook </a>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </main>
  <footer>
    <p>Serve inc Fake AB</p>
    <p>08-99 999 35 71</p>
    <p>Inteenriktiggata 99, 13 337, Härstorp</p>
  </footer>
</div>

<style>
  .flexbox-wrapper {
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    /* justify-content: center; */
    /* justify-content: space-between; */
    height: 93vh;
    /* TODO */
  }
  p {
    padding: 0px;
    padding-left: 30px;
    margin: 0px;
    color: white;
    font-weight: 200;
  }
  .label {
    /* flex: 1; */
    font-size: 0.7rem;
    font-weight: 200;
  }
  .password {
    /* flex: 1; */
    display: flex;
    width: 200px;
    justify-content: flex-end;
    /* align-self: flex-end; */
    font-size: 0.7rem;
    text-decoration: none;
    font-weight: 200;
  }
  .google-log-in-btn {
    width: 100%;
    line-height: 25px;
    background: white;
    color: #222;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 4px;
    padding: 4px;
    font-weight: 600;
    min-width: 200px;
    margin: 5px;
    text-align: center;
  }

  .google-log-in-btn:hover {
    background: #ccc;
    cursor: pointer;
  }
  .facebook-log-in-btn {
    text-align: center;
    width: 100%;
    line-height: 25px;
    min-width: 200px;
    background: #4988e7;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 4px;
    padding: 4px;
    font-weight: 600;
    margin: 5px;
  }
  .facebook-log-in-btn:hover {
    background: hsl(216, 77%, 70%);
    cursor: pointer;
  }
  .div-google {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* display: block; */
    width: 250px;
    min-width: 250px;
    /* width: 200px; */
    /* margin: auto; */
    /* flex: 1; */
  }

  .input-field-0 {
    /* display: flex; */
    width: 100%;
    height: 30px;
    border: 0px solid black;
    border-radius: 4px;
    padding-left: 10px;
    margin: 6px;
    min-width: 0;
  }
  .input-field-0::placeholder {
    padding-left: 2px;
    color: #bbb;
    font-family: "Inter", "FontAwesome";
    font-family: "Raleway", "FontAwesome";
    font-size: 0.9rem;
  }
  .input-field-1 {
    width: 100%;
    height: 30px;
    border: 0px solid black;
    border-radius: 4px;
    padding-left: 10px;
    margin: 6px;
  }
  .input-field-1::placeholder {
    padding-left: 2px;
    color: #bbb;
    font-family: "Inter", "FontAwesome";
    font-family: "Raleway", "FontAwesome";
    font-size: 0.9rem;
  }

  .log-in-btn {
    width: 100%;
    /* max-width: 100%; */
    height: 35px;
    background: #222;
    color: white;
    font-size: 1rem;
    border: none;
    font-weight: 600;
    border-radius: 4px;
    margin: 6px;
    padding-left: 10px;
    /* padding: 0; */
    /* display: block; */
  }
  .log-in-btn:hover {
    background: #333;
    cursor: pointer;
  }
  .log-in-btn:active {
    background: #333;
    box-shadow: 
    /* inset -1px -1px 1px rgba(255, 255, 255, 0.6), */ inset
      1px 2px 5px rgba(0, 0, 0, 0.6);
    /* cursor: pointer; */
  }
  a {
    color: white;
  }
  .flex-password-row {
    display: flex;
    /* justify-content: space-around; */
    /* width: 100px; */
  }
  .div-login {
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    /* width: 33%; */
    color: white;
    /* width: 270px; */
    width: 270px;
    min-width: 270px;
  }

  .flexbox-row {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 60%;
  }
  .flexbox-parent {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 100%;
  }
  #main {
    height: 86vh;
  }
  * {
    font-family: "Inter", sans-serif;
    font-family: "Raleway", sans-serif;
    /* font-family: sans-serif; */
  }
  h1 {
    color: white;
    padding: 30px;
    padding-top: 100px;
  }
  h2 {
    display: flex;
    width: 20%;
    justify-content: center;
    font-size: 1.1rem;
    /* font-variation-settings: "wght" 100; */
    font-weight: 200;
    color: white;
  }
  main {
    /* height: 100vh; */
    /* width: 100%; */
    background: linear-gradient(black, #fd3a22);
  }
  footer {
    display: flex;
    flex: 1;
    flex-direction: column;
    /* justify-self: flex-end; */
    background-color: #504c4c;
    /* height: 70px; */
    width: 100%;
    padding: 5px 0;
    font-size: 0.9rem;
  }
  h3 {
    font-size: 1.5rem;
    /* font-variation-settings: "wght" 100; */
    font-weight: 400;
    color: white;
    margin: 0;
  }

  @media (max-width: 412px) {
    .flexbox-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90%;
      /* TODO */
    }
    /* @media (max-width: 500px) { */

    p {
      padding: 0px;
      padding-left: 30px;
      margin: 0px;
      color: white;
      font-weight: 200;
    }
    .label {
      /* flex: 1; */
      font-size: 0.6rem;
      font-weight: 400;
      color: black;
      margin: 24px 0;
    }
    .password {
      /* flex: 1; */
      font-size: 0.6rem;
      text-decoration: none;
      font-weight: 400;
      color: black;
      margin: 24px 0;
    }
    .google-log-in-btn {
      width: 100%;
      line-height: 45px;
      background: white;
      color: #222;
      font-size: 1.1rem;
      text-decoration: none;
      border-radius: 4px;
      padding: 0px;
      font-weight: 800;
      min-width: 270px;
      margin: 6px 0;
    }

    .google-log-in-btn:hover {
      background: #ccc;
      cursor: pointer;
    }
    .facebook-log-in-btn {
      min-width: 270px;
      width: 100%;
      line-height: 45px;
      background: #4988e7;
      color: white;
      font-size: 1.1rem;
      text-decoration: none;
      border-radius: 4px;
      padding: 0px;
      font-weight: 600;
      margin: 6px 0;
    }
    .facebook-log-in-btn:hover {
      background: hsl(216, 77%, 70%);
      cursor: pointer;
    }
    .div-google {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* display: block; */
      /* width: 300px; */
      width: 100%;
      flex: 0.1;
    }
    .input-field-0 {
      width: 100%;
      height: 30px;
      border: 0px solid black;
      border-radius: 4px;
      padding-left: 10px;
      margin: 6px 0;
    }
    .input-field-0::placeholder {
      padding-left: 2px;
      color: #bbb;
      font-family: "Inter", "FontAwesome";
      font-family: "Raleway", "FontAwesome";
      font-size: 0.9rem;
    }
    .input-field-1 {
      width: 100%;
      height: 30px;
      border: 0px solid black;
      border-radius: 4px;
      padding-left: 10px;
      margin: 6px 0;
    }
    .input-field-1::placeholder {
      padding-left: 2px;
      color: #bbb;
      font-family: "Inter", "FontAwesome";
      font-family: "Raleway", "FontAwesome";
      font-size: 0.9rem;
    }

    .log-in-btn {
      width: 100%;
      /* max-width: 100%; */
      height: 55px;
      background: #ff3a22;
      color: white;
      font-size: 1rem;
      border: none;
      font-weight: 800;
      border-radius: 4px;
      padding: 0;
      margin: 6px 0;
      /* display: block; */
    }
    .log-in-btn:hover {
      background: #333;
      cursor: pointer;
    }
    .log-in-btn:active {
      background: #333;
      box-shadow: 
    /* inset -1px -1px 1px rgba(255, 255, 255, 0.6), */ inset
        1px 2px 5px rgba(0, 0, 0, 0.6);
      /* cursor: pointer; */
    }
    a {
      color: white;
    }
    .div-login {
      display: flex;
      flex: 0.1;
      flex-direction: column;
      /* width: 33%; */
      color: white;
      /* width: 270px; */
      width: 100%;
    }
    * {
      box-sizing: border-box;
    }
    .flexbox-row {
      display: flex;
      /* flex: 1; */
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      /* padding: 10px; */
      width: 75%;
    }
    .flexbox-parent {
      display: flex;
      /* flex: 1; */
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100%;
    }
    #main {
      /* height: vh; */
      /* width: 10vh; */
      background: #e7e7e7;
      height: 80vh;
    }
    * {
      font-family: "Inter", sans-serif;
      font-family: "Raleway", sans-serif;
      /* font-family: sans-serif; */
    }
    h1 {
      color: black;
      padding: 30px;
      padding-top: 100px;
      padding-bottom: 0px;
      font-size: 1.5rem;
    }
    h2 {
      /* flex: 1; */
      font-size: 1.5rem;
      /* font-variation-settings: "wght" 100; */
      font-weight: 400;
      color: black;
      margin: 0;
    }
    h3 {
      font-size: 1.5rem;
      /* font-variation-settings: "wght" 100; */
      font-weight: 400;
      color: black;
      margin: 0;
    }
    footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* flex: 1; */
      background-color: #504c4c;
      height: 40px;
      width: 100%;
      padding: 20px 0;
      font-size: 0.9rem;
    }
  }
</style>
