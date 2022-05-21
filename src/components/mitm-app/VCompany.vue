<template>
  <v-container >
	<v-layout 
	justify-center 
	>
	<div class="company_name">
		<h1>{{companyName}}</h1>
	</div>
	</v-layout>

	<br>

	
	<v-row
		align="center"
		justify="space-around"
		class="ma-n2"
		id="row-label"
	>
		<v-chip
			class="Indust"
			label
			x-large
			id="box"
		>
		{{industryText}}
			
		</v-chip>
		<v-chip
			class="status"
			label
			x-large
			id="box"
		>
			{{statusText}}
		</v-chip>
	</v-row>

	<br>

	<v-layout justify-center>
		<a v-bind:href="company_url">{{company_url}}</a>
	</v-layout>



	<div v-for="companySchedule in companySchedules" :key="companySchedule.schedule_title">
		<v-card 
			elevation="1"
			outlined
			title
			>
			<div class="schedule_title" id="schedule-title">
				<p>{{companySchedule.scheduleTitle}}</p>
			</div>
			<div class="schedule_date">
				<pre>日付&#009;&#009;{{companySchedule.scheduleDate}}</pre>
			</div>
			<div class="company_url">
				<pre>URL&#009;&#009;<a v-bind:href="companySchedule.scheduleUrl">{{companySchedule.scheduleUrl}}</a></pre>
			</div>
			<div class="memo">
				<pre>メモ&#009;&#009;{{companySchedule.scheduleMemo}}</pre>
			</div>
		</v-card>

		<br><br>
	</div>



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
	//public companySchedule = {scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'}
	public memo = '業界研究１DAYインターンシップは、半日プログラム（２時間程度）です。 総合職のマーケティングや 企画の体験を通じて、業界研究ができるセミナーです。少人数での開催ですので、人事担当者に業界の事や就職活動の事等何でもご相談いただけます。お気軽にご参加お待ちしています♪'
	public companySchedules = [
		{scheduleTitle:'1day業界セミナー', scheduleDate:'2022年5月21日', scheduleUrl:'https://talent.supporterz.jp/events/', scheduleMemo:this.memo},
		{scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'},
		{scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'},
	]


	
	
}
</script>


<style lang="scss">

.company_name{
	font-size: xx-large;
	//font-family:'Times New Roman', Times, serif;
}

#row-label{
	
}

#box{
	//width: 200px;
	padding-left: 10%;
	padding-right: 10%;

}

.v-chip__content{


	
}

#schedule-title{
	font-size: 24px;
	font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
#schedule-title > p{
	margin-bottom: 0%;
}



</style>
