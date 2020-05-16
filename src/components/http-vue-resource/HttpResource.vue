<template>
  <div class="http-resource">
    <div class="http-resource-wrapper">
      <md-field>
        <label>User Name</label>
        <md-input v-model="user.userName" type="text"></md-input>
      </md-field>
      <md-field>
        <label>Email</label>
        <md-input v-model="user.email" type="email"></md-input>
      </md-field>
      <md-button class="md-raised md-primary" @click="submit">Submit</md-button>
    </div>
    <hr>
    <div>
       <md-field>
        <label>Dynamic urls</label>
        <md-input v-model="node" type="text"></md-input>
      </md-field>
    </div>
    <br><br>
    <div>
       <md-button class="md-raised md-primary" @click="fetchData">Get Data</md-button> 
        <br><br>
        <ul class="list-group">
            <li class="list-group-item" v-for="(u,index) in users" :key="index">
                {{u.userName}} - {{u.email}}
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        userName: "",
        email: ""
      },
      users:[],
      resource:{},
      node:'data'
    };
  },
  methods: {
    submit() {
    //   this.$http
    //     .post("", this.user)
    //     .then(response => {
    //       console.log(response);
    //     });
    // this.resource.save({},this.user) // default in vue resource
    this.resource.saveAlt(this.user) // custom resource

    },

    fetchData(){
        // this.$http
        // .get("data.json")
        // .then(response => response.json()).then(result=>{
        //     console.log(result);
        //     const resultArray = [];
        //     for(let key in result){
        //         resultArray.push(result[key]);
        //     }
        //     this.users = resultArray
        // });
        this.resource.getAlt({node: this.node})
        .then(response => response.json()).then(result=>{
            console.log(result);
            const resultArray = [];
            for(let key in result){
                resultArray.push(result[key]);
            }
            this.users = resultArray
        });
    }
  },
  created(){
    const customAction = { 
      saveAlt:{method:'POST',url:'alternative.json'},
      getAlt:{method:'GET'}
    }
    this.resource = this.$resource('{node}.json',{},customAction) // need to use the alternative approach as Resource insted of normal http if any need to see the documents
    //https://github.com/pagekit/vue-resource
  }
};
</script>

<style scoped>
.http-resource-wrapper {
  margin: 0 5%;
}
</style>