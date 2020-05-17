<template>
    <div>
        <h1>This is Author New Component</h1>
        <md-button class="md-raised md-primary"  @click="counter++">Increment</md-button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {
            counter:0
        }
    },
    activated(){
        console.log('Activated')
    },
    deactivated(){
        console.log('Deactivated')
    }
}
</script>

<style scoped>

</style>