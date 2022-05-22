<template>
  <v-container ><div align="right"><v-btn
            outlined
            large
            class="mr-4"
			@click="$router.push('/companylist')"
          >
                一覧に戻る
        </v-btn>
		</div>
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
			<div class="schedule-title">
				<p>{{companySchedule.scheduleTitle}}</p>
			</div>
			<div class="schedule-date">
				<pre>日付&#009;&#009;{{companySchedule.scheduleDate}}</pre>
			</div>
			<div class="schedule-url">
				<pre>URL&#009;&#009;<a v-bind:href="companySchedule.scheduleUrl">{{companySchedule.scheduleUrl}}</a></pre>
			</div>
			<div class="schedule-memo">
				<pre>メモ&#009;&#009;{{companySchedule.scheduleMemo}}</pre>
			</div>
		</v-card>

		<br><br>
	</div>

	<input @click="getIp" type="button" value="テストIP取得">



  </v-container>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import VCompanyList from '@/components/mitm-app/VCompanyList.vue';

//企業一覧リストから取得
@Component({
	components:{
		VCompanyList,
	},
})
export default class VCompany extends Vue {
	public companyName = '企業名'
	public statusText = '選考状態'
	public industryText = '業種'
	public company_url = 'https://...'
	//public companySchedule = {scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'}
	public memo = '服装自由、交通費支給'
	public companySchedules = [
		{scheduleTitle:'1day業界セミナー', scheduleDate:'2022年5月21日', scheduleUrl:'https://talent.supporterz.jp/events/', scheduleMemo:this.memo},
		{scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'},
		{scheduleTitle:'予定タイトル', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'},
	]




	public getIp() {
		this.axios.get('/api/companies')
		.then((response) => {
			console.log(response.data)
		})
		.catch((e) => {
		alert(e)
		//テストデータ
		
		this.companyName = 'サイバーエージェント'
		this.statusText = '内定'
		this.industryText = 'エンジニア'
		this.company_url = 'https://www.cyberagent.co.jp/'
		const schedule = {scheduleTitle:'サイバーエージェントインターン', scheduleDate:'日付', scheduleUrl:'URL', scheduleMemo:'メモ'}

		this.companySchedules.length = 0
		this.companySchedules.push(schedule)
		
		});
	}
	
}
</script>


<style lang="scss">

.company_name{
	font-size: xx-large;
	//font-family:'Times New Roman', Times, serif;
}
.company_name > h1{
	font-family:'Times New Roman', Times, serif;
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

.schedule-title{
	font-size: 30px;
	font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

}
.schedule-title > p{
	margin-bottom: 0%;
}
.schedule-date ,.schedule-url, .schedule-url, .schedule-memo > pre{
	font-size: 20px;
}




</style>
