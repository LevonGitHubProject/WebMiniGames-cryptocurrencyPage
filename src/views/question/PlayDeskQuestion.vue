<template>
  <div class="play">
    <QuestionStart />
  </div>
</template>

<script>
import QuestionStart from "../../components/game-question/QuestionStart";
import "../../styles/style-question/question-style.styl";
export default {
  name: "StartQuestionGame",
  components: {
    QuestionStart
  }
};
</script>
