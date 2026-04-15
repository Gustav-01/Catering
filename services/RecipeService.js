const RecipeService = {
    async getRecipes() {
        return [
            {
                title: 'Kyckling teriyaki',
                price: 80,
                imageUrl: 'assest/kyckling_teriyaki.jpg',
                course: 'Huvudrätt',
                mainIngredientImg: 'assets/meat.svg',
                theme: 'Asiatiskt',
                modifiable: true,
            }
        ]
    }
}
Object.freeze(RecipeService);

export default RecipeService;

