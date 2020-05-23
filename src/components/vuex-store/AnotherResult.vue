<template>
    <div>
        <p>Total Number of clicks {{counterClicksGetters}} </p>
        <p>Counter is : {{doubleIncrementGetters}}</p>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    computed:{
        // ...mapGetters([
        //     'doubleIncrement',
        //     'counterClicks'
        // ])
        ...mapGetters({
           doubleIncrementGetters : 'doubleIncrement',
           counterClicksGetters:'counterClicks'
        }),
        ownComputedValues(){
            return ''
        }
    }
}
</script>