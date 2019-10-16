<template>
  <div class="score-dask">
    <div class="text">
      <div class="text-total">
        <p class="total">Total Score</p>
      </div>
    </div>
    <div>
      <ScoreSeen
        v-for="user in users"
        v-bind:key="user.id"
        :names="user.name"
        :scores="user.playScore"
      />
    </div>
    <div class="score-butt">
      <a href="http://localhost:8080/#/question/start">
        <button class="butt-score-back">Back</button>
      </a>
    </div>
  </div>
</template>

<script>
import ScoreSeen from "./ScoreSeen";
import QuestionsData from "../../components/game-question/QuestionsData.js";
import "../../styles/style-question/question-style.styl";
export default {
  name: "quest",
  components: {
    ScoreSeen
  },
  data() {
    return QuestionsData;
  }
};
</script>

<style lang="stylus">
.text-total {
  border-radius: 25px;
  width: 75%;
  height: 75px;
  opacity 0.7
}

.score-butt {
  margin: 45px;
}

.score-dask {
  width: 60%;
  height: 75vh;
  background-image: url('../../../public/logimages/questionborder.jpg');
  opacity: 0.9;
  display: block;
  justify-content: center;
  text-align: center;
  margin: 65px 0 0 0;
  border: 5px solid grey;
}

.total {
  border-radius: 25px;
  height: 45px;
  color: white;
  font-weight: bold;
  font-size: 35px;
  margin-top: 15px;
  background-color: rgb(12, 19, 19);
}

.text {
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>
