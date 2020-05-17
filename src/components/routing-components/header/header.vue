<template>
  <div>
    <md-toolbar>
      <img class="vue-logo" alt="Vue logo" src="../../../assets/logo.png" />
      <div>
        <!-- <ul class="nav nav-pills">
             <li role="presentation"><router-link to="/">Basic</router-link></li>
             <li  role="presentation"><router-link to="/user">User</router-link></li>
        </ul>-->
        <!-- <ul class="nav nav-pills">
          <router-link to="/" tag="li" active-class="active" exact>
            <a>Basic</a>
          </router-link>
          <router-link to="/user" tag="li" active-class="active">
            <a>User</a>
          </router-link>
        </ul> -->

        <!-- <md-button><router-link to="/">Basic</router-link></md-button>
        <md-button class="md-primary"><router-link to="/user">User</router-link></md-button>-->
        <router-link to="/" class="md-primary" tag="md-button" active-class="active" exact><a>Basic</a></router-link>
        <router-link to="/user" class="md-primary" tag="md-button" active-class="active"><a>User</a></router-link>
         <!-- <router-link to="/user/2" class="md-primary" tag="md-button" active-class="active"><a>User2</a></router-link> -->
      </div>
    </md-toolbar>
  </div>
</template>

<style scoped>
.vue-logo {
  width: 2%;
}
</style>