<template>
  <div class="form-container">
    <form>
      <md-field>
        <label>Type some Quotes</label>
        <md-textarea v-model="quotesTypings"></md-textarea>
      </md-field>
      <md-button class="md-raised md-primary" @click="addQuotes">Add Quotes</md-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quotesTypings: "Cute Quote"
    };
  },
  methods: {
    addQuotes() {
      this.$emit("addQuotes", this.quotesTypings);
    }
  }
};
</script>

<style scoped>
.form-container{
        margin-right: 5%;
}
</style>