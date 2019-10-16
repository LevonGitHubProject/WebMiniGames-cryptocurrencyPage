<template>
  <div class="navigation">
    <div class="links" v-bind:key="link.id" v-for="link in list">
      <a :href="link.href">{{ link.list }}</a>
    </div>
  </div>
</template>

<script>
import "../../styles/style-web/main-web.styl";
export default {
  name: "navig",
  data() {
    return {
      list: "",
      href: ""
    };
  },
  created() {
    const navData = require("../../../package-nav.json");
    this.list = navData.navList;
  }
};
</script>

<style lang="stylus" scoped>
.links {
  width: 200px;
  height: 35px;
  text-decoration: none;
  font-size: 20px;
  margin: 25px 0 0 0;
  color: rgb(11, 5, 61);
  cursor: pointer;
  text-align: center;
  justify-content: center;
  display: flex;
  padding: 8px 5px 0 5px;
}

.links:hover {
  background-color: darkgreen;
  border-radius: 20px;
  color: white;
}
</style>
