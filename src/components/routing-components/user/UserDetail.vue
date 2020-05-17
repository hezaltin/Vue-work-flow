<template>
  <div>
    <h2>User Detail Page Works</h2>
    <p>{{$route.params.id}}</p>
    <hr />
    <br />
    <md-button class="md-primary" @click="navigate">Go to User</md-button>
    <router-link tag="md-button" :to="'/user/'+ $route.params.id+'/edit'">Edit User</router-link>
  </div>
</template>

<script>
export default {
   methods: {
    navigate() {
      this.$router.push("/user");
    }
  }
};
</script>