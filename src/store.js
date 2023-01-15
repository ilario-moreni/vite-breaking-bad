import { reactive } from 'vue';

export const store = reactive({
    cards: [],
    api: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Alien',
    loaded: false,
})