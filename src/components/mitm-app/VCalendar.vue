<template>
  <div>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
        <template v-slot:activator="{on}">
          <v-btn
            fab
            text
            large
            color="blue"
            v-on="on"
            float:left
          >
            <v-icon x-large>
                mdi-plus-circle
            </v-icon>
          </v-btn>
    <div align="right">
	<v-btn
            outlined
            large
            class="mr-4 adjust"
            color="grey darken-2"
			@click="$router.push('/companylist')"
            float:right
          >
                企業一覧
        </v-btn>
		</div>
          </template>
          <v-card>
              <v-card-title>
                  <span class="text-h5">{{formTitle}}</span>
              </v-card-title>
              <v-card-text>
                  <v-container>
                      <v-row>
                          <v-col
                          cols="12"
                          sm="6"
                          md="4"
                          >
                          <v-text-field
                            v-model="newEvent.name"
                            label="Event"
                          ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                                v-model="newEvent.start"
                                label="Start"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                                v-model="newEvent.end"
                                label="End"
                            ></v-text-field>
                          </v-col>
                          <v-col
                            cols="12"
                            sm="6"
                            md="4"
                          >
                            <v-text-field
                                v-model="newEvent.memo"
                                label="Memo"
                            ></v-text-field>
                          </v-col>
                      </v-row>
                  </v-container>
              </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click = "dialog = false"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar
          flat
        >
          <v-btn
            outlined
            class="mr-4"
            color="grey darken-2"
            @click="setToday"
          >
            Today
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="prev"
          >
            <v-icon small>
              mdi-chevron-left
            </v-icon>
          </v-btn>
          <v-btn
            fab
            text
            small
            color="grey darken-2"
            @click="next"
          >
            <v-icon small>
              mdi-chevron-right
            </v-icon>
          </v-btn>
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu
            bottom
            right
          >
            mdi-chevron-left<template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                color="grey darken-2"
                v-bind="attrs"
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>
                  mdi-menu-down
                </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Day</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Week</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Month</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 days</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
        ></v-calendar>
        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon>
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <span v-html="selectedEvent.details"></span>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
  </div>
</template>

<script>
  export default {
    
    data: () => ({
      focus: '',
      type: 'month',
      typeToLabel: {
        month: 'Month',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      newEvent: {
          name: '',
          start: '',
          end: '',
          memo: '',
      },
      events: [],
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }),
    mounted () {
      this.$refs.calendar.checkChange()
    },
    methods: {
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = ''
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      /*addEvent (name, start, end, ) {
          const events[]
          events.push({
              name: name,
              start: start,
              end: end,
              color: this.colors[this.rnd(0, this.colors.length - 1)],
              timed: !allDay
          })
          this.events = events
          return
      },*/
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
        }
        if (this.selectedOpen) {
          this.selectedOpen = false
          requestAnimationFrame(() => requestAnimationFrame(() => open()))
        } else {
          open()
        }
        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
        const events = []
        const min = new Date(`${start.date}T00:00:00`)//一か月における日付の最初
        const max = new Date(`${end.date}T23:59:59`)//一か月における日付の最後
        const days = (max.getTime() - min.getTime()) / 86400000
        const eventCount = this.events.length//this.rnd(days, days + 20)//
        console.log(2)
        console.log(eventCount)
        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          //const firstTimestamp = min.getTime();//this.rnd(min.getTime(), max.getTime())
          var date1 = new Date(this.events[i].start)
          const first = date1.getTime()//new Date(firstTimestamp - (firstTimestamp % 900000))//start.getTime();//
          var date2 = new Date(this.events[i].end)
          //const secondTimestamp = max.getTime()//this.rnd(2, allDay ? 288 : 8) * 900000
          const second = date2.getTime();//new Date(first.getTime() + secondTimestamp)//end.getTime();//
          console.log(date1)
          console.log(date2)
          events.push({
            name: this.events[i].name,//this.names[this.rnd(0, this.names.length - 1)],//
            start: date1,
            end: date2,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }
        /*
        for (let i = 0; i < eventCount; i++) {
          const allDay = this.rnd(0, 3) === 0
          const firstTimestamp = this.rnd(min.getTime(), max.getTime())
          const first = new Date(firstTimestamp - (firstTimestamp % 900000))
          const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
          const second = new Date(first.getTime() + secondTimestamp)
          console.log(first)
          console.log(second)
          events.push({
            name: this.names[this.rnd(0, this.names.length - 1)],
            start: first,
            end: second,
            color: this.colors[this.rnd(0, this.colors.length - 1)],
            timed: !allDay,
          })
        }*/
    
        this.events = events
      },
      rnd (a, b) {
        return Math.floor((b - a + 1) * Math.random()) + a
      },
      save () {
        console.log(this.newEvent.name)
        console.log(this.newEvent.start)
        this.events.push(this.newEvent)
        var date = new Date(this.newEvent.start)
        console.log(date.getTime())
        //this.eventCount += 1;
        //console.log(this.eventCount)
      },
    },
  }
</script>

<style>
    .calendar-height{
        padding: 80px;
        height: 100%;
    }
    .adjust{
        position: relative;
        top: -50px;
        right: 10px
    }
</style>