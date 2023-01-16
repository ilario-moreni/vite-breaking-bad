<script>
    import Card from './Card.vue';
    import { store } from '../store';

    export default {
        name: 'CardList',
        data(){
            return{
                store,
            }
        },
        components: {
            Card,
        },
    }
</script>

<template lang="">
    <div class="bg_orange pt-3 px-5">
        <div v-if="store.loaded" class="container-fluid d-flex justify-content-between flex-wrap p-4 bg-white cardList_container ">
            <div class="row counter_container">
                <div class="col-auto">
                    Trovate {{ store.cards.length }} carte
                </div>
            </div>
            <div class="row row-cols-5 g-5">
                <Card v-for="(card, index) in store.cards" class="col-2 x_spacing" :card="card" :key="index"/>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables.scss' as *;

    .counter_container{
        background-color: #18020B;
        width: 100%;
        margin: 0 auto;
        color: white;
        padding: 1.5rem 0;
    }

    .x_spacing{
        margin-right: calc((100% / 6) / 10);
        margin-left: calc((100% / 6) / 10)
    }

    .bg_orange{
        background-color: $orange;
    }
    .cardList_container{
        gap: 10px;
    }
</style>