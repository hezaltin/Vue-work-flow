<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>User Age : {{age}}</p>
    <section class="container">
      <HostKey :keyData="hostkeys" :name="name" @resetname="resetName($event)" :resetFn="resetNameFromParent" :userAge="age"/> 
      <HubKey :userAge="age" @ageEdited="age = $event"/>
    </section>
  <md-button class="md-raised md-primary"  @click="changeName">Change Name</md-button>
    <!-- <button @click="changeName">Change Name</button> -->
    <p>Parent Name : {{name}}</p>
  </div>
</template>

<script>
import HostKey from './HostKey';
import HubKey from './HubKey';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   components: {
    HostKey,
    HubKey
  },
  data(){
    return {
      hostkeys:[{name:'Apache',id:1},{name:'Tomcat',id:2},{name:'webpack',id:3},{name:'Node',id:4}],
      name:'Mich',
      age:27
    }
  },
  methods:{
    changeName(){
      console.log('clicked')
      this.name = 'Hezal'
    },

    resetName(event){
      console.log(event);
      this.name = event
    },
    resetNameFromParent(){
      this.name = 'Mich'
    },
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
  
  .container{
    display: flex;
    justify-content: space-evenly;
  }
</style>
