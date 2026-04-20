import { ref, createApp, onMounted } from "vue";
import PreferenceButton from "./components/PreferenceButton.js";
import RecipeContainer from "./components/RecipeContainer.js";
import RecipeService from "./services/RecipeService.js";

const app = {

    setup() {
        let allRecipes = ref([]);

        const recipeService = new RecipeService();

        async function loadRecipes() {
            try {
                allRecipes.value = await recipeService.getRecipes();
            }
            catch (error) {
                console.error('Could not retrieve recipe data: ' + error.message);
                alert('Tjänsten har problem just nu. Var god försök igen senare.')
                return;
            }
        }

        async function searchRecipes() {
            try {
                allRecipes.value = await recipeService.getSearchResult();
            }
            catch (error) {
                console.error('Error while performing search: ' + error.message);
                alert('Något gick fel i sökningen. Kontrollera söktermen och försök igen.')
                return;
            }
        }

        async function preferenceRecipe() {
            try {
                allRecipes.value = await recipeService.getPreferenceRecipe();
            }
            catch (error) {
                console.error('Error filtering recipes: ' + error.message);
                alert('Filtreringen misslyckades. Kontakta supporten.')
                return;
            }
        }

        onMounted(() => {
            loadRecipes();
        })

        return { allRecipes, loadRecipes, searchRecipes, preferenceRecipe }
    }
};

const vueApp = createApp(app);

vueApp.component("preference-button", PreferenceButton);
vueApp.component("recipe-container", RecipeContainer);


vueApp.mount("#app");