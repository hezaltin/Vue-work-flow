<template>
  <div id="app">
    <div>
      <!-- <div>
        <Header />
      </div> -->
      <!-- Multiple Router with Name Router -->
      <div>
         <router-view name="header-top"></router-view>
      </div> 
      <transition name="slide" mode="out-in" type="animation">
        <router-view></router-view>
      </transition>
      
      <div>
         <router-view name="header-bottom"></router-view>
      </div> 
    </div>
  </div>
</template>

<script>
//import Basic from './components/basics-root/basics'
// import Header from "./components/routing-components/header/header";
export default {
  name: "App",
  components: {
    //Basic,
   // Header
  },
  data: () => {
    return {};
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
/* img {
  width: 2%;
  display: flex;
} */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* Default props to work all the browser */
}

html {
  background-color: #fff;
  color: #555;
  font-family: "Lato", "Arial", sans-serif;
  font-size: 20px;
  font-weight: 300;
  text-rendering: optimizeLegibility;
  /* Default props to work all the browser */
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
  /* opacity: 1; */
}
.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 3s;
  opacity: 0;
  position:absolute;
}
.slide-move{
  transition: transform 1s;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
