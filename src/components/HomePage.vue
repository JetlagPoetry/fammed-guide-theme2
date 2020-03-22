<template>
  <v-container fluid style="padding:0; margin:0">
    <v-parallax 
      style="background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12); height: 90vh; min-height:600px">
          <v-row
            align="center"
            justify="center"
          >
          <v-col class="text-center pb-12" cols="12">
            <h1 class="mb-8" style="font-size: 38px;">{{$t('home.text_title')}}</h1>
            <div v-html="$t('home.text_desc')"></div>
            <v-btn class="my-6" outlined x-large color="#fff" @click="toGuidePage">
              {{$t('home.btn_customize')}}<v-icon right>mdi-arrow-right</v-icon> 
            </v-btn>
            
          </v-col>
        </v-row>
    </v-parallax>

    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-row
            align="center"
            justify="center"
            class="lighten-5"
            style="height: 300px;"
          >
            <div
              class="mx-12"
              max-width="344"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </div>
            <div
              class="mx-12"
              max-width="344"
              outlined
            >
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="overline mb-4">OVERLINE</div>
                  <v-list-item-title class="headline mb-1">Headline 5</v-list-item-title>
                  <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                  color="grey"
                ></v-list-item-avatar>
              </v-list-item>

              <v-card-actions>
                <v-btn text>Button</v-btn>
                <v-btn text>Button</v-btn>
              </v-card-actions>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-footer
      padless
    >
      <v-card
        flat
        tile
        color="dimgray"
        class="lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn class="ma-2" text icon color="#fff">
            <v-icon>mdi-home</v-icon>
          </v-btn>
          <v-btn class="ma-2" text icon color="#fff">
            <v-icon>mdi-email</v-icon>
          </v-btn>
          <v-btn class="ma-2" text icon color="#fff">
            <v-icon>mdi-calendar</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-container>
</template>
<script>
export default {
  name: 'HomePage',

  components: {
  },

  data: () => ({
  }),

  watch: {
  },

  methods: {

      toGuidePage() {
        this.$router.push('/guide');
      },
  }
};
</script>

<style scoped src="../css/mycss.css"/>
