// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import Score from "./components/Score";

Vue.config.productionTip = false;

Vue.use(VueResource);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: {
    App,
    Score
  },
  http: {
    root: "/root",
    headers: {
      Authorization: "Basic YXBpOnBhc3N3b3Jk"
    }
  }
});
