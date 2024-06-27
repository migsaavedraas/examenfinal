export default {
    props: ['recipe'],
    template: `
        <div>
            <div v-if="recipe">
                <h2>Felicidades has conseguido cocinar un {{ recipe.name }}</h2>
                <img :src="'images/' + recipe.image" alt="Platillo">
                <h3>Ingredientes</h3>
                <ul>
                    <li v-for="(ingredient, index) in recipe.ingredients" :key="index">{{ ingredient }}</li>
                </ul>
            </div>
            <div v-else>
                <p>NO hay resultados</p>
            </div>
        </div>
    `
};
