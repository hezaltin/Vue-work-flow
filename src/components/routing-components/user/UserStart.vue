<template>
  <div>
    <h2>User Start Page Works</h2>
    <md-list>
      <router-link tag="md-list-item" :to="user.link" v-for="(user,index) in detailList" :key="index">{{user.name}}</router-link>  
      <!-- <md-list-item v-for="(user,index) in detailList" :key="index">{{user.name}}</md-list-item> -->
    </md-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detailList: [{ name: "User 1", link:'user/1'}, { name: "User 2", link:'user/2' }, { name: "User 3", link:'user/3' }]
    };
  },
  methods: {}
};
</script>

<style scoped>
.md-list {
  width: 320px;
  max-width: 100%;
  display: inline-block;
  vertical-align: top;
  border: 1px solid rgba(0, 0, 0, 0.12);
}
.md-list-item {
  cursor: pointer;
}
.md-list-item:hover {
  background-color: rgb(240, 240, 240);
}
</style>