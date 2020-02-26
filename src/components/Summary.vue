<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:70vw">
        <h2 class="my-4">Summary</h2>
        <v-divider></v-divider>
<!--         <org-chart :datasource="ds">
        </org-chart> -->
        <div id="sample">
    <diagram2 ref="diag" v-bind:model-data="nodeDataArray" style="background-color: #f2f2f2; border: solid 1px black; width: 100%; height: 700px"></diagram2>
    <v-btn @click="addNode()">Add Child to Gamma</v-btn>
    <v-btn @click="modifyStuff()">Modify view model data without undo</v-btn>
    <br>Current Node:
    <input v-model.lazy="currentNodeText" v-bind:disabled="currentNode === null">
    <br>The saved GoJS Model:
    <textarea style="width:100%;height:250px" v-model="savedModelText"></textarea>
    <p class="box bg-info">
      This is a <a href="https://vuejs.org">Vue.js</a> sample.
    </p>
    <p>
      The GoJS Diagram is held in a "diagram" component, and only exposes a small fraction of the functionality of <a>Diagram</a>.
      That includes the "modelData" property, to initialize the Diagram to show a model, and
      the "diagram" property, to get access to the <a>Diagram</a>.
    </p>
    <p>
      That component also raises two events: "model-changed" corresponding to <a>Model.addChangedListener</a>, and
      "changed-selection" for the "ChangedSelection" <a>DiagramEvent</a>.
    </p>
    <p>
      That component also supports two different ways of modifying the diagram: access to the <a>Model</a> via the "model" method
      so that code can call Model methods such as <a>Model.setDataProperty</a>, and an "updateDiagramFromData" method.
      The latter permits data changes without calling Model methods to notify Diagrams showing the model,
      but at the cost of not being able to support undo and redo.
    </p>
  </div>

        <!-- <diagram2></diagram2> -->
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
    Diagram2
  },

  data: () => ({
  nodeDataArray : [
        { key: 0, name: "Ban Ki-moon 반기문", nation: "SouthKorea", title: "Secretary-General of the United Nations", headOf: "Secretariat" },
        { key: 1, boss: 0, name: "Patricia O'Brien", nation: "Ireland", title: "Under-Secretary-General for Legal Affairs and United Nations Legal Counsel", headOf: "Office of Legal Affairs" },
        { key: 3, boss: 1, name: "Peter Taksøe-Jensen", nation: "Denmark", title: "Assistant Secretary-General for Legal Affairs" },
        { key: 9, boss: 3, name: "Other Employees" },
        { key: 4, boss: 1, name: "Maria R. Vicien - Milburn", nation: "Argentina", title: "General Legal Division Director", headOf: "General Legal Division" },
        { key: 10, boss: 4, name: "Other Employees" },
        { key: 5, boss: 1, name: "Václav Mikulka", nation: "CzechRepublic", title: "Codification Division Director", headOf: "Codification Division" },
        { key: 11, boss: 5, name: "Other Employees" },
        { key: 6, boss: 1, name: "Sergei Tarassenko", nation: "Russia", title: "Division for Ocean Affairs and the Law of the Sea Director", headOf: "Division for Ocean Affairs and the Law of the Sea" },
        { key: 12, boss: 6, name: "Alexandre Tagore Medeiros de Albuquerque", nation: "Brazil", title: "Chairman of the Commission on the Limits of the Continental Shelf", headOf: "The Commission on the Limits of the Continental Shelf" },
        { key: 17, boss: 12, name: "Peter F. Croker", nation: "Ireland", title: "Chairman of the Committee on Confidentiality", headOf: "The Committee on Confidentiality" },
        { key: 31, boss: 17, name: "Michael Anselme Marc Rosette", nation: "Seychelles", title: "Vice Chairman of the Committee on Confidentiality" },
        { key: 32, boss: 17, name: "Kensaku Tamaki", nation: "Japan", title: "Vice Chairman of the Committee on Confidentiality" },
        { key: 33, boss: 17, name: "Osvaldo Pedro Astiz", nation: "Argentina", title: "Member of the Committee on Confidentiality" },
        { key: 34, boss: 17, name: "Yuri Borisovitch Kazmin", nation: "Russia", title: "Member of the Committee on Confidentiality" },
        { key: 18, boss: 12, name: "Philip Alexander Symonds", nation: "Australia", title: "Chairman of the Committee on provision of scientific and technical advice to coastal States", headOf: "Committee on provision of scientific and technical advice to coastal States" },
        { key: 35, boss: 18, name: "Emmanuel Kalngui", nation: "Cameroon", title: "Vice Chairman of the Committee on provision of scientific and technical advice to coastal States" },
        { key: 36, boss: 18, name: "Sivaramakrishnan Rajan", nation: "India", title: "Vice Chairman of the Committee on provision of scientific and technical advice to coastal States" },
        { key: 37, boss: 18, name: "Francis L. Charles", nation: "TrinidadAndTobago", title: "Member of the Committee on provision of scientific and technical advice to costal States" },
        { key: 38, boss: 18, name: "Mihai Silviu German", nation: "Romania", title: "Member of the Committee on provision of scientific and technical advice to costal States" },
        { key: 19, boss: 12, name: "Lawrence Folajimi Awosika", nation: "Nigeria", title: "Vice Chairman of the Commission on the Limits of the Continental Shelf" },
        { key: 20, boss: 12, name: "Harald Brekke", nation: "Norway", title: "Vice Chairman of the Commission on the Limits of the Continental Shelf" },
        { key: 21, boss: 12, name: "Yong-Ahn Park", nation: "SouthKorea", title: "Vice Chairman of the Commission on the Limits of the Continental Shelf" },
        { key: 22, boss: 12, name: "Abu Bakar Jaafar", nation: "Malaysia", title: "Chairman of the Editorial Committee", headOf: "Editorial Committee" },
        { key: 23, boss: 12, name: "Galo Carrera Hurtado", nation: "Mexico", title: "Chairman of the Training Committee", headOf: "Training Committee" },
        { key: 24, boss: 12, name: "Indurlall Fagoonee", nation: "Mauritius", title: "Member of the Commission on the Limits of the Continental Shelf" },
        { key: 25, boss: 12, name: "George Jaoshvili", nation: "Georgia", title: "Member of the Commission on the Limits of the Continental Shelf" },
        { key: 26, boss: 12, name: "Wenzhang Lu", nation: "China", title: "Member of the Commission on the Limits of the Continental Shelf" },
        { key: 27, boss: 12, name: "Isaac Owusu Orudo", nation: "Ghana", title: "Member of the Commission on the Limits of the Continental Shelf" },
        { key: 28, boss: 12, name: "Fernando Manuel Maia Pimentel", nation: "Portugal", title: "Member of the Commission on the Limits of the Continental Shelf" },
        { key: 7, boss: 1, name: "Renaud Sorieul", nation: "France", title: "International Trade Law Division Director", headOf: "International Trade Law Division" },
        { key: 13, boss: 7, name: "Other Employees" },
        { key: 8, boss: 1, name: "Annebeth Rosenboom", nation: "Netherlands", title: "Treaty Section Chief", headOf: "Treaty Section" },
        { key: 14, boss: 8, name: "Bradford Smith", nation: "UnitedStates", title: "Substantive Legal Issues Head", headOf: "Substantive Legal Issues" },
        { key: 29, boss: 14, name: "Other Employees" },
        { key: 15, boss: 8, name: "Andrei Kolomoets", nation: "Russia", title: "Technical/Legal Issues Head", headOf: "Technical/Legal Issues" },
        { key: 30, boss: 15, name: "Other Employees" },
        { key: 16, boss: 8, name: "Other Employees" },
        { key: 2, boss: 0, name: "Heads of Other Offices/Departments" }
      ],
    ds :{ "id": "1", "name": "1. CONSTITUER UN GROUPE DE TRAVAIL EN RPO ET ÉTABLIR COLLECTIVEMENT DES PROCESSUS DE FONCTIONNEMENT. ", "children": [ { "id": "2", "name": "1.1. RECRUTER DES REPRÉSENTANTS DES PARTIES PRENANTES QUI ONT UNE EXPÉRIENCE DE TRAVAIL EN GROUPE. ", "title": "", "selected": true }, { "id": "3", "name": "1.2. RECRUTER DES MEMBRES DU GROUPE DE TRAVAIL QUI PROVIENNENT DE TOUTES LES PARTIES PRENANTES, DONT LA GESTION.", "title": "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf", "selected": false }, { "id": "4", "name": "1.3. ÉVALUER ET SATISFAIRE AUX BESOINS EN FORMATION DES MEMBRES DU GROUPE DE TRAVAIL.", "title": "", "selected": true }, { "id": "5", "name": "1.4. ÉTABLIR DES PROCESSUS DE GESTION DE PROJET.", "title": "", "selected": true }, { "id": "6", "name": "1.5. PLANIFIER ET TENIR DES RÉUNIONS À INTERVALLES RÉGULIERS.", "title": "", "selected": true }, { "id": "7", "name": "1.6. S’ASSURER QUE LES RÉUNIONS SONT STRUCTURÉES, CIBLÉES ET ÉVALUÉES.", "title": "", "selected": true }, { "id": "8", "name": "1.7. S’ENTENDRE SUR DES MÉCANISMES DE COMMUNICATIONS.", "title": "", "selected": true }, { "id": "9", "name": "1.8. ÉTABLIR DES MÉCANISMES ASSURANT LA CONTINUITÉ.", "title": "", "selected": true } ] }
  }),

  computed: {
    
  },
  methods: {
  }
};
</script>