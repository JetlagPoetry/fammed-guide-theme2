<template>
  <v-app id="app">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down mx-12"
          contain
          min-width="100"
          src="./assets/my_logo.png"
          width="160"
          position="center"
        />
        
      </div>

      <v-spacer></v-spacer>

      <v-btn
          @click="toHomePage"
          text
        >
          <span class="mr-2">HOME</span>
        </v-btn>
        <v-btn
          @click="toGuidePage"
          text
        >
          <span class="mr-2">GUIDE</span>
        </v-btn>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
  
  }),

  watch: {

    },

  methods: {
      toHomePage () {
        this.$router.push('/');
      },

      toGuidePage() {
        this.$router.push('/guide');
      },

    },
};
</script>


