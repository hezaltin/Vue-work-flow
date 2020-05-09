<template>
  <div class="form-basic-container">
    <div class="layout-container">
      <form novalidate class="md-layout" @submit.prevent="validateUser">
        <md-card class="md-layout-item md-size-100 md-small-size-100">
          <md-card-header>
            <div class="md-title">Users</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="email">Email</label>
                  <md-input
                    type="email"
                    name="email"
                    id="email"
                    autocomplete="email"
                    :value="form.email"
                    @change="form.email = $event.target.value"
                  />
                </md-field>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="password">Password</label>
                  <md-input name="password" id="password" type="e" v-model.lazy="form.password" />
                </md-field>
                {{form.password}}
              </div>
            </div>

            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="age">Age</label>
                  <md-input
                    type="number"
                    id="age"
                    name="age"
                    autocomplete="age"
                    v-model="form.age"
                  />
                </md-field>
              </div>
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Message</label>
                  <md-textarea v-model="form.message"></md-textarea>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-checkbox v-model="form.sendMail" value="SendMail">Send Mail</md-checkbox>
                <md-checkbox v-model="form.sendMail" value="SendInfoMail">Send Infomail</md-checkbox>
              </div>
              <div class="md-layout-item md-small-size-100">
                <md-radio v-model="form.gender" value="Male">Male</md-radio>
                <md-radio v-model="form.gender" value="Female">Female</md-radio>
              </div>
              <div class="md-layout-item md-small-size-100">
                <SwitchComponent v-model="form.dataSwitch" />
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label for="gender">Priority</label>
                  <md-select name="gender" id="gender" v-model="form.priority" md-dense>
                    <md-option>Select</md-option>
                    <md-option value="M">M</md-option>
                    <md-option value="F">F</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>
          </md-card-content>

          <md-card-actions>
            <md-button type="submit" class="md-primary">Create user</md-button>
          </md-card-actions>
        </md-card>
      </form>
    </div>
    <div class="layout-container" v-if="isSubmitted">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Reactive Data</div>
        </md-card-header>
        <md-card-content>
          <md-table>
            <md-table-row>
              <md-table-head md-numeric>ID</md-table-head>
              <md-table-head>Property</md-table-head>
              <md-table-head>Value</md-table-head>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>1</md-table-cell>
              <md-table-cell>Email</md-table-cell>
              <md-table-cell>{{form.email}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>2</md-table-cell>
              <md-table-cell>Password</md-table-cell>
              <md-table-cell>{{form.password}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>3</md-table-cell>
              <md-table-cell>Age</md-table-cell>
              <md-table-cell>{{form.age}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>4</md-table-cell>
              <md-table-cell>Message</md-table-cell>
              <md-table-cell style="white-space: pre">{{form.message}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>5</md-table-cell>
              <md-table-cell>Send Mail</md-table-cell>
              <md-table-cell>{{form.sendMail}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>6</md-table-cell>
              <md-table-cell>Gender</md-table-cell>
              <md-table-cell>{{form.gender}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>7</md-table-cell>
              <md-table-cell>Priority</md-table-cell>
              <md-table-cell>{{form.priority}}</md-table-cell>
            </md-table-row>
            <md-table-row>
              <md-table-cell md-numeric>8</md-table-cell>
              <md-table-cell>Switch</md-table-cell>
              <md-table-cell>{{form.dataSwitch}}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
    </div>
  </div>
</template>

<script>
import SwitchComponent from "./SwitchComponent";
export default {
  data: () => {
    return {
      form: {
        email: "",
        password: "",
        age: 27,
        message: "Hello World",
        priority: "M",
        gender: "Male",
        sendMail: [],
        dataSwitch: true
      },
      isSubmitted:false
    };
  },
  components: {
    SwitchComponent
  },
  methods:{
    validateUser(event){
      console.log(event);
      this.isSubmitted = true;

    }
  }
};
</script>


<style scoped>
.form-basic-container {
  display: flex;
  justify-content: center;
  margin: 5%;
  flex-direction: column;
  margin-top: 0px;
}
.layout-container {
  margin: 2%;
}
</style>