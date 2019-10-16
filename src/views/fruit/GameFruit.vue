<template>
  <div class="game">
    <FruitContent />
  </div>
</template>

<script>
// @ is an alias to /src
import FruitContent from "../../components/game-fruit/FruitContent";
export default {
  name: "game-fruit",
  components: {
    FruitContent
  }
};
</script>

<style lang="stylus" scoped>
.game {
  margin: 15px 15px 15px 15px;
}
</style>
