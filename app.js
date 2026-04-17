import { ref, createApp } from "vue";
import PreferenceButton from "./components/PreferenceButton.js";
import RecipeContainer from "./components/RecipeContainer.js";
import RecipeService from "./services/RecipeService.js";

const app = {

    setup() {
        let allRecipes = ref([]);

        const recipeService = new RecipeService();

        async function loadRecipes() {
            allRecipes.value = await recipeService.getRecipes();
        }

        return { allRecipes, loadRecipes }
    }
};

const vueApp = createApp(app);

vueApp.component("preference-button", PreferenceButton);
vueApp.component("recipe-container", RecipeContainer);


vueApp.mount("#app");