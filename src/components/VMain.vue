<template>
  <v-container>

    <div class="login_form">
      <h1>ログイン</h1>

      <v-text-field
      placeholder="id"
      outlined>
      </v-text-field>

      <v-text-field
      placeholder="password"
      outlined>
      </v-text-field>


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
  
  
}
</script>


<style scoped>
.login_form > h1{
  color:black;
  text-align: center;
}



</style>
