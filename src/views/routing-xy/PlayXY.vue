<template>
  <div class="xy-dask">
    <div class="button-dask">
      <div>
      <button class="buttons-start">New Games</button>
    </div>
    <div>
      <button class="buttons-start">Your Score</button>
    </div>
    <div>
      <a href="http://localhost:8080/#/">
        <button class="buttons-start">Exit Game</button>
      </a>
    </div>
    </div>
  </div>
</template>

<script>
import '../../styles/style-xo/main-xo.styl'
export default {
  name: "xy-play"
};
</script>

<style lang="stylus" scoped>
.xy-dask {
  width: 800px;
  height: 500px;
  margin-top: 40px;
  border-radius: 50px;
  background-image: url('../../../public/assets/X-O.jpg');
}
.button-dask {
  margin-top 130px}
</style>