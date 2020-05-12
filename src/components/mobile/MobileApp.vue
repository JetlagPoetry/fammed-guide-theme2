<template>
  <v-container>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer=!drawer"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down mx-12"
          contain
          min-width="100"
          src="../../assets/my_logo.png"
          width="160"
          position="center"
        />
        
      </div>

      <v-spacer></v-spacer>
        <v-btn
        @click="changeLanguage"
        color="secondary"
        text
      >
        <span class="mr-2">{{$t('nav.btn_lang')}}</span>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary>
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Chapter1</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Chapter2</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Chapter3</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Chapter4</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
          <div>adasdfasdfsdfadasdfasdfsdfadasdfasdfsdfadasdfasdfsdf</div>
      <v-card-text>
        The navigation drawer will appear from the bottom on smaller size screens.
      </v-card-text>
    </v-content>
  </v-container>
</template>
<script>
export default {
  name: 'MobileApp',

  components: {
  },

  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group () {
      this.drawer = false
    },
  },

  methods: {
    changeLanguage(){
      if(this.$i18n.locale==='fr'){
        this.$i18n.locale='en';
      }else{
        this.$i18n.locale='fr';
      }
    },
    
  }
};
</script>
