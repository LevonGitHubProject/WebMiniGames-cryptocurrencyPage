<template>
  <div class="questions-border">
    <div v-if="ok">
      <div class="butt-start">
        <button v-if="!seen" @click="newGame" class="butt-new-exit">
          New Game
        </button>
        <a href="http://localhost:8080/#/">
          <button v-if="!seen" class="butt-new-exit">Exit Game</button>
        </a>
      </div>
      <transition name="setname">
        <div v-if="seen" class="name-slide">
          <div>
            <h1>Your Name</h1>
          </div>
          <div>
            <input autofocus v-model="userName" type="text" />
          </div>
          <div>
            <button class="name-butt" @click="startOk">
              <b>ok</b>
            </button>
            <button class="name-butt" @click="goBack">
              <b>Back</b>
            </button>
          </div>
        </div>
      </transition>
    </div>
    <QuestionsStart v-if="!ok" />
  </div>
</template>

<script>
import QuestionsStart from "./QuestionsStart";
import QuestionsData from "./QuestionsData.js";
import "../../styles/style-question/question-style.styl";
export default {
  name: "questions-border",
  components: {
    QuestionsStart
  },
  data() {
    return QuestionsData;
  },
  methods: {
    newGame() {
      this.seen = true;
    },
    goBack() {
      this.seen = false;
      this.userName = null;
    },
    startOk() {
      if (this.userName) {
        this.ok = false;
      } else {
        alert("Your Name");
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.questions-border {
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
  width: 800px;
  height: 500px;
  background-image: url('../../../public/logimages/questionborder.jpg');
  border-radius: 50px;
}

.name-slide {
  width: 230px;
  height: 180px;
  background-color: rgb(255, 255, 255);
  opacity: 0.5;
  border-radius: 35px;
  padding: 25px;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
}

h1 {
  color: rgb(7, 9, 14);
}

b {
  font-size: 20px;
}

.butt-start {
  width: 250px;
  height: 50px;
}

input {
  justify-content: center;
  text-align: center;
  height: 25px;
  width: 130px;
  border-radius: 10px;
  color: rgb(7, 9, 14);
  font-size: 25px;
  margin-bottom: 20px;
}

.setname-enter-active, .setname-leave-active {
  transition: transform 0.5s;
}

.setname-enter {
  transform: translateY(-500px);
}

.setname-leave-to {
  transform: translateY(500px);
}
</style>
