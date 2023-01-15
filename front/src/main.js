import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./store.js";
import router from "./router";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faUserSecret);
library.add(faCartShopping);
library.add(faRightFromBracket);

createApp(App).use(router).use(store).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
