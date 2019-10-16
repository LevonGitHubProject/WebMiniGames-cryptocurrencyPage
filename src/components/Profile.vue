<template>
  <div class="profile">
    <Header class="sticky" />
    <div class="cont">
      <Nav />
      <Content />
      <Aside />
    </div>
    <div class="foot">
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./web-page/Header";
import Nav from "./web-page/Nav";
import Content from "./web-page/Content";
import Aside from "./web-page/Aside";
import Footer from "./web-page/Footer";
export default {
  name: "profile",
  components: {
    Header,
    Nav,
    Content,
    Aside,
    Footer
  }
};
</script>

<style lang="stylus" scoped>
.profile {
  width: 1351px;
  background-image: url('/root.jpg');
}

.cont {
  display: flex;
  justify-content: centre;
  text-align: centre;
  margin-top: 20px;
}

.sticky {
  position: sticky;
  top: 0;
}
</style>
