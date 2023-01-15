<script>
  import CardList from './components/CardList.vue';
  import AppHeader from './components/AppHeader.vue';
  import axios from 'axios';
  import { store } from './store';
  export default {
    components: {
      CardList,
      AppHeader,
    },
    data(){
        return{
            store,
            cardsList: [],
            
        }
    },
    created(){
        this.createCard();
    },
    mounted(){
      store.loaded = true;
    },
    methods: {
        createCard(){
            axios.get(store.api).then((reponse) => {
                    store.cards = reponse.data ;
            })
            
        }
    }
  }
</script>

<template lang="">
  <div class="bg_app  app_container">
    <AppHeader />
    <CardList />
  </div>
</template>

<style lang="scss">
  @use './styles/partials/variables.scss' as *;



</style>