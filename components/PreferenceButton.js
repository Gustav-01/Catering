import { ref } from "vue";
 
export default {
    name: "PreferenceButton",

    setup() {
        return {};
    },

    template: `
        <button 
            class="preferenceButton">
            <slot></slot>
        </button>
    `
};