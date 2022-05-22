<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
      id="app-bar"
    >
    就活管理アプリ


    </v-app-bar>


    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});


</script>

<style scoped>

#app-bar{
  font-family:'Times New Roman', Times, serif;
  font-size: 25px;
}
</style>
