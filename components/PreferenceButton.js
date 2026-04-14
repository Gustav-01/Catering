import { ref } from "vue";
 
export default {
    name: "PreferenceButton",

    template: `
        <button class="preference">
            <slot></slot>
        </button>
    `
};