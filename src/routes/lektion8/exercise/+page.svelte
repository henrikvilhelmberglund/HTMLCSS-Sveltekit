<script>
</script>

<main>
  <section>
    <div class="big">
      <div>
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
      </div>
      <div class="kateder-wrapper">
        <div class="kateder" />
      </div>
    </div>
    <div class="medium">
      <div>
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
      </div>
      <div class="kateder-wrapper">
        <div class="kateder" />
      </div>
    </div>
    <div class="small">
      <div>
        <div class="table" />
        <div class="table" />
        <div class="table" />
      </div>
      <div class="kateder-wrapper">
        <div class="kateder" />
      </div>
    </div>
  </section>
  <section>
    <div class="big">
      <div>
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
        <div class="table" />
      </div>
      <div class="kateder-wrapper">
        <div class="kateder" />
      </div>
    </div>
    <div class="small">
      <div>
        <div class="table" />
        <div class="table" />
        <div class="table" />
      </div>
      <div class="kateder-wrapper">
        <div class="kateder" />
      </div>
    </div>
  </section>
</main>

<style lang="scss">
  @mixin flex(
    $direction: row,
    $justify: flex-start,
    $align: flex-start,
    $self: flex-start
  ) {
    display: flex;
    flex-direction: $direction;
    justify-content: $justify;
    align-items: $align;
  }
  @mixin border($color: white) {
    border: 2px solid scale-color($color, $lightness: -25%);
  }
  $color-big: coral;
  $color-medium: firebrick;
  $color-small: slateblue;
  $color-table: lightblue;
  $color-kateder: pink;

  main {
    background-color: red;
    height: 100vh;
    @include flex($direction: column);
    padding: 20px;

    section {
      @include flex($justify: center, $align: flex-end);
      width: 90%;
      height: 60%;
      margin: 10px;
      padding: 20px;
      background-color: green;
      div {
        margin: 10px;
        @include flex($direction: row, $justify: center, $align: center);
        flex-wrap: wrap;
      }

      .big {
        @include border($color-big);
        &:hover {
          background-color: scale-color($color-big, $lightness: +25%);
        }
        background-color: $color-big;
        width: 30%;
        height: 70%;
        .kateder-wrapper {
          height: 70%;
          width: 100%;
          @include flex($direction: row, $justify: center, $align: flex-end);
        }
      }
      .medium {
        @include border($color-medium);
        &:hover {
          background-color: scale-color($color-medium, $lightness: +25%);
        }
        background-color: $color-medium;
        width: 20%;
        height: 60%;
        .kateder-wrapper {
          height: 60%;
          width: 100%;
          @include flex($direction: row, $justify: center, $align: flex-end);
        }
      }
      .small {
        @include border($color-small);
        &:hover {
          background-color: scale-color($color-small, $lightness: +25%);
        }
        background-color: $color-small;
        width: 15%;
        height: 40%;
        .kateder-wrapper {
          height: 50%;
          width: 100%;
          @include flex($direction: row, $justify: center, $align: flex-end);
        }
      }
      .table {
        background-color: $color-table;
        width: 30px;
        height: 30px;
        border-radius: 100%;
      }
      .kateder {
        background-color: $color-kateder;
        width: 75px;
        height: 45px;
        border-radius: 10%;
      }
    }
  }
</style>
