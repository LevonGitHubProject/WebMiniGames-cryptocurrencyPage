<template>
  <div class="header">
    <div class="header-form">
      <div class="log-name">
        <div>
          <h1>MiniGames.com</h1>
        </div>
      </div>
      <form action="" v-if="seen" class="log">
        <input
          class="input-login"
          v-model="userName"
          placeholder="name / phone +374"
          type="text"
        />
        <input
          class="input-login"
          v-model="userPassword"
          placeholder="password"
          type="password"
        />
        <div>
          <button class="butt-log-reg">Login</button>
          <button v-on:click="registorStart" class="butt-log-reg">
            Registor
          </button>
        </div>
      </form>
    </div>
    <transition name="registorform">
      <form action="" v-if="!seen" class="registor">
        <div class="registor-profile">
          <div class="close-board">
            <h1 class="h1">Create Account</h1>
            <button class="close-butt" v-on:click="registorClose">X</button>
          </div>
          <div class="names">
            <div>
              <input
                v-model="firstName"
                class="input-login"
                type="name"
                placeholder="First Name"
                required
              />
            </div>
            <div>
              <input
                v-model="lastName"
                class="input-login"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div>
            <input
              v-model="mail"
              class="mail input-login"
              type="email"
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div>
            <input
              v-model="password"
              class="mail input-login"
              type="password"
              placeholder="New Password"
              required
            />
          </div>
          <div>
            <p>Birth Day</p>
            <input
              v-model="birdDate"
              required
              class="data input-login"
              type="date"
            />
          </div>
          <div>
            <p>Gender</p>
            <input
              id="female"
              name="gender"
              value="Female"
              v-model="female"
              class="radio"
              type="radio"
            />
            <label for="female">Female</label>
            <input
              id="male"
              name="gender"
              value="Male"
              v-model="male"
              class="radio"
              type="radio"
            />
            <label for="male">Male</label>
          </div>
          <div>
            <button v-on:click="registored">Registored</button>
          </div>
        </div>
      </form>
    </transition>
  </div>
</template>

<script>
import UserData from "./UserData";
import "../../styles/style-web/main-web.styl";
export default {
  name: "header-web",
  data() {
    return UserData;
  },

  methods: {
    registorStart() {
      this.seen = !this.seen;
    },
    registored() {
      let gender = "";
      if (this.male) {
        gender = "male";
      }
      if (this.female) {
        gender = "female";
      }
      this.user = {
        firstName: this.firstName,
        lastName: this.lastName,
        mail: this.mail,
        password: this.password,
        birdDate: this.birdDate,
        maleFemale: gender
      };
    },
    registorClose() {
      this.seen = !this.seen;
      this.firstName = null;
      this.lastName = null;
      this.mail = null;
      this.password = null;
      this.birdDate = null;
      this.male = null;
      this.female = null;
    }
  }
};
</script>
<style lang="stylus" scoped>
.header-form {
  justify-content: center;
  display: flex;
  text-align: center;
}

.log {
  display: block;
  width: 400px;
  height: 70px;
  margin: 25px 0 0 50px;
}

.h1 {
  margin-left: 65px;
}

.input-login {
  width: 130px;
  height: 22px;
  border-radius: 50px;
  margin-left: 15px;
  text-align: center;
}

.close-board {
  display: flex;
  justify-content: center;
  text-align: center;
}

.close-butt {
  width: 30px;
  height: 30px;
  margin-left: 25px;
}

h1 {
  color: darkgoldenrod;
  font-size: 35px;
}

.registor-profile {
  width: 400px;
  height: 450px;
  background-color: white;
  opacity: 0.8;
  margin-top: 40px;
  border-radius: 25px;
}

.names {
  display: flex;
  justify-content: center;
  text-align: center;
}

.mail {
  width: 270px;
  margin-top: 20px;
}

.data {
  width: 150px;
}

.radio {
  margin: 0 10px 20px 30px;
}

.registorform-enter-active, .registorform-leave-active {
  transition: transform 0.5s;
}

.registorform-enter {
  transform: translateY(-1000px);
}

.registorform-leave-to {
  transform: translateY(1000px);
}
</style>
