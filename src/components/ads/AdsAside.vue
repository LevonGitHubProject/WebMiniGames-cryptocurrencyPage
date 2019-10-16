<template>
  <div class="ad">
    <div class="ads"></div>
    <p>text</p>
  </div>
</template>

<script>
export default {
  name: "ad"
};
</script>

<style lang="stylus" scoped>
.ad {
  margin: 25px 25px 25px 30px;
  cursor: pointer;
}

.ads {
  width: 180px;
  height: 230px;
  background-color: grey;
  border-radius: 25px;
}

.ads:hover {
  background-color: darkgreen;
}
</style>
