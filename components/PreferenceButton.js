import { ref } from "vue";
 
export default {
    name: "PreferenceButton",
    props: { 
        title: String,
        background: String
    },

    setup() {
        console.log("Template loaded!");
    },

    template: `
        <button 
            class="preferenceButton"
            :style="{ backgroundColor: background }">
            {{ title }}
        </button>
    `
};