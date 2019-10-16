<template>
  <div class="game-questions">
    <a href="http://localhost:8080/#/question/start">
      <img src="logimages/questions.jpg" />
    </a>
    <div>
      <a href="http://localhost:8080/#/question/start">
        <button class="play-butt-question">Play</button>
      </a>
    </div>
  </div>
</template>

<script>
import "../../styles/style-question/question-style.styl";
export default {
  name: "questions"
};
</script>

<style lang="stylus" scoped>
img:hover {
  opacity: 0.8;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 40px;
}

.game-questions {
  display: block;
  justify-content: center;
  text-align: center;
  margin: 20px;
}
</style>
