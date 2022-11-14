<script>
</script>

<main>
  <div class="flexbox-parent">
    <div>
      <h1>Inloggning</h1>
    </div>
    <div class="flexbox-row">
      <div class="div-login">
        <div class="login-column">
          <input type="text" class="input-field" placeholder="Användarnamn" />
        </div>
        <div class="login-column">
          <input type="text" class="input-field" placeholder="Lösenord" />
        </div>
        <div class="login-row">
          <div class="checkbox">
            <input type="checkbox" name="remember-me" id="" />
          </div>
          <div class="label">
            <label for="remember-me">Kom ihåg mig</label>
          </div>
          <div class="password">
            <a href="http://">Glömt lösenord</a>
          </div>
        </div>
        <div class="login-column">
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
  .checkbox {
    flex: 0;
  }
  .label {
    flex: 1;
  }
  .password {
    flex: 1;
  }
  .google-log-in-btn {
    width: 100%;
    height: 30px;
    background: white;
    color: #222;
    font-size: 1.3rem;
    text-decoration: none;
    border-radius: 3px;
    padding: 4px;
    font-weight: 600;
  }
  .facebook-log-in-btn {
    width: 100%;
    height: 30px;
    background: hsl(230, 58%, 64%);
    color: white;
    font-size: 1.3rem;
    text-decoration: none;
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
    border-radius: 3px;
  }
  .input-field::placeholder {
    color: #ccc;
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
    font-size: 1.3rem;
    /* padding: 0; */
    /* display: block; */
  }
  .login-row {
    padding: 10px;
    display: flex;
    /* justify-content: space-between; */
  }
  .login-column {
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
    height: 100vh;
  }
  h1 {
    color: white;
  }
  main {
    height: 100vh;
    width: 100%;
    background: linear-gradient(black, red);
  }
  footer {
    background-color: gray;
    height: 50px;
    width: 100%;
  }
</style>
