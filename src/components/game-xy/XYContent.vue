<template>
  <div class="game-log">
    <a href="http://localhost:8080/#/xy">
      <img src="assets/xy.jpg" />
    </a>
    <div>
      <a href="http://localhost:8080/#/xy">
        <button class="play-butt-fruit">Play</button>
      </a>
    </div>
  </div>
</template>

<script>
import "../../styles/style-fruit/fruit-style.styl";
export default {
  name: "fruits"
};
</script>

<style lang="stylus" scoped>
img {
  width: 150px;
  height: 150px;
  border-radius: 40px;
}

img:hover {
  opacity: 0.6;
}

.game-log {
  justify-content: center;
  text-align: center;
  margin: 20px;
}
</style>
