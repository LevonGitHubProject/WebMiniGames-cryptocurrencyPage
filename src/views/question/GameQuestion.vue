<template>
  <div class="game">
    <QuestionContent />
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionContent from "../../components/game-question/QuestionContent";
import "../../styles/style-question/question-style.styl";
export default {
  name: "game-question",
  components: {
    QuestionContent
  }
};
</script>

<style lang="stylus" scoped>
.game {
  margin: 15px 15px 15px 15px;
}
</style>
