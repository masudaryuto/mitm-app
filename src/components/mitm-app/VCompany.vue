<template>
  <v-container >
	<v-layout 
	justify-center 
	>
	<div class="company_name">
		<h1>{{companyName}}</h1>
	</div>
	</v-layout>

	<br><br>

	
	<v-row
		align="center"
		justify="space-around"
		class="ma-n2"
	>
		<v-chip
			class="Indust"
			label
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
		<a v-bind:href="company_url">{{company_url}}</a>
	</v-layout>

	<v-card 
		elevation="1"
		outlined
		title
		>
		<div class="schedule_title">
			<p>{{companySchedule.scheduleTitle}}</p>
		</div>
		<div class="schedule_date">
			<p>{{companySchedule.scheduleDate}}</p>
		</div>
		<div class="company_url">
			<p>{{companySchedule.scheduleUrl}}</p>
		</div>
		<div class="memo">
			<p>{{companySchedule.scheduleMemo}}</p>
		</div>
	</v-card>

	<br><br>



  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component({})
export default class VCompany extends Vue {
	public companyName = '企業名'
	public statusText = '選考状態'
	public industryText = '業種'
	public company_url = 'https://...'
	public companySchedule = {scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'}




	
	
}
</script>


<style lang="scss">

.company_name{
	font-size: xx-large;
	font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
