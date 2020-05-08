<template>
  <div>
    <md-dialog :md-active.sync="getshowDialogQuote" md-clicked-outside="propsClose($event)">
      <md-dialog-title>Quote Exceeded</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="clickClose">Close</md-button>
      </md-dialog-actions>
    </md-dialog>

  </div>
</template>

<script>
  export default {
    name: 'QuoteDialog',
    props:['showDialogQuote'],
    data: () => ({
    }),
    methods:{
        clickClose(){
            this.$emit('dialogClose',false)
        },
        propsClose(event){
            console.log(event)
        }
    },
    computed:{
        getshowDialogQuote:{
            //return this.showDialogQuote
            get(){
             return this.showDialogQuote
           },
           set(newName){
             return newName
           } 
        }
    }
  }
</script>

<style  scoped>
  /* .md-dialog /deep/.md-dialog-container {
    max-width: 768px;
  } */
</style>
