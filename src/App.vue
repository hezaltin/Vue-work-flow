<template>
  <div id="app">
    <div>
      <div>
        <Header />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import Basic from './components/basics-root/basics'
import Header from "./components/routing-components/header/header";
export default {
  name: "App",
  components: {
    //Basic,
    Header
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
</style>
