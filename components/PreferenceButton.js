import { ref } from "vue";
 
export default {
    name: "PreferenceButton",

    setup() {
    },

    template: `
        <button 
            class="preferenceButton">
            <slot></slot>
        </button>
    `
};