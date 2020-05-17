<template>
  <div>
    <!-- <div v-for="item in keyData" :key="item.id">
          <p>{{item.name}}</p>
          <p>{{item.id}}</p>
    </div>-->
    <md-table v-model="keyData" md-card>
      <md-table-toolbar>
        <h1 class="md-title">Servers</h1>
      </md-table-toolbar>
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
      </md-table-row>
    </md-table>

    <p>Child User Name : {{name}}</p>
    <p>Child Switched Name : {{switchName()}}</p>
    <p>User Age: {{userAge}}</p>
    <md-button class="md-raised md-primary" @click="resetName">Reset Name</md-button>
    <md-button class="md-raised md-primary" @click="resetFn">Reset Cllback</md-button>
  </div>
</template>

<script>
import {eventBus} from '../../main'
export default {
  name: "HostKey",
  props: {
    keyData: Array,
    name: String,
    resetFn: Function,
    userAge:Number
  },
  methods: {
    switchName() {
      return this.name
        .split("")
        .reverse()
        .join("");
    },
    resetName() {
      this.name = "Mich";
      this.$emit("resetname", this.name);
    }
  },
  created(){
      eventBus.$on('ageEdited',event=>{
          this.userAge = event
          console.log(event)
          
      })
  }
};
</script>

<style scoped>
    div{
        background: cadetblue;
    }
</style>>
