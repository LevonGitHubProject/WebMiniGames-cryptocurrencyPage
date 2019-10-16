import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/fruit",
      name: "game-fruit",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/fruit/GameFruit.vue")
    },
    {
      path: "/fruit/score",
      name: "staggered-list-demo",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/fruit/FruitScore.vue")
    },
    {
      path: "/fruit/start",
      name: "start-game-fruit",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/fruit/FruitStart.vue")
    },
    {
      path: "/fruit/start/image",
      name: "StartGame",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/fruit/StartFruit.vue")
    },
    {
      path: "/question",
      name: "game-question",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/question/GameQuestion.vue"
        )
    },
    {
      path: "/question/start",
      name: "StartQuestionGame",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/question/PlayDeskQuestion.vue"
        )
    },
    {
      path: "/question/score",
      name: "quest",
      component: () =>
        import(
          /* webpackChunkName: "about" */ "./views/question/QuestScore.vue"
        )
    },
    {
      path: "/list",
      name: "list",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/list/List.vue")
    },
    {
      path: "/xy",
      name: "xy-play",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/routing-xy/PlayXY.vue")
    }
  ]
});
