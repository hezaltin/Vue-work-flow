<template>
    <div>
        <div>
            <p>This is Child {{componentName}} Component</p>
            <p>You may edit the user here!!</p>
            <p>User Age: {{userAge}}</p>

            <md-button class="md-raised md-primary" @click="editAge">Edit</md-button>
        </div>
    </div>
</template>

<script>
import {eventBus} from '../../main'
export default {
    name:'HubKey',
    props: ['userAge'],
    data(){
        return {
            componentName:'HubKey'
        }
    },
    methods:{
        editAge(){
            this.userAge = 30;
            //this.$emit('ageEdited',this.userAge)
            eventBus.$emit('ageEdited',this.userAge);
        }
    }
}
</script>

<style scoped>
    div{
        background:dimgray;
        color:white
    }
</style>