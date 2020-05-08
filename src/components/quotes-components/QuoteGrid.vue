<template>
  <div class="grid-container" :class="{'empty-quote': !quote.length}">
    <Quote @click.native="quoteDelete(index)" v-for="(quote,index) in quote" :key="index">
        {{quote}}
    </Quote>
    <h2 class="empty-quote" v-if="!quote.length">The is no Quotes!!</h2>
  </div>
</template>

<script>
import Quote from "./Quote";
export default {
  props: ["quote"],
  components: {
    Quote
  },
  methods:{
      quoteDelete(index){
          this.$emit('quoteDelete',index);
      }
  }
};
</script>

<style scoped>
.grid-container {
  display: flex;
  flex-wrap: wrap;
  margin-right: 5%;
  justify-content: center;
}
.empty-quote{
    justify-content: center;
}
</style>