import Recipe from "./Recipe.js";

class RecipeService {
    
    async getRecipes() {
        return [
            new Recipe( 
                    1,
                    'Kyckling teriyaki', 
                    80, 
                    'assest/kyckling_teriyaki.jpg',
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
                'assets/svamprisotto.jpg',
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

