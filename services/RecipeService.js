import Recipe from "./Recipe.js";

class RecipeService {
    
    async getRecipes() {
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
}

export default RecipeService;

