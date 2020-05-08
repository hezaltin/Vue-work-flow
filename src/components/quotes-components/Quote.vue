<template>
  <div>
    <md-card>
      <md-card-header>
        <div class="md-title"> <slot></slot></div>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
 .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
    cursor: pointer;
    color:darkcyan;
  }
  .md-title{
      font-family: "Dancing Script";
    font-size: 24px;
    font-style: normal;
    font-variant: normal;
    font-weight: 700 !important;
    line-height: 26.4px;
  }
  .md-card:hover{
      background-color: blanchedalmond;
  }
</style>