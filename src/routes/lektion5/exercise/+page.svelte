<script>
  let name = "";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
    integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<main id="main">
  <div class="flexbox-wrapper">
    <div class="flexbox-parent">
      <div class="h1-div">
        <h1>Inloggning</h1>
        {#if name}
          <h3>Hej {name}!</h3>
        {/if}
      </div>
      <div class="flexbox-row">
        <div class="div-login">
          <div class="login-column-0">
            <input
              type="text"
              class="input-field-0"
              placeholder="     Användarnamn"
              bind:value={name}
            />
          </div>
          <div class="login-column-1">
            <input
              type="text"
              class="input-field-1"
              placeholder="     Lösenord"
            />
          </div>
          <div class="login-row">
            <div class="row-left">
              <div class="checkbox">
                <input type="checkbox" name="remember-me" id="" />
                <!-- <div class="label"> -->
                <label for="remember-me" class="label">Kom ihåg mig</label>
                <!-- </div> -->
              </div>
            </div>
            <div class="row-right">
              <div>
                <a href="http://" class="password"
                  >Jag har glömt mitt lösenord</a
                >
              </div>
            </div>
          </div>
          <div class="login-column-2">
            <button class="log-in-btn">Logga in</button>
          </div>
        </div>
        <div class="div-eller">
          <h2>eller</h2>
        </div>
        <div class="div-google">
          <div class="inner-div-google">
            <a href="" class="google-log-in-btn"> Logga in med Google-konto </a>
          </div>
          <div class="inner-div-google">
            <a href="" class="facebook-log-in-btn"> Logga in med Facebook </a>
          </div>
        </div>
      </div>
      <div class="footer-div">
        <footer>
          <p>Serve inc Fake AB</p>
          <p>08-99 999 35 71</p>
          <p>Inteenriktiggata 99, 13 337, Härstorp</p>
        </footer>
      </div>
    </div>
  </div>
</main>

<style>
  .footer-div {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* height: 10%; */
    justify-content: flex-end;
    align-items: flex-end;
  }
  p {
    padding: 0px;
    padding-left: 30px;
    margin: 0px;
    color: white;
    font-weight: 200;
  }
  .row-left {
    display: flex;
    flex-direction: row;
    width: 50%;
    min-width: 100px;
    justify-content: flex-start;
  }
  .row-right {
    display: flex;
    width: 50%;
    min-width: 100px;
    justify-content: flex-end;
  }
  .checkbox {
    /* flex: 0; */
    /* padding-left: 5px; */
    font-size: 0.8rem;
    text-align: center;
  }
  .label {
    /* flex: 1; */
    font-size: 0.7rem;
    font-weight: 200;
  }
  .password {
    /* flex: 1; */
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
  }

  .google-log-in-btn:hover {
    background: #ccc;
    cursor: pointer;
  }
  .facebook-log-in-btn {
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
  }
  .facebook-log-in-btn:hover {
    background: hsl(216, 77%, 70%);
    cursor: pointer;
  }
  .inner-div-google {
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 100%;
    text-align: center;
  }
  .div-google {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* display: block; */
    /* width: 300px; */
    width: 100%;
    flex: 1;
  }
  .input-field-0 {
    width: 100%;
    height: 30px;
    border: 0px solid black;
    border-radius: 4px;
    padding-left: 10px;
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
  .login-row {
    display: flex;
    width: 100%;
  }
  .login-column-0 {
    display: flex;
    flex: 1;
    /* padding: 10px; */
    /* min-width: 100px; */
    width: 100%;
  }

  .login-column-1 {
    display: flex;
    flex: 1;
    padding: 15px 0 10px 0;
    /* min-width: 100px; */
    width: 100%;
  }
  .login-column-2 {
    display: flex;
    flex: 1;
    padding: 15px 0 10px 0;
    /* min-width: 100px; */
    width: 100%;
  }
  a {
    color: white;
  }
  .div-login {
    display: flex;
    flex: 1;
    flex-direction: column;
    /* width: 33%; */
    color: white;
    /* width: 270px; */
    width: 100%;
  }
  .div-eller {
    /* flex: 1; */
    /* width: 33%; */
    color: white;
    padding: 70px;
  }

  .flexbox-row {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    padding: 30px;
    width: 40%;
  }
  .flexbox-parent {
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  #main {
    height: 86.4vh;
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
    font-size: 1.1rem;
    /* font-variation-settings: "wght" 100; */
    font-weight: 200;
  }
  main {
    /* height: 100vh; */
    /* width: 100%; */
    background: linear-gradient(black, #fd3a22);
  }
  footer {
    /* flex: 0.1; */
    background-color: #504c4c;
    height: 70px;
    width: 100%;
    padding: 5px 0;
    font-size: 0.9rem;
  }
  .flexbox-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  .footer-div {
    display: flex;
    /* flex: 1; */
    flex-direction: column;
    width: 100%;
    height: 10%;
    /* justify-content: flex-end; */
    /* align-items: flex-end; */
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
    .row-left {
      display: flex;
      flex-direction: row;
      width: 50%;
      justify-content: flex-start;
    }
    .row-right {
      display: flex;
      width: 50%;
      justify-content: flex-end;
    }
    .checkbox {
      /* flex: 0; */
      /* padding-left: 5px; */
      font-size: 0.8rem;
      text-align: center;
    }
    .label {
      /* flex: 1; */
      font-size: 0.6rem;
      font-weight: 400;
      color: black;
    }
    .password {
      /* flex: 1; */
      font-size: 0.6rem;
      text-decoration: none;
      font-weight: 400;
      color: black;
    }
    .google-log-in-btn {
      width: 100%;
      line-height: 45px;
      height: 45px;
      background: white;
      color: #222;
      font-size: 1.1rem;
      text-decoration: none;
      border-radius: 4px;
      padding: 4px;
      font-weight: 800;
    }

    .google-log-in-btn:hover {
      background: #ccc;
      cursor: pointer;
    }
    .facebook-log-in-btn {
      width: 100%;
      line-height: 45px;
      height: 45px;
      background: #4988e7;
      color: white;
      font-size: 1.1rem;
      text-decoration: none;
      border-radius: 4px;
      padding: 4px;
      font-weight: 600;
    }
    .facebook-log-in-btn:hover {
      background: hsl(216, 77%, 70%);
      cursor: pointer;
    }
    .inner-div-google {
      padding: 10px;
      display: flex;
      flex-direction: row;
      flex: 1;
      width: 100%;
      text-align: center;
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
    .login-row {
      display: flex;
      flex: 0.1;
      width: 100%;
      padding: 15px 0;
    }
    .login-column-0 {
      display: flex;
      flex: 0.1;
      /* padding: 10px; */
      /* min-width: 100px; */
      width: 100%;
    }

    .login-column-1 {
      display: flex;
      flex: 0.1;
      padding: 15px 0 10px 0;
      /* min-width: 100px; */
      width: 100%;
    }
    .login-column-2 {
      display: flex;
      flex: 0.1;
      padding: 15px 0 10px 0;
      /* min-width: 100px; */
      width: 100%;
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
    .div-eller {
      display: flex;
      /* flex: 1; */
      height: 10%;
      /* flex: 1; */
      /* width: 33%; */
      color: white;
      padding: 5px;
      /* padding-bottom: 20px; */
    }

    .flexbox-row {
      display: flex;
      flex: 1;
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
      height: 90vh;
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
    .h1-div {
      padding-top: 120px;
      display: flex;
      flex-direction: column;
      flex: 1;
    }
    h2 {
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
    .footer-div {
      display: flex;
      /* flex: 1; */
      flex-direction: column;
      width: 100%;
      height: 10%;
      /* justify-content: flex-end; */
      /* align-items: flex-end; */
    }
  }
</style>
