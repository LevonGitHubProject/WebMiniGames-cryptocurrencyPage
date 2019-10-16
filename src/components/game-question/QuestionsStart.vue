<template>
  <div class="bar">
    <div class="dask">
      <transition name="start">
        <div class="cont" v-if="!seen">
          <div :class="questClass">
            <QuestionsSee :question="questions[count]" />
          </div>
          <div class="dask-answer">
            <Answer :answer="answers[count]" />
          </div>
        </div>
      </transition>
      <div v-if="seen">
        <div>
          <img src="logimages/questions.jpg" />
        </div>
      </div>
    </div>
    <div class="butt">
      <button class="buts" v-if="seen" @click="startGame">Start</button>
      <button class="buts" v-if="!seen" @click="nextQuestions">Next</button>
      <button class="buts" v-if="!seen" @click="endGame">Stop</button>
      <button class="buts" v-if="seen" @click="exitGame">back</button>
      <a href="http://localhost:8080/#/question/score">
        <button v-if="seen" class="buts">Score</button>
      </a>
    </div>
  </div>
</template>
<script>
import QuestionsData from "./QuestionsData.js";
import QuestionsSee from "./QuestionsSee";
import Answer from "./Answer";
import "../../styles/style-question/question-style.styl";
export default {
  data() {
    return QuestionsData;
  },
  components: {
    QuestionsSee,
    Answer
  },
  beforeUpdate() {
    if (this.count === this.questions.length) {
      this.endGame();
      this.seen = !this.seen;
    }
  },
  methods: {
    startGame() {
      this.seen = false;
      this.id++;
    },
    endGame() {
      this.seen = true;
      if (this.score > 0) {
        let nameScore = {
          id: this.id,
          name: this.userName,
          playScore: this.score
        };
        this.users.push(nameScore);
        this.score = 0;
      }
    },
    exitGame() {
      this.seen = false;
      this.ok = true;
      this.userName = null;
      this.count = 0;
    },
    nextQuestions() {
      this.count < this.questions.length ? ++this.count : alert("END GAME");
    }
  }
};
</script>

<style scoped>
.cont {
  width: 100%;
  padding: 10px;
  justify-content: center;
  text-align: center;
  display: flex;
}
.bar {
  width: 650px;
  max-height: 450px;
  background-color: rgb(207, 217, 248);
  opacity: 0.8;
  margin-top: 30px;
  border-radius: 25px;
  border: 5px solid rgb(3, 5, 5);
}
.dask {
  background-color: rgb(207, 217, 248);
  opacity: 0.8;
  margin: 30px 0 0 0;
  justify-content: center;
  text-align: center;
  display: flex;
  height: 300px;
}
.dask-answer {
  margin: 25px 10px 0 15px;
  display: flex;
  width: 40%;
  justify-content: center;
  text-align: center;
}
.butt {
  margin-top: 50px;
}
.buts:hover {
  background-color: rgb(58, 66, 66);
}
.dask-question {
  background-color: rgb(1, 5, 5);
  padding: 15px;
  min-height: 35px;
  border-radius: 25px;
  width: 45%;
}

img {
  width: 80%;
  border-radius: 25px;
  border: 5px solid black;
}
.start-leave-active {
  transition: transform 0.3s;
}
.start-enter {
  transform: translateX(-1000px);
}
.start-leave-to {
  transform: translateX(-1000px);
}
</style>
