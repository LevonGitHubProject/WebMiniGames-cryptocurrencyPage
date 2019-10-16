<template>
  <div class="border">
    <Header class="header-curr" />
    <div class="list">
      <div v-if="!lists.length" class="list-dask">Please Wait</div>
      <div v-if="lists.length" class="list-dask">
        <ListShow
          v-for="list in lists"
          :key="list.id"
          :listName="list.name"
          :marketCap="list.marketCap"
          :price="list.price"
          :rank="list.rank"
          :change24h="list.percentChange24h"
        />
      </div>
    </div>
    <div>
      <button :disabled="offBack" @click="changePage(-1)" :class="BackButtonStyle">«</button>
      <i>{{ page }}</i>
      <button :disabled="offNext" @click="changePage(1)" :class="NextButtonStyle">»</button>
    </div>
    <div>
      <a href="http://localhost:8080/#/">
        <button class="back-home">Back</button>
      </a>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../../components/web-page/Header";
import Footer from "../../components/web-page/Footer";
import ListShow from "../../components/list-currencies/ListShow";
export default {
  name: "list",
  components: {
    Header,
    ListShow,
    Footer
  },
  data() {
    return {
      lists: [],
      page: 1,
      totalPages: "",
      offNext: false,
      offBack: false,
      NextButtonStyle: "next-page",
      BackButtonStyle: "next-page"
    };
  },
  created() {
    this.seeList();
  },
  updated() {
    this.offBack
      ? (this.BackButtonStyle = "disable-button")
      : (this.BackButtonStyle = "next-page");
    this.offNext
      ? (this.NextButtonStyle = "disable-button")
      : (this.NextButtonStyle = "next-page");
  },
  methods: {
    seeList() {
      fetch(
        `https://api.udilia.com/coins/v1/cryptocurrencies?page=${this.page}&perPage=20`
      )
        .then(response => {
          return response.json().then(json => {
            return response.ok ? json : Promise.reject(json);
          });
        })
        .then(data => {
          this.lists = data.currencies;
          this.totalPages = data.totalPages;
        })
        .catch(error => {
          console.log("Error", error);
        });
    },
    changePage(value) {
      if (this.page > this.totalPages - 2) {
        this.offNext = true;
      } else if (this.page < 2) {
        this.offBack = true;
      } else {
        this.offBack = false;
        this.offNext = false;
      }
      this.page += value;
      this.seeList();
    }
  }
};
</script>

<style lang="stylus" scoped>
.border {
  width: 1355px;
  height: 100%;
  background-image: url('../../../public/assets/currency.jpg');
}

.list {
  justify-content: center;
  text-align: center;
  display: flex;
  margin-top: 15px;
}

.list-dask {
  width: 1000px;
  min-height: 100vh;
  padding: 25px;
  background-color: rgb(1, 1, 49);
  color: darkgoldenrod;
  font-weight: bold;
  opacity: 0.8;
  font-size: 26px;
  border-radius: 35px;
}

i {
  color: white;
}

.next-page {
  width: 35px;
  height: 35px;
  margin: 15px;
  background-color: rgb(1, 1, 49);
}

.disable-button {
  width: 35px;
  height: 35px;
  margin: 15px;
  background-color: grey;
}

.back-home {
  background-color: rgb(1, 1, 49);
  color: white;
}
</style>
