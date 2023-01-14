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
        }
    }
</script>

<template lang="">
    <div class="bg_orange pt-3 px-5">
        <div class="container-fluid d-flex justify-content-between flex-wrap p-4 bg-white cardList_container ">
            <Card v-for="(card, index) in store.cards.data"  :card="card" :key="index"/>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../styles/general.scss';
    @use '../styles/partials/variables.scss' as *;

    .bg_orange{
        background-color: $orange;
    }
    .cardList_container{
        gap: 10px;
    }
</style>