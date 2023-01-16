<script>
    import { store } from '../store';

    export default {
        data(){
            return{
                store,
                archetypeName: '',
            }
        }        
    }
</script>

<template lang="">
    <div class="select_container">
        <select v-model="archetypeName" @change="$emit('selectArc', archetypeName)">
            <option v-for="(item, index) in store.archetypes" :key="index" :value="item.archetype_name" >
                {{item.archetype_name}}
            </option>
        </select>
    </div>
</template>

<style lang="scss">
    @use '../styles/partials/variables.scss' as *;

    .select_container{
        background-color: $orange;
        padding:  1rem 5rem;

        select{
            min-width: 150px;
        }
    }
</style>