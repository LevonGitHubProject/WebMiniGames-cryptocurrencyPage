<template>
  <div class="score-show">
    <div class="name-score">{{ user }} - {{ score }}</div>
  </div>
</template>

<script>
export default {
  props: ["user", "score"],
  name: "LeaderboardItem"
};
</script>

<style lang="stylus" scoped>
.score-show {
  width: 98%;
  display: flex;
  justify-content: center;
  text-align: center;
}

.name-score {
  width: 280px;
  background-color: rgb(243, 169, 78);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}
</style>
