import Vue from 'vue'
import App from './App.vue';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false
Vue.use(VueMaterial);

Vue.mixin({
  created(){
    console.log('Global Created')
  }
}) // Do this with cautaion coz it will load every vue instance including third party components
Vue.filter('to-lowercase',(value)=>{
  return value.toLowerCase()
})

Vue.directive('highlight',{
    bind(el,binding){
      //el.style.backgroundColor = 'green';
      //el.style.backgroundColor = binding.value;
      let delay = 0;
      console.log(binding.arg)
      if(binding.modifiers['delayed']){
        delay = 3000;
        setTimeout(()=>{
          checkMethods(el,binding);
        },delay)
      }

      const checkMethods = (el,binding) => {
        if(binding.arg == 'background'){
          el.style.backgroundColor = binding.value;
        }
        else{
          el.style.color = binding.value;
        } 
      }
      
    },
   

    
})

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
