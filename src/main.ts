import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./css/style.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faAngleDown,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";

/* Add icons to the library */
library.add(faMoon, faMagnifyingGlass, faAngleDown, faArrowLeftLong);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");
