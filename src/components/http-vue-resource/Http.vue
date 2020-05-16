<template>
  <div class="http-wrapper">
    <h1>Http Resource</h1>
    <div class="http-container">
      <HttpResource></HttpResource>
    </div>
  </div>
</template>

<script>
import HttpResource from "./HttpResource";
export default {
  components: {
    HttpResource
  }
};
</script>


<style scoped>
.http-wrapper {
  margin: 0 20%;
}
.http-container {
  border: 2px solid;
  border-radius: 10px;
}
</style>