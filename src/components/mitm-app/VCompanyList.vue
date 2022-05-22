<template>
  <v-card
    max-width="600"
    class="mx-auto"
  >
    <v-container>
    <div align="right">
        <v-btn
            outlined
            large
            class="mr-4 bit_bottom"
			@click="$router.push('/calendar')"
          >
                カレンダー
        </v-btn>
		</div>
	<div class="company_name">
		<h2 x-large align="center">企業一覧</h2>
	</div>
      <v-row dense>
        <!--<v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="text-h5">
              Unlimited music now
            </v-card-title>

            <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>
                Listen Now
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>-->

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
            @click="$router.push('/company')"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.name"
                ></v-card-title>

                <v-card-subsubtitle v-text="item.status" class ="bit_right"></v-card-subsubtitle>
                <v-card-subsubtitle v-text="item.url" class = "bit_right"></v-card-subsubtitle><br>
                <v-card-subsubtitle v-text="item.recently" class = "bit_right"></v-card-subsubtitle>
                <v-card-subsubtitle v-text="state" class = "bit_right"></v-card-subsubtitle>

                <v-card-actions>
                  <v-btn
                    v-if="item.artist === 'Ellie Goulding'"
                    class="ml-2 mt-3"
                    fab
                    icon
                    height="40px"
                    right
                    width="40px"
                  >
                    <v-icon>mdi-play</v-icon>
                  </v-btn>

                  <v-btn
                    v-else
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                  >
                    編集
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
        //state: '直近の予定',
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          url: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          name: 'A社',
          status: '1次面接結果待ち',
          recently: '05/23'
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          url: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          name: 'B社',
          status: '2次面接落ち',
          recently: '05/25'
        },
        {
          color: '#349752',
          name: '例',
          url: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          status: 'ES結果待ち',
          recently: '05/27'
        },
      ],
    }),
  }
</script>

<style>
.bit_right{
    position: relative;
    left: 10px;
}
.bit_down{
    position: relative;
    top: 50px;
}
</style>