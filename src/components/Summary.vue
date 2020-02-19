<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:70vw">
        <h2 class="my-4">Summary</h2>
        <v-divider></v-divider>
<!--         <org-chart :datasource="ds">
        </org-chart> -->
        <div id="sample">
    <diagram2 ref="diag" v-bind:model-data="diagramData" v-on:model-changed="modelChanged" v-on:changed-selection="changedSelection" style="border: solid 1px black; width:100%; height:400px"></diagram2>
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
import go from 'gojs';
export default {
  name: 'Summary',

  components: {
    // OrgChart
    Diagram2
  },

  data: () => ({
  diagramData: {  // passed to  as its modelData
        nodeDataArray: [
          { key: 1, text: "Alpha", color: "lightblue" },
          { key: 2, text: "Beta", color: "orange" },
          { key: 3, text: "Gamma", color: "lightgreen" },
          { key: 4, text: "Delta", color: "pink" }
        ],
        linkDataArray: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 3, to: 4 }
        ]
      },
      currentNode: null,
      savedModelText: "",
      counter: 1,  // used by addNode
      counter2: 4,  // used by modifyStuff
    ds :{ "id": "1", "name": "1. CONSTITUER UN GROUPE DE TRAVAIL EN RPO ET ÉTABLIR COLLECTIVEMENT DES PROCESSUS DE FONCTIONNEMENT. ", "children": [ { "id": "2", "name": "1.1. RECRUTER DES REPRÉSENTANTS DES PARTIES PRENANTES QUI ONT UNE EXPÉRIENCE DE TRAVAIL EN GROUPE. ", "title": "", "selected": true }, { "id": "3", "name": "1.2. RECRUTER DES MEMBRES DU GROUPE DE TRAVAIL QUI PROVIENNENT DE TOUTES LES PARTIES PRENANTES, DONT LA GESTION.", "title": "asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf", "selected": false }, { "id": "4", "name": "1.3. ÉVALUER ET SATISFAIRE AUX BESOINS EN FORMATION DES MEMBRES DU GROUPE DE TRAVAIL.", "title": "", "selected": true }, { "id": "5", "name": "1.4. ÉTABLIR DES PROCESSUS DE GESTION DE PROJET.", "title": "", "selected": true }, { "id": "6", "name": "1.5. PLANIFIER ET TENIR DES RÉUNIONS À INTERVALLES RÉGULIERS.", "title": "", "selected": true }, { "id": "7", "name": "1.6. S’ASSURER QUE LES RÉUNIONS SONT STRUCTURÉES, CIBLÉES ET ÉVALUÉES.", "title": "", "selected": true }, { "id": "8", "name": "1.7. S’ENTENDRE SUR DES MÉCANISMES DE COMMUNICATIONS.", "title": "", "selected": true }, { "id": "9", "name": "1.8. ÉTABLIR DES MÉCANISMES ASSURANT LA CONTINUITÉ.", "title": "", "selected": true } ] }
  }),

  computed: {
          currentNodeText: {
            get: function() {
              var node = this.currentNode;
              if (node instanceof go.Node) {
                return node.data.text;
              } else {
                return "";
              }
            },
            set: function(val) {
              var node = this.currentNode;
              if (node instanceof go.Node) {
                var model = this.model();
                model.startTransaction();
                model.setDataProperty(node.data, "text", val);
                model.commitTransaction("edited text");
              }
            }
          }
        },
  methods: {
    // get access to the GoJS Model of the GoJS Diagram
    model: function() { return this.$refs.diag.model(); },

    // tell the GoJS Diagram to update based on the arbitrarily modified model data
    updateDiagramFromData: function() { this.$refs.diag.updateDiagramFromData(); },

    // this event listener is declared on the 
    modelChanged: function(e) {
      if (e.isTransactionFinished) {  // show the model data in the page's TextArea
        this.savedModelText = e.model.toJson();
      }
    },

    changedSelection: function(e) {
      var node = e.diagram.selection.first();
      if (node instanceof go.Node) {
        this.currentNode = node;
        this.currentNodeText = node.data.text;
      } else {
        this.currentNode = null;
        this.currentNodeText = "";
      }
    },

    // Here we modify the GoJS Diagram's Model using its methods,
    // which can be much more efficient than modifying some memory and asking
    // the GoJS Diagram to find differences and update accordingly.
    // Undo and Redo will work as expected.
    addNode: function() {
      var model = this.model();
      model.startTransaction();
      model.setDataProperty(model.findNodeDataForKey(4), "color", "purple");
      var data = { text: "NEW " + this.counter++, color: "yellow" };
      model.addNodeData(data);
      model.addLinkData({ from: 3, to: model.getKeyForNodeData(data) });
      model.commitTransaction("added Node and Link");
      // also manipulate the Diagram by changing its Diagram.selection collection
      var diagram = this.$refs.diag.diagram;
      diagram.select(diagram.findNodeForData(data));
    },

    // Here we modify VUE's view model directly, and
    // then ask the GoJS Diagram to update everything from the data.
    // This is less efficient than calling the appropriate GoJS Model methods.
    // NOTE: Undo will not be able to restore all of the state properly!!
    modifyStuff: function() {
      var data = this.diagramData;
      data.nodeDataArray[0].color = "red";
      // Note here that because we do not have the GoJS Model,
      // we cannot find out what values would be unique keys, for reference by the link data.
      data.nodeDataArray.push({ key: ++this.counter2, text: this.counter2.toString(), color: "orange" });
      data.linkDataArray.push({ from: 2, to: this.counter2 });
      this.updateDiagramFromData();
    }
  }
};
</script>