<template>
  <div class="content-page">
    <div class="game-images">
      <img :src="imageSlide" />
    </div>
    <div class="game-border">
      <GameFruit />
      <GameQuestion />
      <LinkXY />
    </div>
  </div>
</template>

<script>
import LinkXY from "../../views/routing-xy/LinkXY";
import GameFruit from "../../views/fruit/GameFruit";
import GameQuestion from "../../views/question/GameQuestion";
import "../../styles/style-web/main-web.styl";
export default {
  name: "cont",
  components: {
    GameFruit,
    GameQuestion,
    LinkXY
  },
  data() {
    return {
      imageSlide: "slide-images/questions.jpg",
      count: 0,
      slider: {},
      decrementSlidInterval: ""
    };
  },
  created() {
    const slideData = require("../../../package-slide.json");
    this.slider = slideData.slideImages;
    this.slideChange();
  },
  methods: {
    slideChange() {
      this.imageSlide = this.slider[this.count].image;
      this.count < this.slider.length - 1 ? this.count++ : (this.count = 0);
      this.decrementSlidInterval = setTimeout(() => {
        this.slideChange();
      }, 3000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.game-border {
  display: flex;
  border: 3px solid grey;
  border-radius: 35px;
  margin-top: 25px;
  height: 500px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 35px;
  cursor: pointer;
}

.game-images {
  min-width: 80%;
  height: 400px;
  background-color: grey;
  border-radius: 35px;
}
</style>
