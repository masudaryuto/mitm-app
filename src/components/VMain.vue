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
        @click="signin"
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
  
  public id = "user1"

  public password = "pass0001"
  
  public login(){
    return 0
  }

//44.193.226.79/api/companies/903861419
  public getIp() {
    this.axios.get('/api/companies')
    .then((response) => {
        alert(response.data.origin);
    })
    .catch((e) => {
      alert(e);
    });
  }

  public signin() {
    this.axios.post('api/signin', {
      id: this.id,
      pass: this.password
    })
    .then(()=>this.$router.push('/company'))
    .catch((e)=>console.log(e));
    
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
