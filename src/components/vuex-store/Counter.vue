<template>
    <div>
        <md-button class="md-primary" @click="increment">Increment</md-button>
         <md-button class="md-primary" @click="decrement">Decrement</md-button>
    </div>
</template>

<script>
export default {
    methods:{
        increment(){
            this.$store.state.counter++;
        },
        decrement(){
             this.$store.state.counter--;
        }

    }
}
</script>