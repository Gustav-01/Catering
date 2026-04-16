import { ref, createApp } from "vue";
import PreferenceButton from "./components/PreferenceButton.js";
import RecipeContainer from "./components/RecipeContainer.js";

const app = {

//    setup() {

//     return {}
//    }
};

const vueApp = createApp(app);

vueApp.component("preference-button", PreferenceButton);
vueApp.component("recipe-container", RecipeContainer);


vueApp.mount("#app");