import Recipe from "./Recipe";

const RecipeService = {
    async getRecipes() {
        return [
            new Recipe( 
                    'Kyckling teriyaki', 
                    80, 
                    'assest/kyckling_teriyaki.jpg', 
                    'Huvudrätt',
                     'assets/meat.svg',
                    'Asiatiskt',
                    true
            ),
            new Recipe(
                'Svamprisotto',
                90,
                'assets/svamprisotto.jpg',
                'Förrätt',
                'assets/veg.svg',
                'Italienskt',
                false
            )
        ]
    }
}

export default RecipeService;

