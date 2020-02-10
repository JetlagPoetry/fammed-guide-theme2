<template>
  <v-app>
    <!-- <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">

        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down ml-12"
          contain
          min-width="100"
          src="./assets/my_logo.png"
          width="160"
          position="center"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">I am the 2nd page</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>  -->
<div class="mt-12 px-12 mx-auto" style="width:1200px">
        asdfasdfasdf
        <router-link to="/query">Go to Foo</router-link>
        </div>
  </v-app>
</template>

<script>
export default {
  name: 'page2',

  components: {
  },

  data: () => ({
        cur_step: 1,
        steps: 4,
        progress : 90
  
  }),

  watch: {
      steps (val) {
        if (this.cur_step > val) {
          this.cur_step = val
        }
      },
    },

  methods: {
      nextStep (n) {
        if (n === this.steps) {
          this.cur_step = 1
        } else {
          this.cur_step = n + 1
        }
      },

      lastStep (n) {
        if (n === 1) {
          this.cur_step = 1
        } else {
          this.cur_step = n - 1
        }
      },
    },
};
</script>
