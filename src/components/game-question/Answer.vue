<template>
  <div class="ans">
    <div
      v-for="ans in answer"
      v-bind:key="ans.id"
      class="answer-dask"
      @click="selectAnswer(ans)"
    >
      <p class="answer">{{ ans }}</p>
    </div>
  </div>
</template>

<script>
import QuestionsData from "./QuestionsData.js";
import "../../styles/style-question/question-style.styl";
export default {
  name: "answer-see",
  props: ["answer"],
  data() {
    return QuestionsData;
  },
  updated() {
    this.startNewGame();
  },
  created() {
    const dataJsonQuestion = require("../../../package-question-data.json");
    this.answers = dataJsonQuestion.answers;
    this.questions = dataJsonQuestion.questions;
  },
  methods: {
    selectAnswer(ans) {
      if (
        (this.questions[this.count] && ans === "Paris") ||
        (this.questions[this.count] && ans === "PSG") ||
        (this.questions[this.count] && ans === "Devils Advocate") ||
        (this.questions[this.count] && ans === "6") ||
        (this.questions[this.count] && ans === "China")
      ) {
        this.questClass = "question-true";
        this.score += 5;
        setTimeout(() => {
          this.questClass = "dask-question";
          if (this.count < this.questions.length) {
            this.count++;
          }
        }, 1000);
      } else {
        this.questClass = "question-false";
        setTimeout(() => {
          this.questClass = "dask-question";
          if (this.count < this.questions.length) {
            this.count++;
          }
        }, 1000);
      }
    },
    startNewGame() {
      if (this.count === this.questions.length) {
        this.count = 0;
        this.seen = !this.seen;
        this.questions.reverse();
        this.answers.reverse();
        for (let i = 0; i < this.answers.length - 1; i++) {
          this.answers[i].reverse();
        }
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.ans {
  margin-top: 45px;
  justify-content: center;
  text-align: center;
  width: 100%;
}

.answer {
  margin: 10px;
  color: white;
  font-size: 20px;
}
</style>
