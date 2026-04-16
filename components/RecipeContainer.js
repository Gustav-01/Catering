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

    // title: any;
    // price: any;
    // imageUrl: any;
    //imageAltText
    // course: any;
    // proteinImageUrl: any;
    // theme: any;
    // modifiable: any;

    template: `
        <div class="recipeContainer">

            <img :src="recipe.imageUrl" :alt="recipe.imageAltText" class="recipe-image">
                <div class="recipe-content">
                    <h2>{{ recipe.title }} - {{ recipe.price }} SEK pp</h2>

                    <div class="recipe-tags">
                        <div class="upper-tags">
                            <preference-button :title="recipe.course" background="#fff"
                                id="typeOfCourse"></preference-button>
                            <img :src="recipe.proteinImageUrl" class="protein-icon">
                        </div>
                        <div class="lower-tags">
                            <preference-button :title="recipe.theme" background="#651E81"></preference-button>
                            <preference-button v-if="recipe.modifiable" title="Anpassningsbar" background="#BC0485"></preference-button>
                        </div>
                    </div>

                    <div class="recipe-actions">
                        <preference-button v-if="recipe.modifiable" title="Anpassa" background="#fff" id="adjust"></preference-button>
                        <preference-button title="Lägg till" background="#35BC04"></preference-button>
                    </div>
                </div>
            
        </div>
    `
};