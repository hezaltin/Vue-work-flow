<template>
  <div>
    <h2>User Edit Page Works</h2>
    <p>Param Id: {{$route.params.id}}</p>
    <p>Language : {{$route.query.lang}}</p>
    <p>Accessability : {{$route.query.q}}</p>
    <md-button class="md-primary" @click="confirm=true">Confirm</md-button>
    <div style="height:700px"></div>
    <p id="data">Some Random Data</p>
   
  </div>
</template>

<script>
export default {
  data(){
    return {
      confirm:false
    }
  },
  methods: {},
  beforeRouteLeave(to,from,next){
    if(this.confirm){
      next()
    } else{
      if(confirm('Are you sure to leave?')){
        next()
      } else{
        next(false)
      }
    }
  }
};
</script>