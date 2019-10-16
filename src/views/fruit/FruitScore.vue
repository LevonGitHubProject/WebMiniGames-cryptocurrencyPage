<template>
  <div class="center">
    <div class="score">
      <b>Total Score</b>
      <div v-for="list in lists" v-bind:key="list.id">
        <LeaderboardItem
          :class="list.style"
          :user="list.player"
          :score="list.score"
        />
      </div>
      <div>
        <a v-bind:href="linkBack">
          <button v-on:click="goBack" class="back">Back</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FruitData from "../../components/game-fruit/FruitData.js";
import LeaderboardItem from "../../components/game-fruit/LeaderboardItem";
import "../../styles/style-fruit/fruit-style.styl";
export default {
  name: "staggered-list-demo",
  components: {
    LeaderboardItem
  },
  data() {
    return {
      ...FruitData,
      linkBack: ""
    };
  },
  methods: {
    goBack() {
      this.linkBack = "http://localhost:8080/#/fruit/start";
    }
  }
};
</script>

<style lang="stylus" scoped>
.center {
  background-image: url('../../../public/assets/img-board.jpg');
  width: 1000px;
  height: 600px;
  opacity: 0.9;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 30px;
}

.score {
  margin-top: 50px;
  background-color: white;
  opacity: 0.8;
  width: 80%;
  height: 500px;
  border-radius: 50px;
}

b {
  margin-bottom: 55px;
  color: darkorange;
  font-size: 45px;
}

.back {
  margin-top: 55px;
}
</style>
