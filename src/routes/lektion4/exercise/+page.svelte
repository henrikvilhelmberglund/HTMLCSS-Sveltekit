<script>
</script>

<!-- 
  Du ska skapa en ritning över Ankademin som innehåller flera klassrum!

Skapa en div som har id “ankademin-school”. 
1. Ge denna div en höjd på 800px med CSS, och valfri bakgrundsfärg.
2. Inuti denna div, skapa upp tre sektioner. Alla sektioner ska ha en klass som heter “school-corridor”.
3. Samtliga sektioner ska ta upp hela bredden av skolan, vara 250px höga, och vara utspridda på höjden. Det ska finnas lika mycket mellanrum ovanför och under varje sektion.
4. Styla alla skolkorridorer så att samtliga har samma bakgrundsfärg.
5. Korridoren högst upp, ska ha tre klassrum (div) som alla är 125px breda och 125px höga. Alla klassrum ska ligga bredvid varandra längst ner till höger av korridoren, med 5px mellanrum mellan varandra.
6. Korridoren i mitten ska ha sex mindre klassrum med klassen “small-classroom”. De ska ha två klassrum per kolumn (2-2-2) och vara utspridda på bredden. Alla klassrum är 100px höga och 100px breda.
7. Korridoren längst ner ska ha fyra små klassrum i sig. Tre av klassrummen ska ligga på en rad högst upp till vänster i korridoren, varav ett klassrum ligger längst ner i mitten av korridoren.
8. Lägg nu till bord i varje klassrum och testa placera dem lite olika, gör borden runda och ge dem färger etc. :)

 -->

<div id="ankademin-school">
  <section class="school-corridor">
    <div class="classroom">
      <div class="table" />
      <div class="table" />
      <div class="table" />
      <div class="table" />
    </div>
    <div class="classroom">
      <div class="table" />
      <div class="table" />
      <div class="table" />
    </div>
    <div class="classroom">
      <div class="table" />
      <div class="table" />
      <div class="table" />
      <div class="table" />
      <div class="table" />
    </div>
  </section>
  <section class="school-corridor">
    <div class="small-classroom" />
    <div class="small-classroom" />
    <div class="small-classroom" />
    <div class="small-classroom" />
    <div class="small-classroom" />
    <div class="small-classroom" />
  </section>
  <section class="school-corridor">
    <div class="small-parent">
      <div class="small-classroom" />
      <div class="small-classroom" />
      <div class="small-classroom" />
    </div>
    <div class="small-parent2">
      <div class="small-classroom2" />
    </div>
  </section>
</div>

<style>
  .table {
    background-color: aqua;
    height: 40px;
    width: 50px;
    border-radius: 20px;
  }
  .classroom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }
  .classroom:nth-of-type(1) {
    align-items: center;
    flex-wrap: wrap;
  }
  .classroom:nth-of-type(2) {
    align-items: center;
    flex-wrap: wrap;
  }
  #ankademin-school {
    height: 800px;
    background-color: papayawhip;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-around;
  }

  .school-corridor {
    height: 250px;
    background-color: bisque;
    /* padding: 20px; */
    /* margin: 20px; */
    display: flex;
  }

  .school-corridor:nth-of-type(1) {
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  }

  .school-corridor:nth-of-type(2) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .school-corridor:nth-of-type(3) {
    flex-direction: column;
    justify-content: space-between;
    /* align-items: center; */
    /* flex-wrap: wrap; */
  }

  .classroom {
    background-color: thistle;
    height: 125px;
    width: 125px;
    margin: 2.5px;
  }
  .small-classroom {
    background-color: cornflowerblue;
    height: 100px;
    width: 100px;
    margin: 2.5px;
  }

  .small-parent {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .small-parent2 {
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    /* justify-content: flex-end; */
    align-self: center;
  }
  .small-classroom2 {
    background-color: cornflowerblue;
    height: 100px;
    width: 100px;
    margin: 2.5px;
  }
</style>
