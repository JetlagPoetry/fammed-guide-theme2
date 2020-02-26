<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:90vw">
        <h2 class="my-4">Summary</h2>
        <v-divider></v-divider>
    <diagram2 ref="diag" v-bind:model-data="ds" style="background-color: #f2f2f2; border: solid 1px black; width: 100%; height: 500px"></diagram2>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// import OrgChart from './OrganizationChartContainer.vue'
import Diagram2 from './Diagram2.vue'
export default {
  name: 'Summary',

  components: {
    // OrgChart
    Diagram2,
  },

  data: () => ({
    // nodeDataArray : [
    //     { key: 0, name: "Ban Ki-moon 반기문", nation: "SouthKorea", title: "Secretary-General of the United Nations", headOf: "Secretariat" },
    //     { key: 39, name: "Ban Ki-moon 반기문", nation: "SouthKorea", title: "Secretary-General of the United Nations", headOf: "Secretariat" },
    //     { key: 1, boss: 0, name: "Patricia O'Brien", nation: "Ireland", title: "Under-Secretary-General for Legal Affairs and United Nations Legal Counsel", headOf: "Office of Legal Affairs" },
    //     { key: 3, boss: 0, name: "Peter Taksøe-Jensen", nation: "Denmark", title: "Assistant Secretary-General for Legal Affairs" },
    //     { key: 9, boss: 0, name: "Other Employees" },
    //     { key: 4, boss: 0, name: "Maria R. Vicien - Milburn", nation: "Argentina", title: "General Legal Division Director", headOf: "General Legal Division" },
    //     { key: 10, boss: 0, name: "Other Employees" },
    //     { key: 5, boss: 0, name: "Václav Mikulka", nation: "CzechRepublic", title: "Codification Division Director", headOf: "Codification Division" },
    //     { key: 11, boss: 0, name: "Other Employees" },
    //   ],
    ds: [ { "key": 0, "substep": "STEP 1.", "comment": "" }, { "key": 1, "substep": "1.1. RECRUTER DES REPRÉSENTANTS DES PARTIES PRENANTES QUI ONT UNE EXPÉRIENCE DE TRAVAIL EN GROUPE. ", "comment": "commentcommentcommentcommentcommentcommentcommentcomment", "selected": false, "parent": 0 }, { "key": 2, "substep": "1.2. RECRUTER DES MEMBRES DU GROUPE DE TRAVAIL QUI PROVIENNENT DE TOUTES LES PARTIES PRENANTES, DONT LA GESTION.", "comment": "", "selected": false, "parent": 0 }, { "key": 3, "substep": "1.3. ÉVALUER ET SATISFAIRE AUX BESOINS EN FORMATION DES MEMBRES DU GROUPE DE TRAVAIL.", "comment": "", "selected": false, "parent": 0 }, { "key": 4, "substep": "1.4. ÉTABLIR DES PROCESSUS DE GESTION DE PROJET.", "comment": "", "selected": false, "parent": 0 }, { "key": 5, "substep": "1.5. PLANIFIER ET TENIR DES RÉUNIONS À INTERVALLES RÉGULIERS.", "comment": "", "selected": false, "parent": 0 }, { "key": 6, "substep": "1.6. S’ASSURER QUE LES RÉUNIONS SONT STRUCTURÉES, CIBLÉES ET ÉVALUÉES.", "comment": "", "selected": false, "parent": 0 }, { "key": 7, "substep": "1.7. S’ENTENDRE SUR DES MÉCANISMES DE COMMUNICATIONS.", "comment": "", "selected": false, "parent": 0 }, { "key": 8, "substep": "1.8. ÉTABLIR DES MÉCANISMES ASSURANT LA CONTINUITÉ.", "comment": "", "selected": false, "parent": 0 } ],
  }),

  mounted: function() {
  },

  computed: {
    
  },
  methods: {
  }
};
</script>