/**
 * Entity class for a recipe.
 */

class Recipe {
    constructor(title, price, imageUrl, course, mainIngredientImg, theme, modifiable) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.course = course;
        this.mainIngredientImg = mainIngredientImg;
        this.theme = theme;
        this.modifiable = modifiable;
    }
}

export default Recipe;