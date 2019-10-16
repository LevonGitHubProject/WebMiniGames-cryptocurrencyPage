<template>
  <div class="size">
    <div class="board">
      <div class="game-board">
        <div class="but">
          <div>
            <a v-bind:href="linkGame">
              <button v-on:click.enter="playGame" class="play">
                Play Game
              </button>
            </a>
          </div>
          <div>
            <a v-bind:href="link">
              <button v-on:click="goScore" class="score">Your Score</button>
            </a>
          </div>
          <div>
            <a href="http://localhost:8080/#/">
              <button class="exit">Exit Game</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../styles/style-fruit/fruit-style.styl";
export default {
  name: "fruit-dask",
  data() {
    return {
      link: "",
      linkGame: "http://localhost:8080/#/fruit/start"
    };
  },
  methods: {
    playGame() {
      this.linkGame = "http://localhost:8080/#/fruit/start/image";
      this.className = "input-show";
    },
    goScore() {
      this.link = "http://localhost:8080/#/fruit/score";
    }
  }
};
</script>

<style lang="stylus" scoped>
.size {
  width: 900px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 15px;
}

.board {
  width: 740px;
  height: 600px;
  background-image: url('../../../public/assets/img-board.jpg');
  justify-content: center;
  text-align: center;
  display: flex;
  padding: 0 30px 0 30px;
}

.game-board {
  width: 500px;
  height: 450px;
  background-color: rgb(243, 234, 234);
  opacity: 0.8;
  border-radius: 50px;
  margin: 75px 25px 15px 25px;
}

.but {
  margin-top: 135px;
}
</style>
