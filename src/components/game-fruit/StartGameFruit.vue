<template>
  <div class="size">
    <transition name="playing">
      <div v-if="!show" class="play-start">
        <div class="text-score">
          <h2 class="text">
            You have
            <b class="timer">{{ timer }}</b>
            s to click oll
            <b class="timer">{{ timeFruits }}</b>
          </h2>
          <h2 class="score">Score - {{ score }}</h2>
        </div>
        <div class="play-but">
          <div class="image">
            <th v-for="img in images" v-bind:key="img.id">
              <img
                class="frut-img"
                v-bind:class="trueFalse"
                v-on:click="openImages(img.image, img.id)"
                v-bind:src="img.image"
              />
            </th>
          </div>
          <div class="buttons">
            <button
              :class="butStyle"
              :disabled="onClick"
              v-on:click="startGame"
            >
              New Game
            </button>
            <div>
              <a href="http://localhost:8080/#/fruit/start">
                <button v-on:click="goBack" class="but">Back</button>
              </a>
            </div>
            <button v-on:click="seeImg" :disabled="!onClick" class="but">
              See Fruits
            </button>
          </div>
        </div>
      </div>
    </transition>
    <transition name="setname">
      <div v-if="show" class="player">
        <div class="name-slide">
          <div>
            <h1>Your Name</h1>
          </div>
          <div>
            <input class="input-name" autofocus v-model="player" type="text" />
          </div>
          <div>
            <button class="name-buttons" @click="startOk">OK</button>
            <a href="http://localhost:8080/#/fruit/start/">
              <button class="name-buttons">Back</button>
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import FruitData from "./FruitData.js";
import PlayDask from "./PlayDask";
import "../../styles/style-fruit/fruit-style.styl";
export default {
  name: "play-game",
  data() {
    return {
      ...FruitData,
      timer: 30,
      decrimentTimeInterval: "",
      butStyle: "but",
      onClick: false,
      score: 0,
      count: 0,
      trueFalse: "",
      id: 0,
      user: {},
      scoreStyle: "",
      imagesBack: [],
      timeFruits: "",
      seen: true,
      player: "",
      show: true,
      pictures: "",
      images: ""
    };
  },
  created() {
    const dataJson = require("../../../package-fruit-data.json");
    this.pictures = dataJson.pictures;
    this.images = dataJson.images;
    this.fruit = dataJson.fruit;
  },
  beforeMount() {
    setInterval(() => {
      this.timer > 27 || this.timer == 0
        ? (this.timeFruits = "Fruits")
        : (this.timeFruits = this.fruit[this.count].toUpperCase());
    }, 0);
  },
  beforeUpdate() {
    if (this.timer == 0) {
      clearInterval(this.decrimentTimeInterval);
      this.resetImg();
      this.gameScoreEnd();
    }
  },
  mounted() {
    clearInterval(this.decrimentTimeInterval);
    this.resetImg();
    this.timer = 30;
    this.butStyle = "but";
    this.onClick = false;
  },
  beforeDestroy() {
    this.score = 0;
  },
  methods: {
    startOk() {
      this.player ? (this.show = !this.show) : alert("Your Name");
    },
    resetImg() {
      this.imagesBack = this.images;
      this.imagesBack = this.imagesBack.map(function(img) {
        img.image = "./assets/qw.jpeg";
        return img;
      });
      this.seen = true;
      this.images = this.imagesBack;
      this.pictures.reverse();
      this.fruit = this.fruit.reverse();
    },
    goBack() {
      this.timer = 30;
      this.count = 0;
      this.player = null;
    },
    startGame() {
      this.id++;
      this.onClick = !this.onClick;
      this.butStyle = "but-disabled";
      this.seen = true;
      this.images = this.pictures;
      this.timer = 30;
      this.decrimentTimeInterval = setInterval(() => {
        if (this.timer > 0) {
          this.timer--;
        }
      }, 1000);
      this.count > 0 && this.count < 18 ? this.count++ : (this.count = 0);
      setTimeout(() => {
        this.images = this.imagesBack;
      }, 3000);
    },
    seeImg() {
      if (this.score > 0) {
        this.score = this.score - 3;
      }
      this.images = this.pictures;
      setTimeout(() => {
        this.images = this.imagesBack;
      }, 1500);
    },
    openImages(img, id) {
      if (img === "./assets/qw.jpeg" && this.timer !== 30) {
        img = this.pictures[id - 1].image;
        this.images[id - 1].image = img;
        this.count++;
        if (img.slice(9, img.length - 5) == this.fruit[this.count - 1]) {
          this.score += 5;
          this.trueFalse = "img-ok";
        } else {
          this.trueFalse = "img-wrong";
        }
      }
    },
    gameScoreEnd() {
      this.timer = 30;
      this.id++;
      this.score >= 25
        ? (this.scoreStyle = "hige-score")
        : (this.scoreStyle = "low-score");
      this.user = {
        id: this.id,
        style: this.scoreStyle,
        score: Math.round(this.score),
        player: this.player
      };
      this.lists.push(this.user);
      this.count = 0;
      this.score = 0;
      this.butStyle = "but";
      this.onClick = !this.onClick;
    }
  }
};
</script>

<style lang="stylus" scoped>
.size {
  background-image: url('../../../public/assets/img-board.jpg');
  width: 1000px;
  height: 600px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
}

.timer {
  color: green;
}

.img-wrong {
  border: 2px solid red;
}

.img-ok {
  border: 2px solid green;
}

.text {
  width: 620px;
  color: orange;
}

th {
  display: unset;
}

.image {
  min-width: 480px;
  height: 300px;
  border: 5px solid grey;
  background-color: black;
  margin: 0 10px 0 0;
  padding: 8px 5px 0 5px;
}

.buttons {
  margin-top: 65px;
  float: right;
  padding: 15px;
}

.play-but {
  display: flex;
  width: 60%;
}

.play-start {
  justify-content: center;
  text-align: center;
  width: 680px;
  height: 460px;
  background-color: white;
  margin-top: 55px;
  opacity: 0.8;
  padding: 0 50px 30px 70px;
  border: 3px solid grey;
}

.name-slide {
  width: 350px;
  height: 230px;
  background-color: rgb(255, 255, 255);
  border-radius: 35px;
  padding: 20px;
  justify-content: center;
  text-align: center;
  margin-top: 100px;
  opacity: 0.7;
}

.score {
  width: 150px;
  background-color: darkgreen;
  color: gold;
  border-radius: 15px;
}

h1 {
  color: darkorange;
}

.input-name {
  justify-content: center;
  text-align: center;
  height: 25px;
  width: 160px;
  border-radius: 10px;
  color: darkorange;
  font-size: 25px;
  margin-bottom: 20px;
  font-weight: bold;
}

.text-score {
  display: flex;
  margin: 15px 0 10px 0;
}

.setname-enter-active, .setname-leave-active {
  transition: transform 0.3s;
}

.setname-leave-to {
  transform: translateX(1000px);
}

.playing-enter-active, .playing-leave-active {
  transition: transform 0.3s;
}

.playing-enter {
  transform: translateX(-1000px);
}
</style>
