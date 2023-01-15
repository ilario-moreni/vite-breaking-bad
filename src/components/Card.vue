<script>
    import { store } from '../store';
    export default {
        props: {
            card: Object,
        },
        name: 'Card',
        data(){
            return{
                store,
            }
        }
    }
</script>

<template lang="">
    <div class="card my_card text-center">
        <img :src="card.card_images[0].image_url" alt="">
        <div class="card_name py-3">
            {{ card.name }}
        </div>
        <div class="font">{{ card.archetype}}</div>
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/variables.scss' as *;
    .my_card{
        width: calc(90% / 5);
        background-color: $orange!important;

        .card_name{
            text-transform: uppercase;
            color:white;
        }
    }


</style>