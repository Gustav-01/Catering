import Recipe from "./Recipe.js";

/**
 * Represents a service class which would have fetched data from an API in a real scenario. This class only returns hard-coded mock data.
 */
class RecipeService {

    /**
     * Call to generates a number of random Recipe objects of a generic nature, to use to fill out the page with mock data.
     * 
     * @returns an Array of random Recipe objects. 
     */
    async getRecipes() {
        const randomRecipes = this.generateRecipes(15);
        return randomRecipes;
    }

    /**
     * Call when searching for recipes. Will return an Array of two pre-filled Recipe objects.
     * 
     * @returns an Array of two Recipe objects.
     */
    async getSearchResult() {
        return [
            new Recipe(
                1,
                'Kyckling teriyaki',
                80,
                'assets/teriyaki.png',
                'Teriyakikyckling',
                'Huvudrätt',
                'assets/meat.svg',
                'Asiatiskt',
                true
            ),
            new Recipe(
                2,
                'Svamprisotto',
                90,
                'assets/risotto.png',
                'Svamprisotto',
                'Förrätt',
                'assets/veg.svg',
                'Italienskt',
                false
            )
        ]
    }

    async getPreferenceRecipe() {
        return this.generateRecipes(3);
    }
    /**
     * Helper method, generating generic mock Recipe objects to use as placeholders for where real data would go.
     * 
     * @param {Number} amountToGenerate - the number of Recipe objects to generate
     * @returns a list of generic Recipe objects randomly generated
     */
    generateRecipes(amountToGenerate) {
        const proteinsImagePaths = ['assets/meat.svg', 'assets/fish.svg', 'assets/veg.svg'];


        const recipes = [];
        for (let i = 1; i <= amountToGenerate; i++) {
            const id = i;
            const imageNumber = this.getRandomInt(1, 4);
            const proteinIconUrl = proteinsImagePaths[this.getRandomInt(1, 4) - 1];
            const modifiable = Math.random() < 0.5;

            recipes.push(new Recipe(
                id,
                'Receptnamn',
                80,
                `assets/general-recipe-images/food${imageNumber}.png`,
                'Maträtt',
                'Typ av måltid',
                proteinIconUrl,
                'Tema',
                modifiable
            ));
        }

        return recipes;
    }

    /**
     * For generating random integer. Copied from <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">MDN</a>
     * 
     * @param {Number} min lowest possible (inclusive)
     * @param {Number} max as high as, but not equal to.
     * @returns random integer between min and max - 1
     */
    getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
    }
}

export default RecipeService;

