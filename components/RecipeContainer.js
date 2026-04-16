import PreferenceButton from "./PreferenceButton.js";

export default {
    name: "RecipeContainer",
    components: { PreferenceButton },

    props: {
        buttonTitle: String,
        buttonBackground: String
    },

    template: `
        <div class="recipeContainer">
            <PreferenceButton :title="buttonTitle" :background="buttonBackground"/>
        </div>
    `
};