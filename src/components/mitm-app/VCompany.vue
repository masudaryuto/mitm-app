<template>
  <v-container >
	<v-layout 
	justify-center 
	>
	<div class="company_name">
		企業名
	</div>
	</v-layout>

	<br><br>

	<v-row
		align="center"
		justify="space-around"
	>
		<v-chip
			class="Industry"
			label
			width="10"
		>
		
			{{industryText}}
		</v-chip>
		<v-chip
			class="status"
			label
		>
			{{statusText}}
		</v-chip>


	</v-row>

	<br>

	<v-layout justify-center>
		<a href="">https://</a>
		
	</v-layout>


	<v-card 
		elevation="1"
		outlined
		title
		>
		<div class="schedule_title">
			予定タイトル
		</div>
		<div class="schedule_date">
			<p>日付      </p>
		</div>
		<div class="company_url">
			<p>URL      </p>
		</div>
		<div class="memo">
			<p>メモ      </p>
		</div>
	</v-card>

	<br><br>

	<v-card 
		elevation="1"
		outlined
		title
		>
		<div class="schedule_title">
			予定タイトル
		</div>
		<div class="schedule_date">
			<p>日付      </p>
		</div>
		<div class="company_url">
			<p>URL      </p>
		</div>
		<div class="memo">
		
		</div>
	</v-card>


  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class VCompany extends Vue {
	public statusText = '選考状態'
	public industryText = '業種'

  
}
</script>


<style lang="scss">

.company_name{
	font-size: xx-large;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
