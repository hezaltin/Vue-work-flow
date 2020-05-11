<template>
  <div class="container">
    <div class="row">
      <div class=" col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <md-button class="md-raised md-primary" @click="show=!show">Change Name</md-button>
        <br><br>
        <select v-model="dynamicName">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </select>
        <br<br>
        <transition :name="dynamicName" appear>
             <div class="alert alert-primary" role="alert" v-if="show">A simple primary alert—check it out!</div>
        </transition>
        <transition :name="dynamicName" type="animation" appear>
             <div class="alert alert-primary" role="alert" v-if="show">A simple primary alert—check it out!</div>
        </transition>
        <transition :name="dynamicName" type="animation" appear>
             <div class="alert alert-primary" role="alert" v-if="show">A simple primary alert—check it out!</div>
        </transition>
        <transition enter-active-class="animate__animated animate__bounce" leave-active-class="animate__animated  animate__shakeX">
             <div class="alert alert-primary" role="alert" v-if="show">A simple Animated out!</div>
        </transition>

        <transition :name="dynamicName" mode="out-in">
             <div class="alert alert-primary" role="alert" v-if="show" key="info">A simple primary alert by v-if!</div>
              <div class="alert alert-warning" role="alert" v-else  key="warning">A simple primary alert by v-else!</div>
        </transition>
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      dynamicName:'fade'
    };
  }
};
</script>

<style scoped>
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: 1s;
    }
    .fade-leave{
        /* opacity: 1; */
    }
    .fade-leave-active{
        transition: 1s;
        opacity: 0;
    }
    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave{
        /* opacity: 1; */
    }
    .slide-leave-active{
       animation:slide-out 1s ease-out forwards;
       transition:opacity 3s;
       opacity: 0;
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
        from{
            transform: translateY(0px);
        }
        to{
             transform: translateY(20px);
        }
    }
</style>