/**
 * Entity class for a recipe.
 */

class Recipe {
    constructor(title, price, imageUrl, imageAltText, course, proteinImageUrl, theme, modifiable) {
        this.title = title;
        this.price = price;
        this.imageUrl = imageUrl;
        this.imageAltText = imageAltText;
        this.course = course;
        this.proteinImageUrl = proteinImageUrl;
        this.theme = theme;
        this.modifiable = modifiable;
    }
}

export default Recipe;