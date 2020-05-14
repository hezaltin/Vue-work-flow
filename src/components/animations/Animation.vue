<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Animations</h1>
        <md-button class="md-raised md-primary" @click="load = !load">Load/Remove Element</md-button>
        <md-button class="md-raised md-primary" @click="show=!show">Animate</md-button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="afterLeaveCancelled"
          :css="false"
        >
          <div v-if="load" style="height:100px;width:300px;background:lightgreen"></div>
        </transition>
        <select v-model="dynamicName">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <br />
        <transition :name="dynamicName" appear>
          <div
            class="alert alert-primary"
            role="alert"
            v-if="show"
          >A simple primary alert—check it out!</div>
        </transition>
        <transition :name="dynamicName" type="animation" appear>
          <div
            class="alert alert-primary"
            role="alert"
            v-if="show"
          >A simple primary alert—check it out!</div>
        </transition>
        <transition :name="dynamicName" type="animation" appear>
          <div
            class="alert alert-primary"
            role="alert"
            v-if="show"
          >A simple primary alert—check it out!</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated  animate__shakeX"
        >
          <div class="alert alert-primary" role="alert" v-if="show">A simple Animated out!</div>
        </transition>

        <transition :name="dynamicName" mode="out-in">
          <div
            class="alert alert-primary"
            role="alert"
            v-if="show"
            key="info"
          >A simple primary alert by v-if!</div>
          <div
            class="alert alert-warning"
            role="alert"
            v-else
            key="warning"
          >A simple primary alert by v-else!</div>
        </transition>
        <hr />
        <md-button
          class="md-raised md-primary"
          @click="selectedComponent === 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'"
        >Animate</md-button>
        <br />
        <br />
        <transition :name="dynamicName" mode="out-in">
          <component :is="selectedComponent"></component>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="addNumber">Add Number</button>
        <br />
        <br />

        <ul class="list-group">
          <transition-group name="slide" type="animation">
            <li
              class="list-group-item"
              v-for="(number,index) in numbers"
              :key="number"
              @click="removeNumber(index)"
              style="cursor:pointer"
            >{{number}}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DangerAlert from "./DangerAlert";
import SuccessAlert from "./SuccessAlert";
export default {
  data() {
    return {
      show: true,
      dynamicName: "fade",
      load: false,
      elementWidth: 100,
      selectedComponent: "app-danger-alert",
      numbers: [1, 3, 5, 7, 9]
    };
  },
  components: {
    appDangerAlert: DangerAlert,
    appSuccessAlert: SuccessAlert
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      console.log(el);
      this.elementWidth = 100;
      el.style.width = `${this.elementWidth}px`;
    },
    enter(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = `${this.elementWidth + round * 10}px`;
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log("afterEnter");
      console.log(el);
    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled");
      console.log(el);
    },
    beforeLeave(el) {
      this.elementWidth = 300;
      el.style.width = `${this.elementWidth}px`;
    },
    leave(el, done) {
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = `${this.elementWidth - round * 10}px`;
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log("afterLeave");
      console.log(el);
    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled");
      console.log(el);
    },
    addNumber() {
      const position = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(position, 0, this.numbers.length + 1);
    },
    removeNumber(index) {
      this.numbers.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: 1s;
}
.fade-leave {
  /* opacity: 1; */
}
.fade-leave-active {
  transition: 1s;
  opacity: 0;
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