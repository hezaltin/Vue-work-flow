<template>
    <div>
        <h1>Filters And Mixins</h1>
        <input type="text" v-model="filterText"/>
        <button @click="fruits.push('Berries')">Add New</button>
        <ul class="lists">
            <li v-for="(fruit,index) in filtertexts" :key="index">{{fruit}}</li>
        </ul>
    </div>
</template>

<script>
import {FruitsMixins} from './FruitsMixins'
export default {
   mixins:[FruitsMixins]
}
</script>

<style scoped>
.lists{
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
}
</style>