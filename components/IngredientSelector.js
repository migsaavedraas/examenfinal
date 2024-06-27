export default {
    data() {
        return {
            allIngredients: [
                "Arroz", "Pollo", "Zanahoria", "Arveja", "Lechuga", "Papa", "Huevo", "Aceituna"
            ],
            selectedIngredients: []
        };
    },
    methods: {
        cookRecipe() {
            this.$emit('cook-recipe', this.selectedIngredients);
        }
    },
    template: `
        <div>
            <h2>Ingredientes</h2>
            <div v-for="(ingredient, index) in allIngredients" :key="index">
                <label>
                    <input type="checkbox" :value="ingredient" v-model="selectedIngredients"> {{ ingredient }}
                </label>
            </div>
            <button @click="cookRecipe">Cocinar</button>
        </div>
    `
};
