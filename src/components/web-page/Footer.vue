<template>
  <div class="foot">
    <div class="foot-text"> 
      <h1>Contact</h1>
    </div>
    <div class="foot-text">
        If you're looking for help building
        your product, reach out with a brief
        description of where you are, where you
        want to be and how you think I can be
        helpful. If I can't help you personally,
        I probably know someone who can.
    </div>
  </div>
</template>

<script>
import "../../styles/style-web/main-web.styl";
export default {
  name: "foot"
};
</script>

<style lang="stylus" scoped>
.foot-text {
  display flex
  justify-content center
  text-align center
  color white
}
</style>