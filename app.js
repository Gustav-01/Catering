import { ref, createApp, onMounted } from "vue";
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

        async function searchRecipes() {
            allRecipes.value = await recipeService.getSearchResult();
        }

        async function preferenceRecipe() {
            allRecipes.value = await recipeService.getPreferenceRecipe();
        }

        onMounted( () => {
            loadRecipes();
        })

        return { allRecipes, loadRecipes, searchRecipes, preferenceRecipe }
    }
};

const vueApp = createApp(app);

vueApp.component("preference-button", PreferenceButton);
vueApp.component("recipe-container", RecipeContainer);


vueApp.mount("#app");