<script>
  import CardList from './components/CardList.vue';
  import AppHeader from './components/AppHeader.vue';
  import AppSearch from './components/AppSearch.vue';
  import axios from 'axios';
  import { store } from './store';
  export default {
    components: {
      CardList,
      AppHeader,
      AppSearch,
    },
    data(){
        return{
            store,
            cardsList: [],
            
        }
    },
    created(){
        this.createCard();
        this.getArchetype();
    },
    mounted(){
      store.loaded = true;
    },
    methods: {
        createCard(){
            axios.get(store.api).then((reponse) => {
                    store.cards = reponse.data.data ;
            })  
        },
        getArchetype(){
          axios.get(store.archetype_api).then((reponse) => {
                    store.archetypes = reponse.data ;
                    console.log(AppSearch.data)
            }) 
        },
        selectArc(value){
          
            axios.get(`https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=${value}`).then((response)=>{
                store.cards = response.data.data;
                store.selected_archetype = value;
            })
        },
    }
  }
</script>

<template lang="">
  <div class="bg_app  app_container">
    <AppHeader />
    <AppSearch  @selectArc="selectArc" />
    <CardList />
  </div>
</template>

<style lang="scss">
  @use './styles/partials/variables.scss' as *;



</style>