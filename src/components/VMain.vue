<template>
  <v-container>

    <div class="login_form">
      <h1>ログイン</h1>
      <br>
    <v-row justify="center" padding=80px>
    <v-col
      cols="12"
      sm="6"
      md="4"
      >
      <v-text-field
      placeholder="id"
      filled
      rounded
      dense
      outlined
      class="text-h5"
      height = 50px>
      </v-text-field>
      </v-col>
      </v-row>
    <v-row justify = "center">
      <v-col
      cols="12"
      sm = "6"
      md="4"
      >
      <v-text-field
      placeholder="password"
      filled
      rounded
      dense
      outlined
      class="text-h5"
      height = 50px>
      </v-text-field>
      </v-col>
      </v-row>
      <br><br>

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

    <input @click="getIp()" type="button" value="IPを取得">



    
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

//44.193.226.79/api/companies/903861419
  public getIp() {
    this.axios.get('44.193.226.79/api/companies/')
    .then((response) => {
        alert(response.data.origin);
    })
    .catch((e) => {
      alert(e);
    });
  }
}
</script>


<style scoped>
.login_form > h1{
  color:black;
  text-align: center;
}

.margin{
  padding-bottom: 100px;
  margin-bottom: 100px;
}

</style>
