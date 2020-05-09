<template>
  <div class="form-basic-container">
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-100 md-large-size-100">
        <md-card-header>
          <div class="md-title">Users</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-large-size-100">
              <md-field>
                <label for="email">Email</label>
                <md-input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  v-model="form.email"
                />
              </md-field>
            </div>

            <div class="md-layout-item md-large-size-100">
              <md-field>
                <label for="password">Password</label>
                <md-input
                  name="password"
                  id="password"
                   type="password"
                  autocomplete="given-name"
                  v-model="form.password"
                />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-large-size-100">
              <md-field>
                <label for="age">Age</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" />
              </md-field>
            </div>
            <div class="md-layout-item md-large-size-100">
              <md-field>
                <label>Message</label>
                <md-textarea v-model="form.message"></md-textarea>
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-large-size-100">
              <md-checkbox  value="SendMail">Send Mail</md-checkbox>
              <md-checkbox  value="SendInfoMail">Send Infomail</md-checkbox>
            </div>
            <div class="md-layout-item md-large-size-100">
              <md-radio value="Male">Male</md-radio>
              <md-radio value="Female">Female</md-radio>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-large-size-100">
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
</template>

<script>
export default {
    data:()=>{
        return{
            form:{
                email:'',
                password:'',
                age:27,
                message:'Hello World',
                priority:'M'
            }
        }
    }
};
</script>


<style scoped>
.form-basic-container{
    display: flex;
    justify-content: center;
}
</style>