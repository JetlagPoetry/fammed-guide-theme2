import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
    themes: {
      light: {
        primary: '#11192c',
        secondary: '#f1f1f1',
        third: 'ffc841',
        anchor: '#8c9eff',
        footer: '#11192c',
        text: '#11192c'
      },
    },
  },
});
