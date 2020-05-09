<template>
    <div>
        <h1>Filters And Mixins</h1>
        <p>{{text | toUpperCase | to-lowercase}}</p>
        <button @click="fruits.push('MuskMelon')">Add New</button>
        <input type="text" v-model="filterText"/>
        <ul class="lists">
            <li v-for="(fruit,index) in filtertexts" :key="index">{{fruit}}</li>
        </ul>
        <Filters/>
    </div>
</template>

<script>
import Filters from './Filters'
import {FruitsMixins} from './FruitsMixins'
export default {
    mixins:[FruitsMixins],
    data(){
        return {
            text:'Hello World',
        }
    },
    filters:{
        toUpperCase(value){
            return value.toUpperCase()
        }
    },
    components:{
        Filters
    }
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