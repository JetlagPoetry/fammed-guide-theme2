import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
    themes: {
      light: {
        primary: '#3f51b5',
        secondary: '#b0bec5',
        third: 'ffc841',
        anchor: '#8c9eff',
        dimgray: '#99aaaa '
      },
    },
  },
});
