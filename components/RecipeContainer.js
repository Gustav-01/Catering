import Recipe from "../services/Recipe.js";
import PreferenceButton from "./PreferenceButton.js";

export default {
    name: "RecipeContainer",
    components: { PreferenceButton },

    props: {
        buttonTitle: String,
        buttonBackground: String,

        recipe: Recipe,
    },

    template: `
        <div class="recipeContainer">

            <img :src="recipe.imageUrl" :alt="recipe.imageAltText" class="recipeImage">
                <div class="recipeContent">
                    <h2>{{ recipe.title }} - {{ recipe.price }} SEK pp</h2>

                    <div class="recipeTags">
                        <div class="upperTags">
                            <preference-button :title="recipe.course" background="#fff"
                                id="typeOfCourse"></preference-button>
                            <img :src="recipe.proteinImageUrl" class="proteinIcon">
                        </div>
                        <div class="lowerTags">
                            <preference-button :title="recipe.theme" background="#651E81"></preference-button>
                            <preference-button v-if="recipe.modifiable" title="Anpassningsbar" background="#BC0485"></preference-button>
                        </div>
                    </div>

                    <div class="recipeActions">
                        <preference-button v-if="recipe.modifiable" title="Anpassa" background="#fff" id="adjust"></preference-button>
                        <preference-button title="Lägg till" background="#35BC04" id="add"></preference-button>
                    </div>
                </div>
            
        </div>
    `
};