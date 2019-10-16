<template>
  <div class="game">
    <XYContent />
  </div>
</template>

<script>
import XYContent from "../../components/game-xy/XYContent";
export default {
  name: "xy",
  components: {
    XYContent
  }
};
</script>

<style lang="stylus" scoped>
.game {
  margin: 15px 15px 15px 15px;
}
</style>