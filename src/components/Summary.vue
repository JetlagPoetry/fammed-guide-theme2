<template>
  <v-container>
    <v-row justify="center">
      <div class="mt-6 px-12" style="width:90%; max-width:1400px">
        <div class="d-flex justify-content-start my-4" style="width:100%">
          <v-btn text large color="primary" class="mx-2" @click="toGuidePage()">
              <v-icon left color="primary">mdi-arrow-left</v-icon>
              Modify Your Customization
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn text class="mx-2" large color="primary"  @click="generateImages()">
              Download Your PDF
              <v-icon right color="primary">mdi-arrow-right</v-icon>
          </v-btn>
        </div>
        <h2 class="my-4 mx-6">Summary</h2>
        <v-divider class="ma-6"></v-divider>
        <diagram2 class="mx-6" ref="diag" v-bind:model-data="diagram_data" style="background-color: #f2f2f2; width: 100%; height: 800px"></diagram2>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import jsPDF from 'jspdf'
import go from 'gojs'
import Diagram2 from './Diagram2.vue'
import {mapState} from 'vuex'

export default {
  name: 'Summary',

  components: {
    Diagram2,
  },

  data: () => ({

  }),

  computed:{
    ...mapState([
      'diagram_data'])
  },

  mounted: function() {

  },
  
  methods: {
    toGuidePage() {
      this.$router.push('/guide');
    },

    generateImages() {
      var img = this.$refs.diag.diagram.makeImage({
        scale: 1,
        type: "image / jpeg",
        background: "white",
        maxSize: new go.Size(Infinity, Infinity)
      });

      var doc = new jsPDF();
      doc.addImage(img.src, 'jpeg', 15, 40, 180, 320);
      doc.save('diagram.pdf');
    }
  }
};
</script>