<template>
  <div class="list-style">
    <div class="rank-item">{{ rank }}</div>
    <div class="list-item">{{ listName }}</div>
    <div class="list-item">{{ marketCap }}</div>
    <div class="item-price">{{ price }}$</div>
    <div :class="change24hStyle">
      <b>{{ change24h }}%</b>
    </div>
  </div>
</template>

<script>
export default {
  name: "list-show",
  props: ["marketCap", "listName", "change24h", "price", "rank"],
  data() {
    return {
      change24hStyle: "list-item",
      change24: this.change24h,
      seen: true
    };
  },
  created() {
    this.change24h > 0
      ? (this.change24hStyle = "change24hUpStyle")
      : (this.change24hStyle = "change24hDownStyle");
  }
};
</script>

<style lang="stylus" scoped>
.list-style {
  width: 100%;
  height: 35px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  text-align: center;
}

.change24hUpStyle {
  width: 200px;
  color: darkgreen;
  cursor: pointer;
}

.change24hDownStyle {
  width: 200px;
  color: darkred;
  cursor: pointer;
}

.list-item {
  width: 300px;
  margin-left: 35px;
  cursor: pointer;
}

.rank-item {
  margin-left: 35px;
  cursor: pointer;
}

.item-price {
  width: 120px;
  cursor: pointer;
}
</style>
