<template>
  <div>
    <i class="quest">{{ question }}</i>
    <div>
      <img :src="image" />
    </div>
  </div>
</template>
<script>
import QuestionsData from "./QuestionsData";
import "../../styles/style-question/question-style.styl";
export default {
  name: "question-see",
  props: ["question"],
  data() {
    return {
      ...QuestionsData,
      image: ""
    };
  },
  beforeUpdate() {
    this.changeImg();
  },
  created() {
    this.changeImg();
    const dataJsonQuestion = require("../../../package-question-data.json");
    this.questions = dataJsonQuestion.questions;
  },
  methods: {
    changeImg() {
      if (this.question == "What the capital of Frans ?") {
        this.image = "imgquest/paris.jpeg";
      } else if (this.question == "Which team is playing Neymar ?") {
        this.image = "imgquest/psg.jpeg";
      } else if (this.question == "In which movie did Keanu Reeves play ?") {
        this.image = "imgquest/kiano.jpeg";
      } else if (
        this.question ==
        "How many times did Brazil become a world football champion ?"
      ) {
        this.image = "imgquest/brazil.jpeg";
      } else if (this.question == "What is the longest bridge in the world ?") {
        this.image = "imgquest/bridge.jpeg";
      }
    }
  }
};
</script>

<style scoped>
.quest {
  font-size: 22px;
  font-weight: bold;
  color: rgb(245, 239, 239);
  border-radius: 35px;
}
img {
  margin: 25px;
  width: 100px;
  height: 100px;
  border: 10px solid black;
}
</style>
