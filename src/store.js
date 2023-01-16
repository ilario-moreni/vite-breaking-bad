import { reactive } from 'vue';

export const store = reactive({
    cards: [],
    archetypes: [],
    selected_archetype: '',
    api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
    archetype_api: 'https://db.ygoprodeck.com/api/v7/archetypes.php',
    loaded: false,
})