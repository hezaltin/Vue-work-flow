<template>
  <div class="header-container">
    <h2>Quotes Added</h2>
    <md-progress-bar md-mode="determinate" :md-value="getComputedLength"></md-progress-bar>
    <b>{{quoteLength}} / {{maxCount}}</b>
  </div>
</template>

<script>
export default {
  props: ["quoteLength","maxCount"],
  data:()=> {
    return {
    };
  },
  computed: {
    getComputedLength() {
      return this.quoteLength * 10;
    }
  }
};
</script>

<style scoped>
.md-progress-bar {
  margin-bottom: 10px;
  height: 20px;
}
.header-container {
  display: flex;
  flex-direction: column;
  margin-right: 5%;
}
h2{
    display: flex;
}
</style>