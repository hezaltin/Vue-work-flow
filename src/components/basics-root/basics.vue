<template>
  <div>
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
import HelloWorld from "../hello-world/HelloWorld";
import Quote from "../quote/Quote";
import Author from "../quote/Author";
import AuthorNew from "../quote/AuthorNew";
import QuoteWrapper from '../quotes-components/QuotesWrapper';
import FormValidation from '../form-controls-component/FormControls';
import FormBasic from '../form-controls-component/FormBasic';
import Directive from '../directives/Directive';
import FiltersAndMixins from '../filters-and-mixins/FiltersAndMixins'
import Animation from '../animations/Animation';
import AnimationWithQuiz from '../animations-with-quiz/Quiz';
import HttpResource from '../http-vue-resource/Http';

export default {
  name: "Basic",
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

</style>
