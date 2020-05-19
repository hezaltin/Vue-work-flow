<template>
  <div>
    <h2>User Detail Page Works</h2>
    <p>Param Id : {{$route.params.id}}</p>
    <hr />
    <br />
    <md-button class="md-primary" @click="navigate">Go to User</md-button>
    <!-- <router-link tag="md-button" :to="'/user/'+ $route.params.id+'/edit'">Edit User</router-link> -->
    <router-link tag="md-button" :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: {
        name: "UserEdit",
        params: { id: this.$route.params.id },
        query: { lang: "en", q: 100 },
        hash:'#data'
      }
    };
  },
  methods: {
    navigate() {
      this.$router.push("/user");
    }
  },
  beforeRouteEnter(to,from,next){
      console.log(to)
       console.log('Component ROuting====>')
      next(true)
  },
  beforeRouteLeave(to,from,next){
 console.log(to)
       console.log('Component ROuting====>')
      next()
  }
};
</script>