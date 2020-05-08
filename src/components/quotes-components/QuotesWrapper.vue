<template>
  <div class="container">
    <div class="wrapper">
      <QuoteHeader :maxCount="maxCount" :quoteLength="quotes.length" />
    </div>

    <div  class="wrapper">
      <QuoteForm @addQuotes="getQuotes($event)" />
    </div>

    <div  class="wrapper">
      <QuoteGrid :quote="quotes" @quoteDelete="deleteQuote($event)" />
    </div>

    <div class="wrapper">
      <md-toolbar md-elevation="0">
        <h3 class="md-title">info: Click on a quote to delete it!!</h3>
      </md-toolbar>
    </div>

    <QuoteDialog :showDialogQuote="showDialog" @dialogClose="getDialogEvent($event)" />
  </div>
</template>

<script>
import QuoteGrid from "./QuoteGrid";
import QuoteForm from "./QuoteForm";
import QuoteHeader from "./QuoteHeader";
import QuoteDialog from "./QuoteAlert";
export default {
  data: () => {
    return {
      initialQuote: "Just a Quote With start Something",
      quotes: ["Just a Quote With start Something"],
      maxCount: 10,
      showDialog: false
    };
  },
  components: {
    QuoteGrid,
    QuoteForm,
    QuoteHeader,
    QuoteDialog
  },
  methods: {
    getQuotes(event) {
      if (this.quotes.length > 9) {
        this.showDialog = true;
        return;
      }
      this.quotes.push(event);
    },
    deleteQuote(event) {
      this.quotes.splice(event, 1);
    },
    getDialogEvent(event) {
      this.showDialog = event;
    }
  }
};
</script>

<style scoped>
.container {
  margin-left: 5%;
}
.md-toolbar{
    width: inherit;
    margin-right: 5%;
    justify-content: center;
    font-style: oblique;
}
.wrapper{
    margin: 3%;
}
</style>