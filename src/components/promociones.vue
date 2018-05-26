<template>
  <v-layout column="">
  <v-flex xs12="" sm6="">
    <v-card>
      <v-container fluid="" grid-list-md="">
        <v-layout row="" wrap="">
          <v-flex v-for="card in cards" v-bind="{ [`sm${card.flex}`]: true }" :key="card.title">
            <v-card>
              <v-card-media :src="card.src" height="200px">
                <v-container fill-height="" fluid="">
                  <v-layout fill-height="">
                    <v-flex xs12="" align-end="" flexbox=""><span v-text="card.title" class="title white--text"></span></v-flex>
                  </v-layout>
                </v-container>
              </v-card-media>
              <v-card-actions>
                <v-spacer>
                  <v-btn icon="">
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon="">
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon="">
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
  data: () => ({
    cards: [
      { title: '1', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion1.jpg?alt=media', flex: 3 },
      { title: '2', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion3.jpg?alt=media', flex: 3 },
      { title: '3', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion4.jpg?alt=media', flex: 3 },
      { title: '4', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion5.jpg?alt=media', flex: 3 },
      { title: '5', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion6.jpg?alt=media', flex: 3 },
      { title: '6', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion7.jpg?alt=media', flex: 3 },
      { title: '7', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion8.jpg?alt=media', flex: 3 },
      { title: '8', src: 'https://firebasestorage.googleapis.com/v0/b/hackatrix2018-1.appspot.com/o/img%2Fpromocion2.jpg?alt=media', flex: 3 }
    ]
  })
}
</script>







