import IngredientSelector from './components/IngredientSelector.js';
import RecipeComponent from './components/RecipeComponent.js';

new Vue({
    el: '#app',
    data: {
        recipes: [],
        selectedIngredients: [],
        recipe: null
    },
    components: {
        'ingredient-selector': IngredientSelector,
        'recipe-component': RecipeComponent
    },
    mounted() {
        fetch('recipes.json')
            .then(response => response.json())
            .then(data => {
                this.recipes = data;
            });
    },
    methods: {
        handleCookRecipe(selectedIngredients) {
            const foundRecipe = this.recipes.find(recipe => {
                const recipeIngredients = recipe.ingredients.slice().sort();
                const selectedSorted = selectedIngredients.slice().sort();
                return JSON.stringify(recipeIngredients) === JSON.stringify(selectedSorted);
            });
            this.recipe = foundRecipe || null;
        }
    },
    template: `
        <div class="container">
            <div class="left">
                <recipe-component :recipe="recipe"></recipe-component>
            </div>
            <div class="right">
                <ingredient-selector @cook-recipe="handleCookRecipe"></ingredient-selector>
            </div>
        </div>
    `
});
