<script>
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
  <div class="flexbox-parent">
    <div>
      <h1>Inloggning</h1>
    </div>
    <div class="flexbox-row">
      <div class="div-login">
        <div class="login-column-0">
          <input type="text" class="input-field" placeholder="Användarnamn" />
        </div>
        <div class="login-column-1">
          <input type="text" class="input-field" placeholder="Lösenord" />
        </div>
        <div class="login-row">
          <div class="row-left">
            <div class="checkbox">
              <input type="checkbox" name="remember-me" id="" />
              <label for="remember-me">Kom ihåg mig</label>
              <div class="label" />
            </div>
          </div>
          <div class="row-right">
            <div class="password">
              <a href="http://">Glömt lösenord</a>
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
  </div>
</main>
<footer>this is footer</footer>

<style>
  .row-left {
    display: flex;
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
    padding-left: 5px;
  }
  .label {
    /* flex: 1; */
  }
  .password {
    /* flex: 1; */
  }
  .google-log-in-btn {
    width: 100%;
    line-height: 30px;
    background: white;
    color: #222;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 4px;
    padding: 4px;
    font-weight: 600;
  }
  .facebook-log-in-btn {
    width: 100%;
    line-height: 30px;
    background: hsl(230, 58%, 64%);
    color: white;
    font-size: 1rem;
    text-decoration: none;
    border-radius: 4px;
    padding: 4px;
    font-weight: 600;
  }
  .inner-div-google {
    padding: 10px;
    display: flex;
    flex-direction: row;
    flex: 1;
    text-align: center;
  }
  .div-google {
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    display: block;
    width: 300px;
  }
  .input-field {
    width: 100%;
    height: 30px;
    border: 0px solid black;
    border-radius: 4px;
  }
  .input-field::placeholder {
    padding-left: 30px;
    color: #bbb;
  }
  .input-field:focus {
    /* background-color: red; */
    color: black;
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
  .login-row {
    padding: 10px;
    padding-left: 0px;
    display: flex;
    width: 100%;
    /* flex: 1; */
  }
  .login-column-0 {
    display: flex;
    flex: 1;
    padding: 10px;
    /* min-width: 100px; */
    width: 100%;
  }
  .login-column-0:before {
    font-family: "FontAwesome";
    font-size: 1rem;
    content: "\f007";
    position: absolute;
    left: 565px;
    bottom: 515px;
    padding: 5px;
    color: #bbb;
  }
  .login-column-1 {
    display: flex;
    flex: 1;
    padding: 10px;
    /* min-width: 100px; */
    width: 100%;
  }
  .login-column-1:after {
    font-family: "FontAwesome";
    font-size: 1rem;
    content: "\f084";
    position: absolute;
    left: 565px;
    bottom: 465px;
    padding: 5px;
    color: #bbb;
  }
  .login-column-2 {
    display: flex;
    flex: 1;
    padding: 10px;
    /* min-width: 100px; */
    width: 100%;
  }
  a {
    color: white;
  }
  .div-login {
    display: flex;
    flex-direction: column;
    /* width: 33%; */
    color: white;
    width: 270px;
  }
  .div-eller {
    /* width: 33%; */
    color: white;
    padding: 100px;
  }

  .flexbox-row {
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
  }
  .flexbox-parent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 89vh;
  }
  #main {
    height: 89vh;
  }
  * {
    font-family: "Inter", sans-serif;
    /* font-family: sans-serif; */
  }
  h1 {
    color: white;
  }
  h2 {
    font-size: 1.5rem;
    /* font-variation-settings: "wght" 100; */
    font-weight: 200;
  }
  main {
    height: 100vh;
    width: 100%;
    background: linear-gradient(black, #fd3a22);
  }
  footer {
    background-color: gray;
    height: 50px;
    width: 100%;
  }
</style>
