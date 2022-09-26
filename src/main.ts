import { createApp } from "vue";
import App from "./App.vue";
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
} from "@fortawesome/free-solid-svg-icons";

/* Add icons to the library */
library.add(faMoon, faMagnifyingGlass, faAngleDown);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
