<template>
  <v-container fluid style="padding:0; margin:0">
    <v-parallax 
      style="background-image: linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12); height: 90vh">
          <v-row
            align="center"
            justify="center"
          >
          <v-col class="text-center pb-12" cols="12">
            <h1 class="mb-8" style="font-size: 38px;">{{$t('home.text_title')}}</h1>
            <div v-html="$t('home.text_desc')"></div>
            <v-btn outlined x-large color="#fff" @click="toGuidePage">
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
    <v-footer>
      <div class="flex text-center bg-dark pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4 p-3">
              <h2 class="mb-4">Contact</h2>
              <p class="m-0">
                <a href="tel:+246 - 542 550 5462" class="text-white">+246 - 542 550 5462</a>
              </p>
              <p>
                <a href="mailto:info@pingendo.com" class="text-white">info@pingendo.com</a>
              </p>
            </div>
            <div class="col-md-4 p-3">
              <h2 class="mb-4">Location</h2>
              <p>
                <a href="https://www.google.it/maps" target="blank" class="text-white">23 Fake Street <br>Seattle, WA 00000</a>
              </p>
            </div>
            <div class="col-md-4 p-3">
              <h2 class="mb-4">Openings</h2>
              <p>11:00 - 15:00 &amp; 19:00 - 00:00 Tue/Fri <br>11:00 - 15:00 &amp; 19:00 - 02:00 Sat/Sun</p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12 mt-3">
              <p class="text-center text-muted">© Copyright 2018 Pingendo - All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
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
