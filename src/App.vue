<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='HelloWorld'"
    >Hello World Component</md-button>
    <md-button class="md-raised md-primary" @click="selectedComponent ='Quote'">Quote Component</md-button>
    <md-button class="md-raised md-primary" @click="selectedComponent ='Author'">Author Component</md-button>
    <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='AuthorNew'"
    >Author New Component</md-button>
    <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='QuoteWrapper'"
    >Quote Wrapper</md-button>
     <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='FormValidation'"
    >FormValidation</md-button>

     <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='FormBasic'"
    >FormBasic</md-button>

     <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='Directive'"
    >Directive</md-button>
    
     <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='FiltersAndMixins'"
    >FiltersAndMixins</md-button>

    <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='Animation'"
    >Animation</md-button>
    <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='AnimationWithQuiz'"
    >Animation With Quiz</md-button>
     <md-button
      class="md-raised md-primary"
      @click="selectedComponent ='HttpResource'"
    >Http Resource</md-button>

    <p>{{selectedComponent}}</p>
    <keep-alive>
      <component :is="selectedComponent">
        <h2>Quote Instance</h2>
        <p slot="slots">The Instance got created</p>
        <p>Scoped Value : {{quoteText}}</p>
      </component>
    </keep-alive>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Quote quote="Quote Instance"> 
      <h2>Quote Instance</h2>
      <p slot="slots">The Instance got created</p>
      <p>Scoped Value : {{quoteText}}</p>
    </Quote>
    <Author/>
    <AuthorNew/>-->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Quote from "./components/Quote";
import Author from "./components/Author";
import AuthorNew from "./components/AuthorNew";
import QuoteWrapper from './components/quotes-components/QuotesWrapper';
import FormValidation from './components/form-controls-component/FormControls';
import FormBasic from './components/form-controls-component/FormBasic';
import Directive from './components/directives/Directive';
import FiltersAndMixins from './components/filters-and-mixins/FiltersAndMixins'
import Animation from './components/animations/Animation';
import AnimationWithQuiz from './components/animations-with-quiz/Quiz';
import HttpResource from './components/http-vue-resource/Http';

export default {
  name: "App",
  components: {
    HelloWorld,
    Quote,
    Author,
    AuthorNew,
    QuoteWrapper,
    FormValidation,
    FormBasic,
    Directive,
    FiltersAndMixins,
    Animation,
    AnimationWithQuiz,
    HttpResource
  },
  data: () => {
    return {
      quoteText: "The Instance got created",
      selectedComponent: "HttpResource"
    };
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
  margin-top: 60px;
}
img {
  width: 2%;
  display: flex;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box
    /* Default props to work all the browser */
}

html {
    background-color: #fff;
    color: #555;
    font-family: 'Lato','Arial', sans-serif;
    font-size: 20px;
    font-weight: 300;
    text-rendering: optimizeLegibility;
     /* Default props to work all the browser */
}
</style>
