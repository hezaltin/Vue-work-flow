<template>
  <div>
    <h2>User Page Works</h2>
    <hr />
    <br />
    <md-button class="md-primary" @click="navigate">Go to Basic</md-button>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
//   data() {
//     return {
//         id: this.$route.params.id
//     };
//   },
//   watch:{
//       '$route'(to){
//           this.id=  to.params.id
//       }
//   },
  methods: {
    navigate() {
      this.$router.push({name:'Basic'});
    }
  }
};
</script>