<template>
  <div class="home">
    <Profile />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Profile from "../components/Profile.vue";
@Component({
  components: {
    Profile
  }
})
export default class Home extends Vue {}
</script>

<style lang="stylus" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
