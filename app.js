import { ref, createApp } from "vue";
import PreferenceButton from "./components/PreferenceButton.js";

const app = {

//    setup() {

//     return {}
//    }
};

const vueApp = createApp(app);

vueApp.component("preference-button", PreferenceButton);

vueApp.mount("#app");