<template>
  <v-container>

    <div class="login_form">
      <h1>ログイン</h1>

      <v-form ref="form">
        <v-text-field
        placeholder="id"
        outlined
        v-model="id">
        </v-text-field>

        <v-text-field
        placeholder="password"
        outlined
        v-model="password"
        type="password"
        >
        {{password}}
        </v-text-field>
      </v-form>


      <v-row
      align="center"
      justify="space-around"
      >
        <v-btn
        color="primary"
       
        @click="$router.push('/company')"
        >
        ログイン
        </v-btn>
      </v-row>

    </div>



    
  </v-container>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component
export default class VMain extends Vue {
  
  public id = "m"

  public password = "090"
  
  public login(){
    return 0
  }
}
</script>


<style scoped>
.login_form > h1{
  color:black;
  text-align: center;
}



</style>
