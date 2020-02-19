<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:70vw">
        <h2 class="my-4">Summary</h2>
        <v-divider></v-divider>
        <org-chart :datasource="ds">

        </org-chart>
        <div>{{ds}}</div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import OrgChart from './OrganizationChartContainer.vue'

export default {
  name: 'Summary',

  components: {
    OrgChart
  },

  data: () => ({

    ds :{ "id": "1", "name": "1. CONSTITUER UN GROUPE DE TRAVAIL EN RPO ET ÉTABLIR COLLECTIVEMENT DES PROCESSUS DE FONCTIONNEMENT. ", "children": [ { "id": "2", "name": "1.1. RECRUTER DES REPRÉSENTANTS DES PARTIES PRENANTES QUI ONT UNE EXPÉRIENCE DE TRAVAIL EN GROUPE. ", "title": "", "selected": true }, { "id": "3", "name": "1.2. RECRUTER DES MEMBRES DU GROUPE DE TRAVAIL QUI PROVIENNENT DE TOUTES LES PARTIES PRENANTES, DONT LA GESTION.", "title": "asdfasdfasdf", "selected": false }, { "id": "4", "name": "1.3. ÉVALUER ET SATISFAIRE AUX BESOINS EN FORMATION DES MEMBRES DU GROUPE DE TRAVAIL.", "title": "", "selected": true }, { "id": "5", "name": "1.4. ÉTABLIR DES PROCESSUS DE GESTION DE PROJET.", "title": "", "selected": true }, { "id": "6", "name": "1.5. PLANIFIER ET TENIR DES RÉUNIONS À INTERVALLES RÉGULIERS.", "title": "", "selected": true }, { "id": "7", "name": "1.6. S’ASSURER QUE LES RÉUNIONS SONT STRUCTURÉES, CIBLÉES ET ÉVALUÉES.", "title": "", "selected": true }, { "id": "8", "name": "1.7. S’ENTENDRE SUR DES MÉCANISMES DE COMMUNICATIONS.", "title": "", "selected": true }, { "id": "9", "name": "1.8. ÉTABLIR DES MÉCANISMES ASSURANT LA CONTINUITÉ.", "title": "", "selected": true } ] }
  }),

  mounted:function(){
    // this.ds = this.$route.params.data
  },

  watch: {
  },

  methods: {
  },
};
</script>