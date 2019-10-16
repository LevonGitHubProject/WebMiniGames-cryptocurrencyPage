<template>
  <div>
    <p class="name-score">{{ names }} - {{ scores }}</p>
  </div>
</template>

<script>
import QuestScore from "./QuestScore";
import "../../styles/style-question/question-style.styl";
export default {
  props: ["names", "scores"],
  name: "score"
};
</script>

<style>
.go {
  color: rgb(32, 32, 80);
}
</style>

<style lang="stylus" scoped>
div {
  justify-content: center;
  text-align: center;
  display: flex;
}

.name-score {
  margin: 35px 0 0 0;
  width: 50%;
  height: 25px;
  background-color: rgb(54, 54, 110);
  border-radius: 15px;
  font-size: 20px;
  color: rgb(239, 243, 233);
  font-weight: bold;
  opacity: 0.6;
}
</style>
