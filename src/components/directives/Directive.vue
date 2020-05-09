<template>
  <div>
    <div>
      <h1>Built in Directives</h1>
      <p v-text="'Hello World'"></p>
      <p v-html="'<strong>Some String Text</strong>'"></p>
    </div>
    <hr />
    <div>
      <h1>Custom Directives</h1>
      <p v-highlight:background.delayed="'red'">color this</p>
      <p v-local-highlight:background.delayed.blink="{mainColor:'red',secondColor:'green',delay:100}">color this too</p>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding) {
        let delay = 0;
        console.log(binding.arg);
        if (binding.modifiers["delayed"]) {
          delay = 3000;
        }
        if (binding.modifiers["blink"]) {
              let mainColor = binding.value.mainColor;
              let secondColor = binding.value.secondColor;
              let currentColor = mainColor;

          setTimeout(() => {
              setInterval(()=>{
                currentColor == secondColor ? currentColor = mainColor: currentColor = secondColor;
                    checkMethodsInterval(el, binding,currentColor);
              },binding.value.delay);
          }, delay);
        } else {
          setTimeout(() => {
            checkMethods(el, binding);
          }, delay);
        }

        const checkMethods = (el, binding) => {
          if (binding.arg == "background") {
            el.style.backgroundColor = binding.value.mainColor;
          } else {
            el.style.color = binding.value.mainColor;
          }
        };

        const checkMethodsInterval = (el, binding, cureentColor) => {
          if (binding.arg == "background") {
            el.style.backgroundColor = cureentColor;
          } else {
            el.style.color = cureentColor;
          }
        };
      }
    }
  }
};
</script>

<style scoped>
</style>>


