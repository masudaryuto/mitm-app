<template>
  <v-container>
	<h1>スケジュール追加</h1>
  <v-form>
    <v-text-field
      placeholder="タイトル"
      outlined
      >
    </v-text-field>

    <v-menu
      offset-y
    >
      <template v-slot:activator="{ attrs, on }">
        <v-btn
          class="black--text ma-5"
          v-bind="attrs"
          v-on="on"
        >
        企業名
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          link
          v-for="item in items" :key="item.title"
        >
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
   
    <br><br>
    
    <v-text-field
      placeholder="URL"
      height="1px"
      outlined
    >
    </v-text-field>

    <br><br>
    
    <v-text-field
      placeholder="メモ"
      outlined
    >
    </v-text-field>


  </v-form>
  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class VAddSchedule extends Vue {
  
  public items = [
    {title: 'Sony'},
    {title: 'Sony'},
  ]



  

}

</script>


<style lang="scss">

#list-item-66 {
  background-color: aquamarine;
}

</style>
